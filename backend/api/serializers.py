from rest_framework import serializers
from .models import ( 
    CustomUser, 
    ReferralRelationship,
    Spin,
    Game,
    GameScore
    )

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'telegram_id', 'gender', 'region', 'birthday', 'language', 'avatar', 'points', 'first_name', 'last_name', 'is_superuser', 'is_staff', 'is_active', 'referral']

class ReferralSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [ 'id', 'telegram_id', 'referral']

class ReferralRelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReferralRelationship
        fields = [ "inviter", "invitee"]

class SpinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spin
        fields = [ 'id', 'date', 'bonus']

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = [ 'title', 'url', 'picture']

class GameScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameScore
        fields = [ 'game', 'player', 'started_at', 'finish_at', 'score' ]