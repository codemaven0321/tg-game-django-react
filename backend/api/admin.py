from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser, Game, GameScore

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ["username", 'telegram_id', 'gender', 'region', 'birthday', 'language', 'avatar', 'referral']
    search_fields = ("username", 'telegram_id', 'gender', 'region', 'birthday', 'language', 'avatar', 'referral')
    fieldsets =  [
        (
            None,
            {
                "fields": ["username"],
            },
        ),
        (
            "Advanced options",
            {
                "classes": ["collapse"],
                "fields": ['telegram_id', 'gender', 'region', 'birthday', 'language', 'avatar', 'referral'],
            },
        ),
    ]
admin.site.register(CustomUser, CustomUserAdmin)
@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'picture')
    search_fields = ('title', 'url', 'picture') 

@admin.register(GameScore)
class GameScoreAdmin(admin.ModelAdmin):
    list_display = ('game', 'player', 'started_at', 'finish_at', 'score')
    search_fields = ('game', 'player', 'started_at', 'finish_at', 'score')
# 
