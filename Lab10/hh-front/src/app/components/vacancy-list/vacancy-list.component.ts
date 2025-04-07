import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Vacancy } from '../../models/vacancy';
import { VacancyService } from '../../services/vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {
  vacancies: Vacancy[] = []

  constructor(private service: VacancyService,private route: ActivatedRoute, private location: Location){}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.service.getAllVacanciesById(id).subscribe((data)=>this.vacancies = data)
  }

  onBack(){
    this.location.back()
  }

}