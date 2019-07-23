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
    # queryset = Post.objects.filter(status=1).order_by('-created_on')
