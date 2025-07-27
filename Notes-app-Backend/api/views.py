from django.shortcuts import render
from rest_framework import viewsets
from .serializers import NoteSerializer
from .models import Note
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q



# Create your views here.
class NotesViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

@api_view(['GET'])
def notes_search(request):
    query = request.query_params.get("search")
    notes = Note.objects.filter(Q(title__icontains=query) | Q(body__icontains=query) | Q(category__icontains=query))
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

