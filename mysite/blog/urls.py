from blog.views import PostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', PostViewSet, basename='posts')
urlpatterns = router.urls

# from . import views
# from django.urls import path

# urlpatterns = [
# 	path('', views.PostList.as_view(), name='home'),
# 	# path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
# 	path('create/',views.PostCreateView.as_view(), name='post_create'),
# 	path('<pk>/', views.PostDetail.as_view(), name='post_detail'),
# 	path('<pk>/update', views.PostUpdateView.as_view(), name='post_detail'),
# 	path('<pk>/delete', views.PostDeleteView.as_view(), name='post_detail'),
# ]