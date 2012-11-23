from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
	 (r'^home/$','portfolio.home.views.home'),
     (r'^home/research/$','portfolio.home.views.research'),
     (r'^home/coding/$','portfolio.home.views.coding'),
     (r'^home/platforms/$','portfolio.home.views.platforms'),

	 (r'^projects/$','portfolio.home.views.projects'),
     (r'^projects/nflodds$','portfolio.home.views.nflodds'),
     (r'^projects/ecology$','portfolio.home.views.ecology'),
     (r'^projects/genre$','portfolio.home.views.genre'),
     (r'^projects/iOS$','portfolio.home.views.iOS'),

     (r'^drawings/$','portfolio.home.views.drawings'),
     (r'^drawings/trees/$','portfolio.home.views.trees'),
	 (r'^drawings/snowflakes/$','portfolio.home.views.snowflakes'),

    # Examples:
    # url(r'^$', 'portfolio.views.home', name='home'),
    # url(r'^portfolio/', include('portfolio.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
