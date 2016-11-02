#! encoding = UTF-8
import json
import os

filelist = []

for i in os.listdir('./Database'):
    if(i.split('.')[0].isdigit()):
       filelist.append('./Database/' + i)

with open('./Database/product_id.txt','r') as in_lst:
    exist_list = eval(in_lst.readline())
addon_list = []

for file in filelist:
    with open(file,'r') as fin:
        ln = fin.readline()
        while(ln):
            print ln,file
            dic = json.loads(ln)
            lst = dic['results']
            for i in lst:
                if i['content_ids']:
                    for j in i['content_ids'].split(','):
                        if(not j in exist_list):
                            exist_list.append(j)
                            addon_list.append(j)
            ln = fin.readline()
            print "end"

with open('./Database/product_id.txt','w') as fout:
    fout.write(str(exist_list))

with open('./Database/addon_id.txt','w') as addout:
    addout.write(str(addon_list))

print len(exist_list)
