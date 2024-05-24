import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loginRequest, signUpRequest, signUpResponse } from '../../model/login';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';
import { Inject } from '@angular/core';
import { RegularExpressions } from '../../constants/regexList';
import { hasError, hasErrorWithPattern } from '../../constants/hasError';
import { Subscription, catchError } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { URLS } from '../../constants/apiList';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrl: './auth-dialog.component.scss'
})
export class AuthDialogComponent {
  isSignUp = false;
  signUpForm!: FormGroup;
  loginForm !: FormGroup;
  loginRequest!:loginRequest;
  signUpRequest!:signUpRequest;
  showOtpForm = false;
  userEmail:string = '';
  signUpSub!:Subscription;
  constructor(private dialogRef: MatDialogRef<AuthDialogComponent>,
    private fb: FormBuilder,
    private loginService:OnboardingService,
    private api:ApiService,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: { isSignUp: boolean }
  ) {
    this.isSignUp = data.isSignUp;
   }

  toggleForm() {
    this.isSignUp = !this.isSignUp;
  }
  close(){
    this.dialogRef.close();
  }

  // signUp(){
  //   this.signUpRequest = {
  //     "firstName":this.signUpForm.controls["firstName"].value,
  //     "lastName":this.signUpForm.controls["lastName"].value,
  //     "emailId":this.signUpForm.controls["email"].value,
  //     "password":this.signUpForm.controls["password"].value,
  //   }
  //   const url = URLS.signup;
  //   this.signUpSub = this.api.post(url.endPoint,this.signUpRequest).subscribe((response:signUpResponse)=>{
  //     if (response.success == 'Registered Succesfully') {
  //       this.showOtpForm = true;
  //       this.isSignUp = false;
  //       this.userEmail = response.data.email;
  //     }
  //     return response;
  //   }),
  //   catchError((error) : any=> {
  //     console.error(error);
  //   });
  // }

  // login(){
  //   this.loginRequest = {
  //     "emailId": this.loginForm.controls['email'].value,
  //     "password": this.loginForm.controls['password'].value,
  //   }
  //   this.loginService.login(this.loginRequest);
  // }
  // hasError = (formGroupName: FormGroup, controlName: string, errorName: string) => {
  //   const control = formGroupName.get(controlName);
  //   if (control) {
  //     return control.hasError(errorName);
  //   }
  //   return false;
  // }
  // hasError(form: FormGroup, controlName: string, errorName: string): boolean {
  //   const control = form.get(controlName);
  //   if (control && control.errors) {
  //     if (errorName === 'maxlength') {
  //       return control.hasError('maxlength');
  //     } else {
  //       return control.hasError(errorName);
  //     }
  //   }
  //   return false;
  // }
  handleOtpFormVisibility(data:any){
    this.showOtpForm = data.showOtpForm;
    this.userEmail = data.userEmail
    console.log('OtpFormVisibility', data);
  }
}

