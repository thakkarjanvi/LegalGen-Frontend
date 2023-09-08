import { ResearchBookService } from './../../Service/research-book.service';
import { Component } from '@angular/core';
import { Researchbook } from 'src/app/modal/research-book.dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  query!: string;
  newQuery: boolean;
  showResponse: boolean;

  researchBookList: Researchbook[] =[];

  queryList: string[] = ['query-1', 'query-2'];

  constructor(
    private researchBookService: ResearchBookService
  ) {
    this.newQuery = true;
    this.showResponse = false;

    // this.researchBookList = [
    //   {
    //     id: 0,
    //     name: 'Lorem ipsum dolor sit amet.',
    //     dateCreated: '2023-09-07 | 18:23 PM',
    //     lastModified: '2023-09-07 | 18:23 PM',
    //     userId: 'string',
    //     legalInformation: [
    //       {
    //         id: 0,
    //         type: 'string',
    //         title: 'string',
    //         description: 'string',
    //         document: 'string',
    //         dateAdded: '2023-09-07 | 18:23 PM',
    //         researchBookId: 0,
    //       },
    //     ],
    //   },

    //   {
    //     id: 0,
    //     name: 'Lorem ipsum dolor sit amet.',
    //     dateCreated: '2023-09-07 | 18:23 PM',
    //     lastModified: '2023-09-07 | 18:23 PM',
    //     userId: 'string',
    //     legalInformation: [
    //       {
    //         id: 0,
    //         type: 'string',
    //         title: 'string',
    //         description: 'string',
    //         document: 'string',
    //         dateAdded: '2023-09-07 | 18:23 PM',
    //         researchBookId: 0,
    //       },
    //     ],
    //   },

    //   {
    //     id: 0,
    //     name: 'Lorem ipsum dolor sit amet.',
    //     dateCreated: '2023-09-07 | 18:23 PM',
    //     lastModified: '2023-09-07 | 18:23 PM',
    //     userId: 'string',
    //     legalInformation: [
    //       {
    //         id: 0,
    //         type: 'string',
    //         title: 'string',
    //         description: 'string',
    //         document: 'string',
    //         dateAdded: '2023-09-07 | 18:23 PM',
    //         researchBookId: 0,
    //       },
    //     ],
    //   },
    // ];

    this.getResearchBook();
  }
  showQueryResponse() {
    this.queryList.push(this.query);
    this.newQuery = !this.newQuery;
    this.showResponse = !this.showResponse;
  }
  showNewQuery() {
    this.newQuery = true;
    this.showResponse = false;
  }

  getResearchBook(){
    this.researchBookService.getResearchBook().subscribe((res)=>{
      console.log(res);
      this.researchBookList = res;


    })
  }
}
