import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  getAllCompanies(): Observable<Company[]> {
    let res = this.http.get<Company[]>(`${this.baseUrl}/companies/`)
    return res
  }

  getCompanyById(id: number): Observable<Company>{
    return this.http.get<Company>(`${this.baseUrl}/companies/${id}`)
  }
}