from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('notes', views.NotesViewSet, basename='note')

urlpatterns = [
    path('', include(router.urls)),
    path('notes-search/', views.notes_search, name='notes-search'),
]