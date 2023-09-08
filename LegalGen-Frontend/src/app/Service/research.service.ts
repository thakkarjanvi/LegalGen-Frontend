import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  private apiBaseUrl = 'https://localhost:7183/LegelGen/ResearchBook'; 

  private queries: any[] = [];
  constructor(private http: HttpClient) {}
  
  getQueries(): any[] {
    return this.queries;
  }

  createResearchBook(bookData: any): Observable<any> {
    const updateUrl = `${this.apiBaseUrl}/LegelGen/ResearchBook/createResearchBook`; // Replace with your actual update profile API endpoint
 console.log(updateUrl);

    // Make an HTTP PUT request to update the user's profile
    return this.http.post(updateUrl, bookData);
  }

}
