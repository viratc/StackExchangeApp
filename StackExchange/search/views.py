import requests

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class AdvancedSearch(APIView):
    """
    Class contains the method to fetch data by hitting the StackExchange Endpoint 
    """

    def get(self, request, **params):
        base_url = 'https://api.stackexchange.com/2.2/search/advanced'
        # params = {'order': 'desc', 'sort': 'activity', 'site': 'stackoverflow'}

        response = requests.get(base_url, params=params)

        return Response(response.json(), status=status.HTTP_200_OK)
