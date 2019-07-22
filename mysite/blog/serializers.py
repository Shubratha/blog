from rest_framework import serializers
from .models import Post
from django.contrib.auth.models import User

class PostSerializer(serializers.ModelSerializer):
	# id = serializers.IntegerField(read_only=True)
	author = serializers.ReadOnlyField(source='user.username')
	title = models.CharField(max_length=200)
	slug = models.SlugField(max_length=200)
	# content = models.TextField()

	class Meta:
		model = Post
		fields = ('id','title','slug','author','created_on')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'role')