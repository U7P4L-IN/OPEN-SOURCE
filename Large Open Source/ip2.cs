import requests,json,os
from requests import get
from os import system
from json import loads
import random
import sys
import time
def mengetik(s):
    for c in s + '\n':
        sys.stdout.write(c)
        sys.stdout.flush()
#kecepatan mengetik
        time.sleep(random.random() * 0.1)
system('clear')
print ('''
	╻┏━┓   ╺┳╸┏━┓┏━┓┏━╸╻┏ ┏━╸┏━┓
	┃┣━┛    ┃ ┣┳┛┣━┫┃  ┣┻┓┣╸ ┣┳┛
	╹╹      ╹ ╹┗╸╹ ╹┗━╸╹ ╹┗━╸╹┗╸
==========================================
[+] Script Name : Ip Tracker
[+] Author : Riko
[+] Github : hack88id
==========================================
''')
ip1 = input('masukan ip : ')
ip = get(f'http://ip-api.com/json/{ip1}')
ip2 = loads(ip.text)
if ip2 ["status"] == "success":
	print ('status :',ip2["status"])
	print('Negara :',ip2["country"])
	print ('Code Negara :',ip2["countryCode"])
	print ('Nama Kota :',ip2["regionName"])
	print ('Zona Waktu :',ip2["timezone"])
	print ('Operator Internet :',ip2["isp"])
	print ('Ip :',ip2["query"])
elif ip2["status"] == "fail":
	mengetik('[!] Ip Tidak Di Temukan')
