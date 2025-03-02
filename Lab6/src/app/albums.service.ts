import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album, Images} from "./album";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }
  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>('https://jsonplaceholder.typicode.com/albums', album);
  }
  
  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}/`)
  }

  getImages(id: number): Observable<Images[]>{
    return this.http.get<Images[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }
  
}