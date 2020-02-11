import requests

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class AdvancedSearch(APIView):
    """
    Class contains the method to fetch data by hitting the StackExchange Endpoint 
    """

    def get(self, request):
        base_url = 'https://api.stackexchange.com/2.2/search/advanced'
        
        print("request.data:", request, request.data,)
    
        response = requests.get(base_url, params=request.data)
        print("response:", response)

        return Response(response.json(), status=status.HTTP_200_OK)
