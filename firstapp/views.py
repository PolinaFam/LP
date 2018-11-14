from django.shortcuts import render
from django.http import HttpResponse
from .forms import UserForm
from .first import json
 
def index(request):
        userform = UserForm()
        return render(request, "index.html", {"form": userform})
def send(request):
        url = request.POST.get("url")
        direct = json(url)
        return render(request, "send.html", context = {"direct":direct})


        
