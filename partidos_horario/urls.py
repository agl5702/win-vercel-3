from django.urls import path, include 
from rest_framework.documentation  import include_docs_urls
from rest_framework import routers
from .views import HorarioView, PartidoView

router = routers.DefaultRouter()
router.register(r'horario',HorarioView, 'horario')
router.register(r'partido',PartidoView, 'partido')




urlpatterns = [
    path('',include(router.urls) ),
    path('docs/',include_docs_urls(title='Horario,Partido Api')),

]
