from django.urls import path
from homepage.views import (
    UserRegistrationApiView,
    UserApiView,
    UserDetailApiView,
    ChangePasswordView,
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path("register/", UserRegistrationApiView.as_view(), name="register"),
    path("token/", TokenObtainPairView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("users/", UserApiView.as_view(), name="user_view"),
    path("users/<str:user_id>/", UserDetailApiView.as_view(), name="user_view"),
    path(
        "users/password-reset/<int:pk>/",
        ChangePasswordView.as_view(),
        name="change_password",
    ),
]
