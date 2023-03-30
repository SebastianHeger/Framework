from rest_framework import serializers

from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "username", "password"]
        # extra_kwargs = {"password": {"write_only": True}}

    def save(self):
        account = User(
            email=self.validated_data["email"],
            username=self.validated_data["username"],
            password=make_password(self.validated_data["password"]),
        )
        account.save()
        return account


class ChangePasswordSerializer(serializers.ModelSerializer):
    new_password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    new_password_again = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ("old_password", "new_password", "new_password_again")

    def validate(self, attrs):
        if attrs["new_password"] != attrs["new_password_again"]:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )

        return attrs

    def validate_old_password(self, value):
        user = self.context["request"].user
        if not user.check_password(value):
            raise serializers.ValidationError(
                {"old_password": "Old password is not correct"}
            )
        return value

    def update(self, instance, validated_data):
        instance.set_password(validated_data["new_password"])
        instance.save()

        return instance
