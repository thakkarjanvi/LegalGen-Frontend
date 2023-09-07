import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
     private authService: AuthService,
    private router:Router
     ) {
     
  }
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      organization: ['', Validators.required] ,
      contactdetails: ['', [Validators.required]], // Updated to string with a pattern validator for numbers only
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      designation: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const user = this.signupForm.value;
  
      this.authService.signup(user).subscribe(
        (response) => {
          console.log('Signup successful:', response);
          alert("Signup Successful!")
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log('Signup failed:', error);
          // Handle the error, e.g., display an error message to the user
        }
      );
    }
  }
  
}
