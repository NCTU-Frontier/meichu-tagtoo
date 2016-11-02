# -*- coding: utf-8 -*-
import jieba
import json
def findcat(ret):
    seglist = jieba.cut(ret, cut_all=False)
    lis = []
    for item in seglist:
        if len(item) > 1:
            lis.append(item)
    category = [
        '車類百貨',
        '居家生活',
        '服裝衣物',
        '流行數碼',
        '美妝保健',
        '家電家裝',
        '婦幼玩具',
        '節日寵物',
        '運動戶外',
        '數位周邊',
        '鞋包配飾'
    ]
    node = 0
    maxcnt = 0
    idx = 0
    for f in category:
        tmp = open(str(idx) + '.txt', "r").read()
        cnt = 0
        for item in lis:
            if(item in tmp):
                cnt += 1
        if cnt > maxcnt:
            maxcnt = cnt
            node = idx
        idx += 1
    return category[node]
