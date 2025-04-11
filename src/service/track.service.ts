import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root' 
  })
export class TrackService {
  constructor(private http: HttpClient) {}

  getTracks() {
    const accessToken = localStorage.getItem('accessToken');
    const token=localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`, );
    return this.http.post<any>('http://localhost:8000/api/tracks', {accessToken},{ headers });
  }
}