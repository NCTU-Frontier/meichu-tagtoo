import requests
import login
import functions
import multiprocessing

def func(num):
    print num

if __name__=='__main__':
    #s = requests.session()
    #headers = {'Authorization': 'Token' + login.login(s)}
    lst = []
    for i in range(1,10):
        lst.append(multiprocessing.process(target=func,agrs=(i)))




