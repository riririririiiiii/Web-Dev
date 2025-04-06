import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from './../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getAllVacanciesById(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/companies/${id}/vacancies`);
  }

  createVacancy(vacancy: { title: string; description: string; salary: number }): Observable<Vacancy> {
    return this.http.post<Vacancy>(`${this.baseUrl}/vacancies/`, vacancy);
  }

  updateVacancy(id: number, vacancy: { title: string; description: string; salary: number }): Observable<Vacancy> {
    return this.http.put<Vacancy>(`${this.baseUrl}/vacancies/${id}/`, vacancy);
  }

  deleteVacancy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/vacancies/${id}/`);
  }
}

