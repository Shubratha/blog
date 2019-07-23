from .models import Post
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .serializers import PostSerializer
from rest_framework import viewsets

class PostViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = PostSerializer
    queryset = Post.objects.all()

# from django.shortcuts import render
# from rest_framework.generics import (
# 	ListAPIView, RetrieveAPIView, CreateAPIView,
# 	UpdateAPIView, DestroyAPIView
# )
# class PostList(ListAPIView):
# 	queryset = Post.objects.filter(status=1).order_by('-created_on')
# 	serializer_class = PostSerializer
# 	template_name = 'index.html'

# class PostDetail(RetrieveAPIView):
# 	# model = Post
# 	template_name = 'post_detail.html'
# 	queryset = Post.objects.all()
# 	serializer_class = PostSerializer

# class PostCreateView(CreateAPIView):
# 	queryset = Post.objects.all()
# 	serializer_class = PostSerializer

# class PostUpdateView(UpdateAPIView):
# 	queryset = Post.objects.all()
# 	serializer_class = PostSerializer

# class PostDeleteView(DestroyAPIView):
# 	queryset = Post.objects.all()
# 	serializer_class = PostSerializer