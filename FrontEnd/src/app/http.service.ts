import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photo';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Photo[]> {
    return this.http.get('https://localhost:3000/uploads')
      .map((res:any) => res.photos.photo);
  }
}