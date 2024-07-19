from rest_framework import serializers
from .models import *

class CustomerModelSerializer(serializers.ModelSerializer):
  class Meta:
    model = Customer
    fields = "__all__"
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = Customer.objects.create_user(**validated_data)
    return user

class MeterModelSerializer(serializers.ModelSerializer):
  class Meta:
    model = Meter
    fields = "__all__"

class WaterUsageModelSerializer(serializers.ModelSerializer):
  class Meta:
    model = WaterUsage
    fields = "__all__"

class PaymentModelSerializer(serializers.ModelSerializer):
  class Meta:
    model = Payment
    fields = "__all__"
