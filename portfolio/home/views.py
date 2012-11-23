# Create your views here.
from django.shortcuts import get_object_or_404, render_to_response
from django.http import HttpResponseRedirect
from django.core import serializers
from django.utils import simplejson
from django.template import RequestContext
import json


def home(request):
	return render_to_response('home.html',{},RequestContext(request))

def coding(request):
	return render_to_response('coding.html',{},RequestContext(request))

def research(request):
	return render_to_response('research.html',{},RequestContext(request))

def platforms(request):
	return render_to_response('platforms.html',{},RequestContext(request))

def projects(request):
	return render_to_response('projects.html',{},RequestContext(request))

def nflodds(request):
	return render_to_response('nflodds.html',{},RequestContext(request))

def ecology(request):
	return render_to_response('ecology.html',{},RequestContext(request))

def genre(request):
	return render_to_response('genre.html',{},RequestContext(request))

def iOS(request):
	return render_to_response('collegetours.html',{},RequestContext(request))



def drawings (request):
	return render_to_response('drawings.html',{},RequestContext(request))

def trees (request):
	return render_to_response('trees.html',{},RequestContext(request))

def snowflakes (request):
	return render_to_response('snowflakes.html',{},RequestContext(request))

