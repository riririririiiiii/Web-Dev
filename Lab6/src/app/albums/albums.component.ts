import { Component, OnInit } from '@angular/core';
import { Album } from "../album";
import { NgFor, CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { AlbumsService } from "../albums.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums!: Album[];

  constructor(private albumService: AlbumsService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }  

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(a => a.id !== id)
  }
}