import requests

from django.core.paginator import Paginator

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class AdvancedSearch(APIView):
    """
    Class contains the method to fetch data by hitting the StackExchange Endpoint 
    """

    def put(self, request):
        base_url = 'https://api.stackexchange.com/2.2/search/advanced'
            
        response = requests.get(base_url, params=request.data)

        # Fetch the required data
        data = response.json()

        print("data:", type(data['items']))
        print("len(data):", len(data['items']))

        # paginator = Paginator(data['items'], 5)
        # questions = Paginator.page(request.GET.get('page'))

        return Response(response.json(), status=status.HTTP_200_OK)
