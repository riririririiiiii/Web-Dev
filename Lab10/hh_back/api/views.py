from django.http import JsonResponse
from django.http import Http404
from django.shortcuts import get_object_or_404
from api.models import Company, Vacancy
from rest_framework.decorators import api_view
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import VacancySerializer, CompanySerializer
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

class company_list(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyByCompany(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)


@api_view(["GET"])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many = True)
    return Response(serializer.data)
