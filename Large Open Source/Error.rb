# YT-Downloader

# Author       : U7P4L
# Github       : https://github.com/ANONYMOUS-U7P4L
# Description  : Download any video or audio of youtube from command line

black="\033[0;30m"
red="\033[0;31m"
green="\033[0;32m"
yellow="\033[0;33m"  
blue="\033[0;34m"
purple="\033[0;35m"
cyan="\033[0;36m"
white="\033[0;37m"

logo="""
"""+green+"""╭╮╱╱╭┳━━━━╮╭━━━╮╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╭╮
"""+red+"""┃╰╮╭╯┃╭╮╭╮┃╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱┃┃
"""+yellow+"""╰╮╰╯╭┻╯┃┃╰╯╱┃┃┃┣━━┳╮╭╮╭┳━╮┃┃╭━━┳━━┳━╯┣━━┳━╮
"""+cyan+"""╱╰╮╭╯╱╱┃┃╭━━┫┃┃┃╭╮┃╰╯╰╯┃╭╮┫┃┃╭╮┃╭╮┃╭╮┃┃━┫╭╯
"""+red+"""╱╱┃┃╱╱╱┃┃╰━┳╯╰╯┃╰╯┣╮╭╮╭┫┃┃┃╰┫╰╯┃╭╮┃╰╯┃┃━┫┃
"""+green+"""╱╱╰╯╱╱╱╰╯╱╱╰━━━┻━━╯╰╯╰╯╰╯╰┻━┻━━┻╯╰┻━━┻━━┻╯
                                            [By ANONYMOUS U7P4L]
"""

ask = green + '[' + white + '?' + green + '] '+ yellow
success = green + '[' + white + '√' + green + '] '
error = red + '[' + white + '!' + red + '] '
info= yellow + '[' + white + '+' + yellow + '] '+ cyan
pw= yellow + '[' + white + '+' +yellow + ']'+' Please Wait!'

begin
    require "httparty"
rescue LoadError => e
    system("gem install httparty")
    puts error+"Please restart"
    exit
rescue Exception => e
    print_exception(e, false)
    exit
end
if not (File.file?("/usr/bin/wget") or File.file?("/data/data/com.termux/files/usr/bin/wget"))
system("apt install wget -y")
end
if Dir.exist?('/data/data/com.termux/files/home')
if not File.file?("/data/data/com.termux/files/usr/bin/termimage")
system("apt install termimage -y")
end
end 
require "rubygems"
require "httparty"
system("clear")
puts logo+"\n\n"
print ask+"Choose one of the following:\n\n1.Audio\n2.Video\n0.Exit\n"+yellow+"---> "+ green
type=gets.chomp
case type
when "1"
print "\n"+ask+"Enter the youtube url:\n"+yellow+"---> "+ green
url=gets.chomp
if not url.include? "youtu"
    puts error+"Error! This is not a youtube link!"
    exit
end
puts pw+"\n"+cyan
begin
    response = HTTParty.get("https://api.zeks.xyz/api/ytmp3?url=#{url}&apikey=apivinz")
rescue SocketError => e
    puts error+"No internet"
    sleep(1)
    exit
rescue Exception => e
    print_exception(e, false)
    exit
end
post = response.parsed_response
status= "#{post['status']}"
while not post==""
if status==""
    puts info+"Currently service not available. Server reached daily limit. Try again later."
    exit    
elsif status == "true"
    break
elsif status == "false"
    puts error+"Wrong url"
    exit
else
    puts error+"Error"
    exit
end
end
link = "#{post['result']['url_audio']}"
when "2"
print ask+"Enter the youtube url:\n"+yellow+"---> "+ green
url=gets.chomp
if not url.include? "youtu"
    puts error+"Error! This is not a youtube link!"
    exit
end    
puts pw+"\n"+cyan
begin
    response = HTTParty.get("https://api.zeks.xyz/api/ytmp4?url=#{url}&apikey=apivinz")
rescue SocketError => e
    puts error+"No internet"
    sleep(1)
    exit
rescue Exception => e
    print_exception(e, false)
    exit
end
post = response.parsed_response
status= "#{post['status']}"
while not post==""
if status==""
    puts "Currently service not available. Server reached daily limit. Try agin later!"
    exit
elsif status== "true"
    break
elsif status == "false"
    puts error+"Wrong url"
    exit
else
    puts error+"Error"
    exit
end
end
link = "#{post['result']['url_video']}"
when "0"
    exit
else
    puts error+"Wrong input. Please choose 1 or 2"
    exit
end
title = "#{post['result']['title']}"
thumbnail= "#{post['result']['thumbnail']}"
puts "Title          : #{title}"
puts "Filesize       : #{post['result']['size']}"

if Dir.exist?('/data/data/com.termux/files/home')
puts "Thumbnail      :"
system("wget -O '#{title}.jpg' #{thumbnail} -q")
system("termimage '#{title}.jpg' && rm -rf '#{title}.jpg'")
end
puts "\n\n"+info+"Download Link  : #{link}\n"
print "\n"+ask+"Start Download?(y/n)  > "+green
confirm= gets.chomp()
if confirm=="y" && type== "1"
    puts yellow+"\n[+] Starting Download....."
    system("wget -O '#{title}.mp3' #{link} -q --show-progress")
    puts "\n"+success+"#{title}.mp3 successfully downloaded!"
    print "\n"+ask+"Move to a custom path?(y/n) > "+green
    pt=gets.chomp
    if pt=="y"
        print "\n"+ask+"Enter path > "+green
        path=gets.chomp
        if Dir.exist?(path)
            system("mv -f '#{title}.mp3' #{path}")
            puts "\n"+success+"#{title}.mp3 moved to #{path}"
        else
            puts error+"Directory not found"
        end    
    else
        exit
    end    
elsif confirm=="y" && type== "2"
    puts yellow+"\n[+] Starting Download....."
    system("wget -O '#{title}.mp4' #{link} -q --show-progress")    
    puts "\n"+success+"#{title}.mp4 successfully downloaded!"
    print "\n"+ask+"Move to a custom path?(y/n) > "+green
    pt=gets.chomp
    if pt=="y"
        print "\n"+ask+"Enter path > "+green
        path=gets.chomp
        if Dir.exist?(path)
            system("mv -f '#{title}.mp4' #{path}")
            puts "\n"+success+"#{title}.mp4 moved to #{path}"
        else
            puts error+"Directory not found!"
            exit
        end    
    else
        exit
    end    
else
    exit
end
