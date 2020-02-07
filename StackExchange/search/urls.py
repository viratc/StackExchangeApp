from .views import AdvancedSearch

from django.urls import include, path

urlpatterns = [
    path(r'', AdvancedSearch.as_view(), name="Fetches search results for stack exchange")
]