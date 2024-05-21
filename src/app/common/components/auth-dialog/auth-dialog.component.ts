import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { loginRequest } from '../../model/login';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

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
  constructor(private dialogRef: MatDialogRef<AuthDialogComponent>,
    private fb: FormBuilder,
    private loginService:OnboardingService
  ) { }
  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNo:['', Validators.required]
    });
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  toggleForm() {
    this.isSignUp = !this.isSignUp;
  }
  close(){
    this.dialogRef.close();
  }

  signUp(){

  }

  login(){
    this.loginRequest = {
      "emailId": this.loginForm.controls['email'].value,
      "password": this.loginForm.controls['password'].value,
    }
    this.loginService.login(this.loginRequest);
  }
}
