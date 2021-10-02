from django.contrib import admin
from PROYECTOUMA.UMA.models import Alumno
from UMA.models import User
from UMA.models import Alumno
# from UMA.models import Categoria
# from UMA.models import Plato
# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Alumno)
class MesaAdmin(admin.ModelAdmin):
    pass

# @admin.register(Categoria)
# class CategoriaaAdmin(admin.ModelAdmin):
#     pass

# @admin.register(Plato)
# class PlatoAdmin(admin.ModelAdmin):
#     pass