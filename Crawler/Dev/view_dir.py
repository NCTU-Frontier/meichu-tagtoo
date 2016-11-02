import os

dirlst = []
for i in os.listdir('./Database'):
    if(i.split('.')[0].isdigit()):
        dirlst.append(i);

print dirlst

