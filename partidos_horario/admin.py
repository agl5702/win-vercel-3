from django.contrib import admin
from .models import Horario, Partido
# Register your models here.

class HorarioAdmin(admin.ModelAdmin):
    list_display= ('fecha','hora','detalles',)

class PartidoAdmin(admin.ModelAdmin):
    list_display= ('horario_partido','gol_local','gol_visitante','detalle',)

admin.site.register(Horario,HorarioAdmin)
admin.site.register(Partido,PartidoAdmin)
