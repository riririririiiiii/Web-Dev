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

  post(company: Company): Observable<any>{
    const payload = {
      
      "name": company.name,
      "description": company.description,
      "city": company.city,
      "address": company.address
    };
    console.log(payload);
    
    return this.http.post(`${this.baseUrl}/companies/`, payload)
  }

  put(company: Company){
    const payload = {
      "id": company.id,
      "name": company.name,
      "description": company.description,
      "city": company.city,
      "address": company.address
    };
    return this.http.put(`${this.baseUrl}/companies/${company.id}/`, payload)
  }

  delete(id: number){
    return this.http.delete(`${this.baseUrl}/companies/${id}`)
  }
}