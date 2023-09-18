#-----------------INFO----------------#
#CODING U7P4L1N
#FACEBOOK > ANONYMOUS CYBER 
#GITHUB > U7P4L-IN
#Join Telegram Channel For More Cracking Stuffs
#https://t.me/AN0NYM0U5_CY83R
## https://t.me/TheU7p4lArmyX
## TG : https://t.me/addlist/upzIILcBvVs0ZGJl
#-------------MAIN>MENU-------------#


import marshal,os,sys,time
os.system("clear")
os.system("xdg-open https://github.com/U7P4L-IN")
os.system("xdg-open https://github.com/U7P4L-IN")
os.system("clear")
os.system("xdg-open https://t.me/AN0NYM0U5_CY83R")

    
logo = ("""\033[1;92m





   \x1b\033[38;5;196m       _        \033[36;1m____   
   \x1b\033[38;5;197m      dM.      \033[36;1m6MMMMMMb/ 
   \x1b\033[38;5;198m     ,MMb     \033[36;1m8P      YM 
   \x1b\033[38;5;199m     d'YM.   \033[36;1m6M        Y
   \x1b\033[38;5;196m    ,P `Mb   \033[36;1mMM           
   \x1b\033[38;5;197m    d'  YM.  \033[36;1mMM        \x1b[1;97m\x1b[1;44m DEVELOPER: \x1b[0m\x1b[1;97m\x1b[1;41m U7P4L 1N \x1b[0m 
   \x1b\033[38;5;198m   ,P   `Mb  \033[36;1mMM           
   \x1b\033[38;5;199m   d'    YM. \033[36;1mMM           
   \x1b\033[38;5;196m  ,MMMMMMMMb \033[36;1mYM        6 
   \x1b\033[38;5;198m  d'      YM. \033[36;1m8b      d9 
   \x1b\033[38;5;199m_dM_     _dMM_ \033[36;1mYMMMMMM9  

  \x1b[1;91m--●\x1b[1;92m━═━═━═━━═━═━═\x1b[1;91m❴\033[47m\033[1;30mANONYMOUS CYBER™\033[40m\033[00m\x1b[1;91m❵\x1b[1;92m═━═━═━━═━═━\x1b[1;91m●-- 
""")
def main():
        try:
        	   
                print (logo)
                print ('    \033[1;32m┏━━━\033[97;1m\033[1;31m[\x1b[1;92m+\033[1;31m]\033[1;32m EXAMPLE :\033[33;1m/sdcard/file.py')
                file = input ('    \033[1;32m┗━━━\033[97;1m\033[1;31m[\x1b[1;92m+\033[1;31m] \033[1;32mFILE NAME :\033[33;1m ')
                fileopen = open(file).read()
                a = compile(fileopen, 'dg', 'exec')
                m = marshal.dumps(a)
                s = repr(m)
                b = ('##-----------------------ADMIN>INFO---------------------------##\n# ENCRYPTION BY :U7P4L 1N\n# VERSION : 1.0.2\n# GITHUB : https://github.com/U7P4L-IN\n##------------------------MAIN>MENU-------------------------##\nimport marshal\nexec(marshal.loads(' + s +'))')
                c = file.replace('.py', '.py')
                d = open(c, 'w')
                d.write(b)
                d.close()
                print ('    \033[97;1m\033[1;31m[\x1b[1;92m+\033[1;31m] \033[1;32mENCRYPTION SUCCESSFUL >',c)
                print('    \033[1;32m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
                time.sleep(1)
                aq = input ('    \033[97;1m\033[1;31m[\x1b[1;92m+\033[1;31m] \033[1;32mWANT TO ENCRYPT AGAIN? [Y/N]')
                if aq =="":
                        print ('    \033[97;1m\033[1;31m[\x1b[1;92m+\033[1;31m] \033[1;32mCOMMAND NOT FOUND !')
                        os.sys.exit()
                elif aq =="y" or aq =="Y":
                        main()
                else:
                        if aq =="n" or aq =="N":
                                print ('    \033[97;1m\033[1;31m[\x1b[1;92m+\033[1;31m] \033[1;32m➤THANK YOU BRO ;v\n')
                        else:
                                print ('    \033[97;1m\033[1;31m[\x1b[1;92m+\033[1;31m] \033[1;32mCOMMAND NOT FOUND!')
                                os.sys.exit()
        except IOError:
                print ('   \033[97;1m\033[1;31m[\x1b[1;92m+\033[1;31m] \033[1;32mFILE NOT FOUND ! ')
                time.sleep(1)
                main()

if __name__=='__main__':
        main()
