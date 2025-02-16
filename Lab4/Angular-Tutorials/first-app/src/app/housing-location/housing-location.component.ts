import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink], // Add RouterLink & RouterOutlet
  template: `
    <section class="listing">
      <a [routerLink]="['/details', housingLocation.id]"> <!-- Dynamic Route -->
    <img class="listing-photo" [src]="housingLocation.photo" 
    alt="Exterior photo of {{ housingLocation.name }}" crossorigin />

        <h2 class="listing-heading">{{ housingLocation.name }}</h2>
        <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      </a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
