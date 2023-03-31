import secrets
import string

from rest_framework import status, permissions
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User

from homepage.serializers import (
    UserSerializer,
    RegistrationSerializer,
    ChangePasswordSerializer,
)


class UserApiView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, *args, **kwargs):
        if request.user.is_staff:
            users = User.objects.filter(is_superuser=False)
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)


class UserDetailApiView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @staticmethod
    def get_object(object_id: str = None):
        try:
            return User.objects.get(id=object_id)
        except User.DoesNotExist:
            return None

    def get(self, request, *args, **kwargs):
        instance = self.get_object(object_id=request.user.id)
        if not instance:
            return Response(
                {"res": "Object does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = UserSerializer(instance, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, user_id: str = None, *args, **kwargs):
        if request.user.is_staff:
            instance = self.get_object(object_id=user_id)
            if instance:
                instance.delete()
                return Response({"res": "Object deleted!"}, status=status.HTTP_200_OK)
            else:
                return Response(
                    {"res": "Object with user id does not exist"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)


class UserRegistrationApiView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def post(self, request, *args, **kwargs):
        """Registers a new user."""
        if request.user.is_staff:
            letters = string.ascii_letters
            digits = string.digits
            special_chars = string.punctuation
            alphabet = letters + digits + special_chars
            password_length = 12

            while True:
                password = ""
                for i in range(password_length):
                    password += "".join(secrets.choice(alphabet))

                if (
                    1 <= sum(char in special_chars for char in password) <= 2
                    and sum(char in digits for char in password) >= 2
                ):
                    break

            data = {
                "username": request.data.get("username"),
                "email": request.data.get("email"),
                "password": password,
            }

            serializer = RegistrationSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)


class ChangePasswordView(UpdateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = ChangePasswordSerializer
