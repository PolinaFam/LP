from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import os
from django.views.generic import TemplateView
import urllib
def index(request):
    urll = request.GET.get("urll")
    meth = request.GET.get("meth","")
    fold = request.GET.get("fold","")
    if ((meth == "") and (fold == "")):
        if(os.path.isfile(urll)):
            return JsonResponse({'isFile':True})
        else:
            dir = os.listdir(urll)
            return JsonResponse({'path':urll, 'content':dir, 'isFile':False})
    elif (meth == "create"):
        path = urll+'/'+fold
        os.mkdir(path)
        dir = os.listdir(urll)
        return JsonResponse({'path':urll, 'content':dir})
    elif (meth == "delete"):
        path = urll+'/'+fold
        os.rmdir(path)
        dir = os.listdir(urll)
        return JsonResponse({'path':urll, 'content':dir})

def downloadF(request):
    urlka =  request.GET.get("file")  
    with open(urlka, 'rb') as fh:
                response = HttpResponse(fh.read(), content_type="application/vnd.ms-excel")
                response['Content-Disposition'] = 'inline; filename=' + os.path.basename(urlka)
                return response     



