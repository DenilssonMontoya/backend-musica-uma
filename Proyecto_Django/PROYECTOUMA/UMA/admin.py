from django.contrib import admin
from UMA.models import User
from UMA.models import Mesa
from UMA.models import Categoria
from UMA.models import Plato
# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Mesa)
class MesaAdmin(admin.ModelAdmin):
    pass

@admin.register(Categoria)
class CategoriaaAdmin(admin.ModelAdmin):
    pass

@admin.register(Plato)
class PlatoAdmin(admin.ModelAdmin):
    pass