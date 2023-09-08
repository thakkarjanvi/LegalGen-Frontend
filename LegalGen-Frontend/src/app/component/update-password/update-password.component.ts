import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent {
  updateForm: FormGroup;
  userEmail: string = ''; // Initialize userEmail property with an empty string
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          // this.validatePasswordStrength, // Custom validator function
        ],
      ],
      Confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit() {
    this.initForm();
    const userDataJson = localStorage.getItem('user');
    if (userDataJson) {
      // const userData = JSON.parse(userDataJson);
    } else {
      alert('Please fill out proper details');
    }
  }
  initForm() {}
  // validatePasswordStrength(control: AbstractControl): { [key: string]: boolean } | null {
  //   const password = control.value;
  //   // Use a regular expression to check for at least one alphanumeric character
  //   const regex = /^(?=.*[a-zA-Z0-9]).+$/;
  //   if (regex.test(password)) {
  //     return null; // Password is valid
  //   } else {
  //     return { 'weakPassword': true }; // Password is weak
  //   }
  // }
  onUpdatePassword() {
    if (this.updateForm.valid) {
      const userData = this.updateForm.value;
      const newp = userData.newPassword;
      const confirmp = userData.Confirmpassword;
      const oldp = userData.oldPassword;
      if (newp != confirmp) {
        console.log(userData);
        alert('new password and confirm password Mismatched !');
        this.updateForm.patchValue({
          oldPassword: '',
          newPassword: '',
          Confirmpassword: '',
        });
        return;
      }
      if (newp == oldp) {
        console.log(userData);
        alert('old password and new password Cannot be same !');
        this.updateForm.patchValue({
          oldPassword: '',
          newPassword: '',
          Confirmpassword: '',
        });
        return;
      }
      const passwordPattern =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      if (!passwordPattern.test(userData.newPassword)) {
        alert(
          'Password must contain at least one letter, one number, and one special character!'
        );
        this.updateForm.patchValue({
          oldPassword: '',
          newPassword: '',
          Confirmpassword: '',
        });
        return;
      }
      console.log(userData);
      const { email, oldPassword, newPassword } = userData;
      const userCredentials = {
        email,
        oldPassword,
        newPassword,
      };
      console.log(userCredentials);
      this.userService.updateUserPassword(userCredentials).subscribe(
        (response) => {
          console.log('Password Changed successfully:', response);
          this.router.navigate(['dashboard']); // Replace with the appropriate route
        },
        (error) => {
          alert('old password does not match.');
          this.updateForm.patchValue({
            oldPassword: '',
            newPassword: '',
            Confirmpassword: '',
          });
          return;
          console.error(error);
        }
      );
    }
  }
}