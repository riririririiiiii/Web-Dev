import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Album } from '../album';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common'; 

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule, RouterLink], 
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  title: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.albumService.getAlbum(id).subscribe(album => {
          this.album = album;
          this.title = album.title;
        });
      }
    });
  }

  saveTitle() {
    this.album.title = this.title;
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
