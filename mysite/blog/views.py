from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Post
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .serializers import PostSerializer

class PostList(ListAPIView):
	queryset = Post.objects.filter(status=1).order_by('-created_on')
	serializer_class = PostSerializer
	template_name = 'index.html'

class PostDetail(RetrieveAPIView):
	# model = Post
	template_name = 'post_detail.html'
	queryset = Post.objects.all()
	serializer_class = PostSerializer