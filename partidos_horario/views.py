
# Create your views here.
from rest_framework import viewsets
from .serializer import HorarioSerializer,PartidoSerializer
from .models import Horario, Partido

# Vista crud.. 
class HorarioView(viewsets.ModelViewSet):
    serializer_class = HorarioSerializer
    queryset = Horario.objects.all()
    
class PartidoView(viewsets.ModelViewSet):
    serializer_class = PartidoSerializer
    queryset = Partido.objects.all()
