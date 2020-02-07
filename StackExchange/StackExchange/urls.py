"""
StackExchange URL Configuration

The `urlpatterns` list routes URLs to views
"""

from django.urls import include, path

urlpatterns = [
    path(r"search/", include("search.urls"))
]
