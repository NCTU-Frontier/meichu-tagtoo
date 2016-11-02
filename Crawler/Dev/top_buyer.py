import os
import json
import time


list = []
with open('./Database/total.txt','r') as fin:
    lst = fin.readline()
    while(lst):
        lst = json.loads(lst)
        print lst['results']
        time.sleep(10)
        list.append(json.loads(lst))

print list