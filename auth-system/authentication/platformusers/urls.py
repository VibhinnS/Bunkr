# myapp/urls.py
from django.urls import path
from .views import SignUpView, LoginView, ForgotPasswordView

urlpatterns = [
    path('sign-up/', SignUpView.as_view(), name='sign-up'),
    path('login/', LoginView.as_view(), name='login'),
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot-password'),
]
