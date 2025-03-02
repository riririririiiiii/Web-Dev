import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Images } from '../album';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, RouterLink], 
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  images: Images[] = []; 


  constructor(private route: ActivatedRoute, private albumService: AlbumsService,private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      console.log('Album ID:', id);
      if (id) {
        this.albumService.getImages(id).subscribe(photos => {
          console.log('Photos:', photos); 
          this.images = photos;
        });
      }
    });
  }


  goBack() {
    this.location.back(); 
  }
}
