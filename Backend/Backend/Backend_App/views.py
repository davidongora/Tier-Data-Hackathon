from django.shortcuts import render
from .models import *
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from .serializers import *
from django.shortcuts import get_object_or_404

class CreateCustomerView(APIView):
  # Create the customer
  def post(self, request, *args, **kwargs):
    serializer = CustomerModelSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  # Update customer details
  def put(self, request, *args, **kwargs):
    customer_id = request.data.get('customer_id')
    customer = get_object_or_404(Customer, pk=customer_id)
    serializer = CustomerModelSerializer(customer ,data=request.data, partial=True)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
class CreateMeterView(APIView):
  # Create a Meter
  def post(self, request, *args, **kwargs):
    serializer = MeterModelSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  # Update Meter details
  def put(self, request, *args, **kwargs):
    meter_id = request.data.get('meter_id')
    meter = get_object_or_404(Meter, pk=meter_id)
    serializer = MeterModelSerializer(meter, data=request.data, partial=True)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    
class CreateWaterUsageView(APIView):
  def post(self, request, *args, **kwargs):
    serializer = WaterUsageModelSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
  
class CreatePaymentView(APIView):
  def post(self, request, *args, **kwargs):
    serializer = PaymentModelSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
  
class ListCustomers(generics.ListAPIView):
  serializer_class = CustomerModelSerializer
  http_method_names = ['get']

  def get_queryset(self):
    customer_id = self.request.query_params.get('customer_id', None)
    if customer_id is not None:
      query_set = Customer.objects.filter(customer_id=customer_id)
    else:
      # If no ID is provided, return all customers
      query_set = Customer.objects.all()
    
    return query_set

class ListMeters(generics.ListAPIView):
  serializer_class = MeterModelSerializer
  http_method_names = ['get']

  def get_queryset(self):
    customer_id = self.request.query_params.get('customer_id', None)
    meter_id = self.request.query_params.get('meter_id', None)
    
    if customer_id is not None:
      query_set = Meter.objects.filter(customer_id=customer_id, meter_id=meter_id)
    else:
      # If no ID is provided, return all meters
      query_set = Meter.objects.all()
    
    return query_set

class ListPayments(generics.ListAPIView):
  serializer_class = PaymentModelSerializer
  http_method_names = ['get']

  def get_queryset(self):
    meter_id = self.request.query_params.get('meter_id', None)
    
    if meter_id is not None:
      query_set = Payment.objects.filter(meter_id=meter_id)
    else:
      # If no ID is provided, return all meters
      query_set = Payment.objects.all()
    
    return query_set

class ListWaterUsage(generics.ListAPIView):
  serializer_class = WaterUsageModelSerializer
  http_method_names = ['get']

  def get_queryset(self):
    meter_id = self.request.query_params.get('meter_id', None)
    
    if meter_id is not None:
      query_set = WaterUsage.objects.filter(meter_id=meter_id)
    else:
      # If no ID is provided, return all meters
      query_set = WaterUsage.objects.all()
    
    return query_set
