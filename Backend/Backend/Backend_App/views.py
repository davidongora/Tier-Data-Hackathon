from django.shortcuts import render
from .models import *
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from .serializers import *
from django.shortcuts import get_object_or_404

class CustomerView(APIView):
  # Create the customer
  def post(self, request, *args, **kwargs):
    serializer = CustomerModelSerializer(data=request)
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
  
class MeterView(APIView):
  # Create a Meter
  def post(self, request, *args, **kwargs):
    serializer = MeterModelSerializer(data=request)
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
    