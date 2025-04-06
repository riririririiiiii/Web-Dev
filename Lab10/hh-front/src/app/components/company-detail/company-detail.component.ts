import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-company-detail-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {
  id: string | null = null;

  company!: Company

  constructor(private http: CompanyService, private route: ActivatedRoute, private location: Location){

  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.loadData(Number(this.id));
    }else{
      this.company = {id: -1, name: "", description: "", address: "", city: ""}
    }
  }


  loadData(id: number){
    this.http.getCompanyById(id).subscribe((data)=>this.company = data)
  }

  onSubmit(): void {
    if (this.id) {
      console.log('Updating existing:', this.company);
      this.http.put(this.company).subscribe((data)=>console.log(data))
    } else {
      console.log('Creating new', this.company);
      this.http.post(this.company).subscribe((data)=>console.log(data))
    }
    this.location.back()
  }
  onBack(){
    this.location.back()
  }
}