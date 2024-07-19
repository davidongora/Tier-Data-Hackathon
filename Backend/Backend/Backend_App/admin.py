from django.contrib import admin
from .models import *

admin.site.register(Customer)
admin.site.register(Payment)
admin.site.register(WaterUsage)

class MeterAdmin(admin.ModelAdmin):
  list_display = ("meter_id", "customer_id", "meter_name", "is_active", "water_available", "total_amount_paid", "total_amount_used", "cash_balance")

admin.site.register(Meter, MeterAdmin)
