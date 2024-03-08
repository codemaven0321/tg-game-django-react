
import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton
import requests
import sqlite3
from datetime import datetime

import os
import uuid

API_TOKEN = '6971795674:AAF7kadp3zCXkTv3kEu12RTMZ2zigLz8KxM' #API Key for My First Bot
# API_TOKEN = "6771631978:AAH0sGO2XaMb6ss8bGjpqXGbAuBLP2QcYuk"
# API_TOKEN = "6886247803:AAEPlTFzcRFhf_pk9BWjdleq7tyA5NejoWM"
bot = telebot.TeleBot(API_TOKEN)
# Connect to the database


def get_country_from_ip():
    try:
        response = requests.get('https://ipinfo.io')
        data = response.json()
        country = data.get('country')
        return country
    except Exception as e:
        print("An error occurred:", e)
        return None

# def get_user_profile_photo( message):
def get_user_profile_photo(user_id):

    print( user_id)
    user_profile_photos = bot.get_user_profile_photos(user_id)
    if user_profile_photos.photos:
        # Get the file_id of the user's profile picture
        file_id = user_profile_photos.photos[0][-1].file_id
        # Get the file path of the user's profile picture
        file_path = bot.get_file(file_id).file_path
        return file_path
    else:
        return None
       
@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, "Howdy, how are you doing?")
    bot.message
    conn = sqlite3.connect('./backend/db.sqlite3')
    cursor = conn.cursor()
    
    country = get_country_from_ip()
    if country:
        print("Your PC is located in:", country)
    else:
        country = 'US'
        print("Unable to determine the country.")

    
    cursor.execute("SELECT id FROM api_customuser WHERE telegram_id = ?", (message.from_user.id,))
    existing_user = cursor.fetchone()

    if existing_user:
        print("User already exists with id:", existing_user[0])
    else:
        # print( message.from_user)
        profile_photo_path = get_user_profile_photo(message.from_user.id)
      
        url = f"https://api.telegram.org/file/bot{API_TOKEN}/{profile_photo_path}"
    
        response = requests.get(url)
        if response.status_code == 200:
            random_filename = str(uuid.uuid4()) + ".jpg"
            directory = "backend/api/images"
            # Create the directory if it doesn't exist
            while os.path.exists(os.path.join(directory, random_filename)):
                random_filename = str(uuid.uuid4()) + ".jpg"
            with open( os.path.join(directory, random_filename), 'wb') as f:
                f.write(response.content)
            print("Photo downloaded successfully")
            bot.send_message(chat_id=message.chat.id, text="Profile photo downloaded successfully")
        else:
            print("Failed to download photo")
            bot.send_message(chat_id=message.chat.id, text="Failed to download profile photo")
        
        user_data = {
            'password': 'pbkdf2_sha256$720000$r0X1QP4mZCXEpLzaFMCYNG$ocg7683gJxkRFxEcQ43j5dXNBCghKi+S/hOOEFZeolQ=', #default_password : Qwer1234
            'is_superuser': 0,
            'email':'hello@tg.games',
            'username': message.from_user.username,
            'first_name': message.from_user.first_name,
            'last_name': message.from_user.last_name,
            'avatar': random_filename,
            'telegram_id': message.from_user.id,
            'region': country,
            'birthday': '1970-01-01',
            'language': message.from_user.language_code,
            'gender': 'M',
            'is_staff' : 1,
            'is_active' : 1,
            'date_joined': datetime.now().strftime("%Y-%m-%d"),
            'referral' : ''
            }
        cursor.execute('''INSERT INTO api_customuser ( email, password, is_superuser, username, first_name, last_name, avatar, telegram_id, region, birthday, language, gender, is_staff, is_active, date_joined, referral) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''', ( user_data['email'], user_data['password'], user_data['is_superuser'], user_data['username'], user_data['first_name'], user_data['last_name'], user_data['avatar'], user_data['telegram_id'], user_data['region'], user_data['birthday'], user_data['language'], user_data['gender'], user_data['is_staff'], user_data['is_active'], user_data['date_joined'], user_data['referral']))
        # Commit the changes
        conn.commit()
        bot.reply_to(message, "Welcome to the first visit!")
    
    bot.reply_to(message, "Welcome to the first visit! Click [here](https://localhost:8000/) to visit our website.")
    conn.close()

bot.infinity_polling()
