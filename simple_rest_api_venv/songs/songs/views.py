#where you create all the endpoints

from django.http import JsonResponse
from .models import Song
from .serializers import SongSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

#getting a decorator, is something you put above your functionality to describe your function
@api_view(['GET', 'POST'])
def song_list(request, format=None): 
    
    if request.method == 'GET':
        #get all the songs
        songs = Song.objects.all()
        
        #serialize them - create an instance of the class
        serializer = SongSerializer(songs, many=True)
        #return json
        #return JsonResponse({"songs" :serializer.data}, safe=False)
        return Response(serializer.data)
    
    if request.method == 'POST':
         #take te data object
         #deserialize it
         
         serializer = SongSerializer(data=request.data)
         if serializer.is_valid():
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
    

@api_view(['GET', 'PUT', 'DELETE'])
def song_detail(request, id, format=None):
    
    try:
        Song.objects.get(pk=id)
    except Song.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = SongSerializer(song)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = SongSerializer(song, data=request.data)
        #check if its valid
        if serializer.is_valid():
             serializer.save()
             return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        song.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)