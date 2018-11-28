from django.shortcuts import render
from .forms import UserForm
from django.http import HttpResponse
from django.http import JsonResponse
import os
from django.views.generic import TemplateView

def index(request):
    if request.method == "POST":
        urll = request.POST.get("url") #получение значения поля url
        dir = os.listdir(urll)
        return JsonResponse({'path':urll, 'content':dir})
            
    else:
      return render(request, TemplateView.as_view(template_name='index.html'))
# userform = UserForm()