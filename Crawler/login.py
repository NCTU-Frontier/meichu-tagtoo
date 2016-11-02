import requests

def login(s=requests.session()):
    login = {'username':'2016-mei-chu-hackathon','password':'TagtooX2016-Mei-Chu-Hackathon'}
    #s = requests.session()
    res = eval(s.post(url='https://meichu.tagtoo.com.tw/login',data=login).content)
    return res['token']

