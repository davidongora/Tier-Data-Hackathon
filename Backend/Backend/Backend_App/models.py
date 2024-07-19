from django.db import models
from django.db.models import Sum
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.contrib.contenttypes.models import ContentType
import uuid

UNIT = 1000
AMOUNT_PER_UNIT = 45
RATE = round(UNIT / 45, 2)

class Customer(AbstractUser):
  customer_id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  email = models.EmailField()
  phone_number = models.CharField(max_length=20)
  location = models.CharField(max_length=50)
  groups = models.ManyToManyField(Group, related_name="customer_groups", blank=True)
  user_permissions = models.ManyToManyField(Permission, related_name="customer_permissions", blank=True)

class Meter(models.Model):
  meter_id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
  customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
  meter_name = models.CharField(max_length=50)

  @property
  def is_active(self):
    if self.water_available <= 0:
      return False
    else:
      return True
    
  @property
  def water_available(self):
    return self.total_amount_paid - self.total_amount_used
  
  @property
  def total_amount_paid(self):
    total_payment = Payment.objects.filter(meter_id=self).aggregate(total_payment=Sum('amount_paid'))['total_payment'] or 0
    return total_payment * RATE
  
  @property
  def total_amount_used(self):
    return WaterUsage.objects.filter(meter_id=self).aggregate(total_amount_used=Sum('amount_used'))['total_amount_used'] or 0
  
  @property
  def cash_balance(self):
    return self.water_available / RATE
  
  def __str__(self):
    return self.customer_id.first_name

class WaterUsage(models.Model):
  meter_id = models.ForeignKey(Meter, on_delete=models.CASCADE)
  date = models.DateTimeField(auto_now_add=True)
  amount_used = models.FloatField()

class Payment(models.Model):
  payment_id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
  meter_id = models.ForeignKey(Meter, on_delete=models.CASCADE)
  date = models.DateTimeField(auto_now_add=True)
  amount_paid = models.FloatField()
