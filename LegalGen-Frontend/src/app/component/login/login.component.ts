import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(
    private fb: FormBuilder,
     private authService: AuthService,
     private router : Router,
     ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [[Validators.required, Validators.minLength(6)]
    ]
  ]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;

      this.authService.login(user).subscribe(
        (response) => {
          // Authentication successful
          console.log('Login successful');
          alert("Login Successfull");
          this.router.navigate(['/']);
        },
        (error) => {
         // Authentication failed
         console.error('Login failed');
         this.loginError = true;
        }
      );
    }
  }
}
