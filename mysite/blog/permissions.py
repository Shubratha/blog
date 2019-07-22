from rest_framework import permissions

class IsAdmin(BasePermission):
	def has_permission(self, request, view):
		return request.user.