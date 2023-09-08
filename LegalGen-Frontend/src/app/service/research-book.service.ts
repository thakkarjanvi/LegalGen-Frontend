import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Researchbook } from '../modal/research-book.dto';

@Injectable({
  providedIn: 'root'
})
export class ResearchBookService {

  baseURL = 'https://localhost:7183/LegelGen/ResearchBooks'

  constructor(
    private httpService: HttpClient
  ) { }

  getResearchBook(): Observable<Researchbook[]>{
    return this.httpService.get<Researchbook[]>(`${this.baseURL}`)
  }
}
