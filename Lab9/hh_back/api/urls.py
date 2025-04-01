from django.urls import path
from .views import (
    CompanyListCreate, CompanyDetail, VacancyListCreate, VacancyDetail,
    VacancyByCompany, top_ten_vacancies
)

urlpatterns = [
    path('companies/', CompanyListCreate.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name='company-detail'),
    path('companies/<int:pk>/vacancies/', VacancyByCompany.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListCreate.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='top-ten-vacancies'),
]
