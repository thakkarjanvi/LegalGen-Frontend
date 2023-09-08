import { Component, OnInit } from '@angular/core';
import { ResearchService } from 'src/app/Service/research.service';
import { UserService } from 'src/app/Service/user.service'; 
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-researchpage',
  templateUrl: './researchpage.component.html',
  styleUrls: ['./researchpage.component.css']
})
export class ResearchpageComponent implements OnInit {
  userName: string = ''; // Initialize with the user's name
  queries: any[] = []; // Initialize with an array of queries
  isFormCardOpen: boolean = false;
  newQuery: string = '';
  researchForm: FormGroup;

  constructor(
    private researchService: ResearchService,
    private router : Router,
    private fb: FormBuilder,
     private userService: UserService)
     {
      this.researchForm = this.fb.group({
        title: ['', [Validators.required, Validators.email]],
      });
    }

  ngOnInit(): void {
    // Fetch user data and queries when the component initializes
    this.userName = this.userService.getUserName();
    this.queries = this.researchService.getQueries();
  }

  openFormCard(): void {
    this.isFormCardOpen = true;
  }

  closeFormCard(): void {
    this.isFormCardOpen = false;
  }

  createResearchBook(): void {

    const bookData = this.researchForm.value;
   
    this.researchService.createResearchBook(bookData).subscribe(
      (response) => {
        // Authentication successful
        console.log('Create researchBook Successfull');
        
        alert("Create researchBook Successfull");
        this.router.navigate(['/']);
      },
      (error) => {
       // Authentication failed
       alert("Create researchBook Failed");
       console.error('Create researchBook  failed');
      }
    );
      
    this.closeFormCard();
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToUpdateProfile(): void {
    // Add navigation logic to go to the profile update page
    this.router.navigate(['/home']);
  }

  navigateToChangePassword(): void {
    // Add navigation logic to go to the change password page
    this.router.navigate(['/']);
  }

  logout(): void {
    // Add logout logic here
    this.router.navigate(['/']);
  }
}
