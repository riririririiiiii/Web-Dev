import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AlbumDetailComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab6';
}