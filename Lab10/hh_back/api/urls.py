from django.urls import path
from api.views import company_list, CompanyDetailView,  VacancyList, top_ten_vacancies, VacancyDetail,VacancyByCompany

urlpatterns = [
    path('companies/', company_list.as_view()),
    path('companies/<int:id>/', CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/',VacancyByCompany.as_view()),
    path('vacancies/top_ten/', top_ten_vacancies),
    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:id>/', VacancyDetail.as_view()),
]
