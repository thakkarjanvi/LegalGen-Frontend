import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBaseUrl = ''; // Replace with your JSON Server URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.get(`${this.apiBaseUrl}/users?email=${email}&password=${password}`);
  }
}
