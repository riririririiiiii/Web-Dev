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


@api_view(["GET", "POST"])
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    elif request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True): 
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
            

class CompanyDetailView(APIView):
    def get_object(self, id):
        try:
            return Company.objects.get(pk=id)
        except Company.DoesNotExist:
            raise Http404

    def get(self, request, id):
        company = self.get_object(id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, id):
        company = self.get_object(id)
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        company = self.get_object(id)
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    
@api_view(["GET", "POST"])
def company_vacancies(request, id):
    if request.method == "GET":
        try:
            company = get_object_or_404(Company, id=id)
            vacancies = company.vacancies.all()
            serializer = VacancySerializer(vacancies, many=True)
            return Response(serializer.data)
        except Http404:
            return Response({})
    elif request.method == "POST":
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class VacancyList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = JSONParser().parse(request)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class VacancyDetail(APIView):
    def get_object(self,id):
        try:
            return Vacancy.objects.get(pk=id)
        except Vacancy.DoesNotExist:
            raise Http404
    
    def get(self,request,id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    

    def put(self,request,id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,id):
        vacancy = self.get_object(id)
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET"])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many = True)
    return Response(serializer.data)
