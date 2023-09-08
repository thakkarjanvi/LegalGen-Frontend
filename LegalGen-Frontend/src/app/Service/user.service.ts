import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBaseUrl = 'https://localhost:7183/LegelGen/User'; // Replace with your JSON Server URL
  private userName: string = '';
  constructor(private http: HttpClient) {}

  updateUserProfile(userData: any): Observable<any> {
    const updateUrl = `${this.apiBaseUrl}/update-profile`; // Replace with your actual update profile API endpoint

    // Make an HTTP PUT request to update the user's profile
    return this.http.put(updateUrl, userData);
  }

  getUserByEmail(email: string): Observable<any> {
    const getUrl = `${this.apiBaseUrl}/getUserByEmail/${email}`; // Replace with your actual get user by email API endpoint

    // Make an HTTP GET request to fetch user data by email
    return this.http.get(getUrl);
  }

  getUserName(): string {
    return this.userName;
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

}
