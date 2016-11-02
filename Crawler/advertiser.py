import requests
import login
import functions
import threading
import time

global page
page=1
global lock
lock = threading.Lock()
global lock1
lock1 = threading.Lock()
global flag
flag=1
global fout
fout = open('Advertiser/advertiser.txt','a')
global count
count=0


def fuc():
    global page
    global lock
    global lock1
    global flag
    global count
    global fout
    s = requests.session()
    headers = {'Authorization': 'Token '+login.login(s)}
    while(flag):
        lock.acquire()
        nc=page
        page+=1
        lock.release()
        res = functions.advertisers_get_general(s,headers,page=nc)
        print res
        if(len(res)<30):
            flag=0
        else:
            #print res
            lock1.acquire()
            fout.write(res)
            fout.write('\n')
            lock1.release()
            count+=1


if(__name__=='__main__'):
    while(threading.active_count()<=2):
        threading.Thread(target=fuc,args=()).start()
    sec=0
    while(flag):
        print "Current page:" + str(count) + '. Current time:' + str(sec) + 'secs.'
        time.sleep(1)
        sec+=1;

time.sleep(10)
fout.close()
