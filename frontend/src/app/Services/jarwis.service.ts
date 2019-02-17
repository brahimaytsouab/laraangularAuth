import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  signUp(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  login(data) {
    // const headers = new HttpHeaders({'ignoreProgressBar': ''});
    return this.http.post(`${this.baseUrl}/login`, data/*, {headers: headers}*/);
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }
}
