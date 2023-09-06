import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBaseUrl = 'https://localhost:7183/LegelGen/User'; // Replace with your JSON Server URL

  constructor(private http: HttpClient) {}

  login(user:any) :  Observable<any>{
    return this.http.post(`${this.apiBaseUrl}/login`,user);
  }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/register`, user);
  }
}
