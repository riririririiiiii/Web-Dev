import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  companies: Company[] = []

  constructor(private service: CompanyService){}

  ngOnInit(){
    this.loadData()
  }

  loadData(){
    this.service.getAllCompanies().subscribe((data)=>this.companies = data)
  } 
}