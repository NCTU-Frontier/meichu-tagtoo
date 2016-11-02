import requests
def advertisers_get_general(s,header,page='0'):
    return s.get(url='https://meichu.tagtoo.com.tw/advertisers'+'?page=' + str(page),headers=header).content

def advertisers_get_info_with_id(s,header,id):
    return s.get(url='https://meichu.tagtoo.com.tw/advertisers/'+ id ,headers=header).content

def advertisers_get_products_with_id(s,header,id,page='0',ordering='update_time'):
    return s.get(url='https://meichu.tagtoo.com.tw/advertisers/'+ id + '/products'+ '?page=' + str(page) + '&ordering=' + ordering,headers=header).content

def advertisers_get_pageviews_with_id(s,header,id,page='',ordering='update_time'):
    pass

def product_get(s,header,page='0',ordering='update_time'):
    return s.get(url='https://meichu.tagtoo.com.tw/products' + '?page=' + str(page) +'&ordering=' + ordering,headers=header).content

def product_get_with_id(s,header,id,page='0'):
    return s.get(url='https://meichu.tagtoo.com.tw/products/' + str(id) + '?page=' + str(page),headers=header).content

def pageviews_get(s,header,page='0',date='20161029'):
    return s.get(url='https://meichu.tagtoo.com.tw/pageviews' + '?page=' + str(page) + '&date=' + str(date),headers=header).content

def transactions_get(s,header,page='0',date='20161029'):
    return s.get(url='https://meichu.tagtoo.com.tw/transactions' + '?page=' + str(page) + '&date=' + str(date),headers=header).content


