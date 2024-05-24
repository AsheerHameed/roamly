import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RegularExpressions } from 'src/app/common/constants/regexList';
import { loginRequest } from 'src/app/common/model/login';
import { ApiService } from 'src/app/common/services/api.service';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm !: FormGroup;
  loginRequest!:loginRequest;

  constructor(
    private fb: FormBuilder,
    private loginService:OnboardingService,
    private api:ApiService,
    public dialogRef: MatDialogRef<LoginComponent>

  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.emailPattern)]],
      password: ['', [Validators.required,Validators.pattern(RegularExpressions.passwordRegexPattern)]],
    });
  }

  hasError(form: FormGroup, controlName: string, errorName: string): boolean {
    const control = form.get(controlName);
    if (control && control.errors) {
      if (errorName === 'maxlength') {
        return control.hasError('maxlength');
      } else {
        return control.hasError(errorName);
      }
    }
    return false;
  }
login(){
    this.loginRequest = {
      "emailId": this.loginForm.controls['email'].value,
      "password": this.loginForm.controls['password'].value,
    }
    this.loginService.login(this.loginRequest, this.dialogRef);

  }
}
