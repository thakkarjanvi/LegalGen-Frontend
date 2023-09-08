import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Researchbook } from '../modal/research-book.dto';

@Injectable({
  providedIn: 'root'
})
export class ResearchBookService {

  baseURL = 'https://localhost:44370'

  constructor(
    private httpService: HttpClient
  ) { }

  getResearchBook(): Observable<Researchbook[]>{
    const apiURL = 'api/ResearchBooks'
    return this.httpService.get<Researchbook[]>(`${this.baseURL}/${apiURL}`)
  }
}
