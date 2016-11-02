import json
import findcat

list = []

def handle_function(title,discription):
    return 


with open('../Database/product_list.txt','r') as fin:
    ln = fin.readline()
    while(ln):
        print (ln)
        #n = json.loads(ln)
        list.append(ln)
        #print (ln['title'])
        #print (ln['description'])
        #print ('\n\n')
        ln = fin.readline()


with open('../Database/product_list.txt','w') as fout:
    for i in list:
        fout.write(i[:-2] + ",\"class\":\"" + findcat.findcat(json.loads(i)['title'] + json.loads(i)['description']) + "\"}")
        fout.write("\n")