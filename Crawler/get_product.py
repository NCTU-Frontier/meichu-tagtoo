import requests
import login
import functions
import threading
import time

global lock
lock = threading.Lock()
global lock1
lock1 = threading.Lock()
global flag
flag=1
fin = open('Database/product_id.txt','r')
global fout
fout = open('Database/product_content.txt','w')
global count
count = 0
global lst

def fuc():
    global lock
    global lock1
    global flag
    global count
    global lst
    global fout
    s = requests.session()
    headers = {'Authorization': 'Token '+login.login(s)}
    while(flag):
        lock.acquire()
        nc = count
        count += 1
        lock.release()
        if(nc < len(lst)):
            try:
                res = functions.product_get_with_id(s,headers,lst[nc])
            except:
                res = ''
            if(len(res)>100):
                lock1.acquire()
                fout.write(res)
                fout.write('\n')
                lock1.release()
        else:
            flag=0

if(__name__=='__main__'):
    lst = eval(fin.readline())
    print len(lst)
    while(threading.active_count()<=3):
        threading.Thread(target=fuc,args=()).start()
    sec=0
    while(flag):
        print "Current count:" + str(count) + '. Current time:' + str(sec) + 'secs.'
        time.sleep(1)
        sec+=1;

time.sleep(10)
fout.close()
erout.close()


