import os
import json

def json(url):
    path = url
    os.chdir(path) #�������� ������� �������
    listfile={}
    iter=0
    dir=os.listdir(path)
    for file in dir:
        listfile = {iter:{"id": i, "name" : file}}
        iter=iter+1
    jsonstring=json.dumps(listfile, ensure_ascii = false)
    return jsonstring


