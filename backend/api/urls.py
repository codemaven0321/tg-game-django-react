from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from .views import (
    profile_image,
    tonconnect,
    tilloapi,
    UserListCreateView,
    UserSearchView,
    UserRetrieveUpdateDestroyView,
    RefferCodeView,
    SpinView,
    GameListCreateView,
    GameRetrieveUpdateDestroyView,
    TournamentView
)
urlpatterns = [
    # API for authentication
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<str:username>', UserSearchView.as_view(), name='user-list-search'),
    path('user/<int:telegram_id>/', UserRetrieveUpdateDestroyView.as_view(), name='user-retrieve-update-destroy'),

    path('referral/<int:telegram_id>/', RefferCodeView.as_view(), name="referrals-get"),
    path('referral/', RefferCodeView.as_view(), name="referrals-save"),

    path('spin/', SpinView.as_view(), name="spin-add"),
    path('spin/<int:telegram_id>/', SpinView.as_view() , name="spin-get"),

    path('game/', GameListCreateView.as_view(), name='game-list-create'),
    path('game/<int:game_id>/', GameRetrieveUpdateDestroyView.as_view(), name='game-retrieve-update-destroy'),

    path('tournament/<int:game_id>/', TournamentView.as_view() , name="tournament-get"),

    path('images/<str:image_name>/', profile_image),
    path('tonconnect-manifest.json/', tonconnect),

    path('tillo/<path:params>/', tilloapi)
]   