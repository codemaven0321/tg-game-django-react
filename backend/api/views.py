from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.decorators import api_view
from .serializers import  UserSerializer, ReferralSerializer, SpinSerializer, GameSerializer, GameScoreSerializer
from .models import CustomUser, ReferralRelationship, Spin, Game, GameScore
from django.conf import settings
from django.http import JsonResponse, HttpResponse
from django.core.files.storage import FileSystemStorage
from django.db.models import Count, Sum, Max
import os
from datetime import timedelta, date, datetime
import requests
import uuid

@api_view(['GET'])
def profile_image(request, image_name):
    image_path = os.path.join(settings.MEDIA_ROOT, image_name)
    print( image_path)
    if os.path.exists(image_path):
        with open(image_path, 'rb') as f:
            return HttpResponse(f.read(), content_type="image/jpeg")
    else:
        return JsonResponse({'error': 'Image not found'}, status=404)
@api_view(['GET'])
def tonconnect(request):
    return JsonResponse({
            "app_name": "tonkeeper",    
            "name": "Tonkeeper",
            "image": "https://tonkeeper.com/assets/tonconnect-icon.png",
            "tondns":  "tonkeeper.ton",
            "about_url": "https://tonkeeper.com",
            "universal_url": "https://app.tonkeeper.com/ton-connect",
            "bridge": [ 
                {
                    "type": "sse",
                    "url": "https://bridge.tonapi.io/bridge"
                },
                {
                    "type": "js",
                    "key": "tonkeeper"
                }
            ],
            "platforms": ["ios", "android", "chrome", "firefox", "safari", "windows", "macos", "linux"]
        }, status=200)
@api_view(['GET'])
def tilloapi(request, params):
    api_url = f'https://sandbox.tillo.dev/api/v2/{params}'
    response = requests.post(api_url, data=request.POST)
    return HttpResponse(response)

class UserListCreateView(generics.ListCreateAPIView):
    queryset = CustomUser.objects.filter( is_superuser = 0)
    serializer_class = UserSerializer
    def create(self, request, *args, **kwargs):
        mutable_query_dict = request.data.copy()
        
        if 'referral' in mutable_query_dict:
            referral = mutable_query_dict.pop('referral')[0]
        avatar_url = mutable_query_dict.pop('avatar')[0]
        serializer = self.get_serializer(data=mutable_query_dict)

        print( avatar_url)
        response = requests.get( avatar_url)
        print( response.status_code)
        if response.status_code == 200:
            directory = "api/images"
        #     # Create the directory if it doesn't exist
            os.makedirs(directory, exist_ok=True)
            random_filename = str(uuid.uuid4()) + ".jpg"
            while os.path.exists(os.path.join(directory, random_filename)):
                random_filename = str(uuid.uuid4()) + ".jpg"
                print( random_filename)
            with open( os.path.join(directory, random_filename), 'wb') as f:
                f.write(response.content)
            print("Photo downloaded successfully")

        if serializer.is_valid():
            serializer.save()
            try:
                #Save in referral relationship table
                inviter = CustomUser.objects.filter( referral = referral).first()
                invitee = CustomUser.objects.filter( telegram_id = request.data['telegram_id'] ).first()
                referral_relationship = ReferralRelationship(inviter=inviter, invitee=invitee)
                referral_relationship.save()
                #update point
                inviter.points += 10
                inviter.save()
                #update avatar
                invitee.avatar = random_filename
                invitee.save()
                
            except Exception as e:
                print( e)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            errors = serializer.errors
            print("Validation errors:", errors)
        return Response( serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserSearchView(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        username = self.kwargs['username']
        return CustomUser.objects.filter(username__icontains=username)
      
class UserRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'telegram_id' 
   
    # permission_classes = [IsAuthenticated]

class RefferCodeView( APIView):
    def get(self, request, telegram_id):
        reffer = CustomUser.objects.filter( telegram_id = telegram_id).order_by('-id').first()
        if reffer and reffer.referral and reffer.referral != "":
            serializer = ReferralSerializer( reffer)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'status': 'no_user'}, status=status.HTTP_200_OK)        
    def put(self, request, format=None):
        try:
            reffer = CustomUser.objects.get( telegram_id = request.data['telegram_id'])
        except CustomUser.DoesNotExist:
            return Response({'status': 'no_user'}, status=status.HTTP_200_OK) 
        try:         
            reffer = CustomUser.objects.get( referral = request.data['referral'])
            return Response({'status': 'duplicate'}, status=status.HTTP_200_OK)
        except CustomUser.DoesNotExist:
            reffer = CustomUser.objects.get( telegram_id = request.data['telegram_id'])
            serializer = ReferralSerializer( reffer, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response( serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class SpinView( APIView):
    def post(self, request):
        serializer = SpinSerializer(data=request.data)
        if serializer.is_valid():
            telegram_id = request.data['telegram_id']
            user = CustomUser.objects.get(telegram_id=telegram_id)
            # Check if a record exists for the user and today's date
            existing_record = Spin.objects.filter(user=user, date=date.today()).first()
            if existing_record:
                return Response({'status' : 'already_exist'}, status=status.HTTP_200_OK)
            else:
                spin = Spin(user=user, bonus=50, date=date.today())  # Set the bonus value as needed
                spin.save()
                #increase user poing
                user.points += 50
                user.save()
                return Response({'status' : 'success'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request, telegram_id):
        user = CustomUser.objects.get(telegram_id=telegram_id)
        # Check if a record exists for the user and today's date
        existing_record = Spin.objects.filter(user=user).first()
        if existing_record:
            weekday = date.today().weekday()
            past_sunday = date.today() - timedelta(days=weekday) - timedelta( days =1)
            date_list = [past_sunday + timedelta(days=x) for x in range(7)]
            recent_results = Spin.objects.filter(date__in=date_list, user=user)
            result_dict = {str((date.weekday()+ 1) % 7): 0 for date in date_list}
            for result in recent_results:
                result_dict[str(( result.date.weekday()+ 1) % 7)] = result.bonus       
            return Response( result_dict, status=status.HTTP_200_OK)
        return Response({'status': 'does not exist'}, status=status.HTTP_200_OK)
class GameListCreateView(generics.ListCreateAPIView):
    queryset = Game.objects.all
    serializer_class = GameSerializer

class GameRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    lookup_field = 'id' 


class TournamentView( APIView):
    def get(self, request, game_id):
        top_players = GameScore.objects.filter(game_id=game_id).values('player__id').annotate(max_score=Max('score')).order_by('-max_score')[:20]
        user_data = []
        for player in top_players:
            user = CustomUser.objects.get( id = player["player__id"])
            user_data.append({
                'id' : user.id,
                'username' : user.username,
                'region' : user.region,
                'avatar': user.avatar.name,
                'score' : player["max_score"],
                "tgAmount": "2000k",
                "usdtAmount": "200$",
            })

        return Response( user_data, status=status.HTTP_200_OK)
