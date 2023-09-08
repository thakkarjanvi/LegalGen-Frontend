import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  private apiBaseUrl = 'https://localhost:7183/LegelGen/ResearchBooks'; 

  private queries: any[] = [];
  constructor(private http: HttpClient) {}
  
  getQueries(): Observable<any> {
    const url = `${this.apiBaseUrl}`; // Adjust the URL according to your API endpoint
    return this.http.get(url);
  }

  createResearchBook(bookData: any): Observable<any> {
    debugger
    const updateUrl = `${this.apiBaseUrl}/createResearchBook`; // Replace with your actual update profile API endpoint
    console.log(updateUrl);

    // Make an HTTP PUT request to update the user's profile
    return this.http.post(updateUrl, bookData);
  }
// Inside your service
editResearchBook(bookId: number, updatedData: any): Observable<any> {
  const editUrl = `${this.apiBaseUrl}/LegelGen/ResearchBook/${bookId}`;

  // Make an HTTP PUT request to update the research book
  return this.http.put(editUrl, updatedData);
}

// Inside your service
deleteResearchBook(bookId: number): Observable<any> {
  const deleteUrl = `${this.apiBaseUrl}/LegelGen/ResearchBook/${bookId}`;

  // Make an HTTP DELETE request to delete the research book
  return this.http.delete(deleteUrl);
}


}
