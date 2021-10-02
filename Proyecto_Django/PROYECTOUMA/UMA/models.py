from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE
from django.db.models.fields import AutoField

# Create your models here.
class User(AbstractUser):
    usu_nom = models.CharField(max_length=50)
    usu_ape=models.CharField(max_length=50)
    usu_tipo=models.CharField(max_length=50)

class Alumno(models.Model):
    idAlumno = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellidoPaterno = models.CharField(max_length=50)
    apellidoMaterno = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    fechaRegistro = models.DateField(auto_now=True)
    apoderado = models.CharField(max_length=50)
    direccion = models.CharField(max_length=250)
    instrumento = models.CharField(max_length=50)
   
# class Categoria(models.Model):
#     categoria_nom = models.CharField(max_length=50)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

# class Plato(models.Model):
#     plato_pre = models.FloatField()
#     plato_nom = models.CharField(max_length=50)
#     plato_img = models.ImageField(upload_to="plato_fotos")
#     categoria = models.ForeignKey(Categoria, on_delete=CASCADE)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)