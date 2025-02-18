# Generated by Django 4.1.13 on 2024-07-19 14:00

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('Backend_App', '0002_alter_customer_groups_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='customer_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='meter',
            name='meter_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='payment',
            name='payment_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
