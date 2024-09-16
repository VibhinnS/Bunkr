from django.contrib.auth.hashers import make_password, check_password
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=25, unique=True, blank=False)
    email = models.CharField(max_length=100, unique=True, blank=False)
    password = models.CharField(max_length=128, blank=False)

    def __str__(self):
        return self.username

    def set_password(self, raw_password):
        self.password = make_password(raw_password)
        self.save()

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

