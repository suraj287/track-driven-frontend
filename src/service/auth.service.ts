import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root' 
  })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login() {
    window.location.href = 'http://localhost:8000/auth/login';
  }

  handleCallback(code: string) {
    return this.http.post<any>('http://localhost:8000/auth/callback', { code });
  }

  setToken(token: string,accessToken:string) {
    localStorage.setItem('token', token);
    localStorage.setItem('accessToken', accessToken);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}