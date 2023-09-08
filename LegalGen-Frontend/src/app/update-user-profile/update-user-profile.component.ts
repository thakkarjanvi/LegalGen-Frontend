import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {
  updateForm: FormGroup;
  userEmail: string = ''; // Initialize userEmail property with an empty string

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      organization: ['', Validators.required],
      contactdetails: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      designation: ['', Validators.required],
      password : ['',Validators.required],
    });
  }

  ngOnInit() {
    this.initForm();
  
    // Retrieve the user data from local storage
    const userDataJson = localStorage.getItem('user');
  
    if (userDataJson) {
      // Parse the user data JSON
      const userData = JSON.parse(userDataJson);
  
      // Get the user's email from the parsed user data
      const userEmail = userData.email;
  
      // Fetch user data based on the email
      this.userService.getUserByEmail(userEmail).subscribe((userData) => {
        // Pre-fill the form with user data
        this.updateForm.patchValue(userData);
      });
    } else {
      // Handle the case when userDataJson is null or undefined
      alert("Please fill out proper details");
      console.error('User data not found in local storage.');
    }
  }
  

  initForm() {
    // Define the initialization logic for your form, if needed
  }

  onUpdate() {
    if (this.updateForm.valid) {
      const userData = this.updateForm.value;

      // Call your user service to update the user profile
      this.userService.updateUserProfile(userData).subscribe(
        (response) => {
          // Handle the successful update, e.g., show a success message
          console.log('Profile updated successfully:', response);

          // After successful update, navigate back to the user's profile or any other appropriate page
          this.router.navigate(['/dashboard']); // Replace with the appropriate route
        },
        (error) => {
          // Handle any errors, e.g., show an error message
          this.router.navigate(['/dashboard']); // Replace with the appropriate route
          console.error(error);
        }
      );
    }
  }
}
