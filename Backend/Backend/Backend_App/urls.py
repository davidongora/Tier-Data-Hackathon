from django.urls import path
from . import views

urlpatterns = [
  path('customer/edit/', views.CreateCustomerView.as_view(), name="edit_customer"),
  path('meter/edit/', views.CreateMeterView.as_view(), name="edit_customer"),
  path('payment/edit/', views.CreatePaymentView.as_view(), name="edit_payment"),
  path('waterusage/edit/', views.CreateWaterUsageView.as_view(), name="edit_waterusage"),
  path('customer/list/', views.ListCustomers.as_view(), name="list_customer"),
  path('meter/list/', views.ListMeters.as_view(), name="list_customer"),
  path('payment/list/', views.ListPayments.as_view(), name="list_payment"),
  path('waterusage/list/', views.ListWaterUsage.as_view(), name="list_waterusage")
]
