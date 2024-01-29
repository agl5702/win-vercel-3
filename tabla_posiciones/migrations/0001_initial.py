# Generated by Django 4.2.7 on 2024-01-25 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('partidos_horario', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TablaPosiciones',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('puntos', models.IntegerField(default=0)),
                ('victorias', models.IntegerField(default=0)),
                ('derrotas', models.IntegerField(default=0)),
                ('goles_a_favor', models.IntegerField(default=0)),
                ('goles_en_contra', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Tabla_Partidos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('partido', models.ManyToManyField(to='partidos_horario.partido')),
                ('tablas_partidos', models.ManyToManyField(to='tabla_posiciones.tablaposiciones')),
            ],
        ),
    ]