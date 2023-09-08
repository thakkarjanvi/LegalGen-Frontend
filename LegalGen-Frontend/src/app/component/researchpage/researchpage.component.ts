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
        name: ['', [Validators.required, Validators.email]],
      });
    }

  ngOnInit(): void {
    // Fetch user data and queries when the component initializes
    this.userName = this.userService.getUserName();
    // Subscribe to the observable to get the queries
    this.researchService.getQueries().subscribe(
      (queries: any[]) => {
        this.queries = queries;
        console.log('Fetched all queries', this.queries);
      },
      (error) => {
        console.error('Error fetching queries', error);
      }
    );
  }



  openFormCard(): void {
    this.isFormCardOpen = true;
  }

  closeFormCard(): void {
    this.isFormCardOpen = false;
  }

  createResearchBook(): void {
  debugger
    const bookData = this.researchForm.value;
     console.log(bookData);
     
    this.researchService.createResearchBook(bookData).subscribe(
      (response) => {
        // Authentication successful
        console.log('Create researchBook Successfull');
        
        alert("Create researchBook Successfull");
        this.router.navigate(['/dashboard']);
      },
      (error) => {
       // Authentication failed
       alert("Create researchBook Failed");
       console.error('Create researchBook  failed');
      }
    );
      
    this.closeFormCard();
  }

  // Inside your component
editResearchBook(bookId: number, updatedData: any): void {
  this.researchService.editResearchBook(bookId, updatedData).subscribe(
    (response) => {
      // Update was successful
      console.log('Edit researchBook Successful');
      alert('Edit researchBook Successful');
      // Optionally, you can handle the response data here if needed.
    },
    (error) => {
      // Edit failed
      alert('Edit researchBook Failed');
      console.error('Edit researchBook failed');
    }
  );
}

// Inside your component
deleteResearchBook(bookId: number): void {
  if (confirm('Are you sure you want to delete this research book?')) {
    this.researchService.deleteResearchBook(bookId).subscribe(
      (response) => {
        // Deletion was successful
        console.log('Delete researchBook Successful');
        alert('Delete researchBook Successful');
        // Optionally, you can handle the response data here if needed.
      },
      (error) => {
        // Deletion failed
        alert('Delete researchBook Failed');
        console.error('Delete researchBook failed');
      }
    );
  }
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
