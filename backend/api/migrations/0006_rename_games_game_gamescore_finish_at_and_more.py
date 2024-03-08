# Generated by Django 5.0.1 on 2024-02-14 02:45

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0005_games_gamescore"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Games",
            new_name="Game",
        ),
        migrations.AddField(
            model_name="gamescore",
            name="finish_at",
            field=models.DateTimeField(
                blank=True, default=datetime.datetime(2024, 2, 13, 21, 45, 20, 886218)
            ),
        ),
        migrations.AddField(
            model_name="gamescore",
            name="score",
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name="gamescore",
            name="started_at",
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
