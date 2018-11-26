from django.shortcuts import render
from .forms import UserForm
from django.http import HttpResponse
from django.http import JsonResponse
import os

def index(request):
    if request.method == "POST":
        urll = request.POST.get("url") #получение значения поля url
        dir = os.listdir(urll)
        return JsonResponse({'dir':urll, 'content':dir})
            
    else:
        userform = UserForm()
        return render(request, "index.html", {"form":userform})
