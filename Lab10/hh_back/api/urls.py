from django.urls import path
from api.views import company_list, CompanyDetailView,  VacancyList, top_ten_vacancies, VacancyDetail,company_vacancies

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/',company_vacancies ),
    path('vacancies/top_ten/', top_ten_vacancies),
    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:id>/', VacancyDetail.as_view()),
]
