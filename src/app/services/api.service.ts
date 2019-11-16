import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://jsonplaceholder.typicode.com';
  constructor( private http: HttpClient ) { }

  getPhotos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/photos`);
  }

  getTodos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/todos`);
  }
}
