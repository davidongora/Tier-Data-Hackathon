from django.contrib import admin
from .models import *

admin.site.register(Customer)
admin.site.register(Meter)
admin.site.register(Payment)
admin.site.register(WaterUsage)
