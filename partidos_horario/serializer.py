from rest_framework import serializers
from .models import Horario, Partido

#Creamos una clase 
class HorarioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Horario
        fields = '__all__'
        
class PartidoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Partido
        fields = '__all__'
        

        