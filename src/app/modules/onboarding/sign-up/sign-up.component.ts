import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription, catchError } from 'rxjs';
import { URLS } from 'src/app/common/constants/apiList';
import { RegularExpressions } from 'src/app/common/constants/regexList';
import { signUpRequest, signUpResponse } from 'src/app/common/model/login';
import { AlertMessageService } from 'src/app/common/services/alert-message.service';
import { ApiService } from 'src/app/common/services/api.service';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signUpRequest!:signUpRequest;
  signUpForm!: FormGroup;
  signUpSub!:Subscription;
  isSignUp = false;

  @Output() showOtpForm = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder,
    private loginService:OnboardingService,
    private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public data: { isSignUp: boolean },
    private alertSvc:AlertMessageService
  ) {
    this.isSignUp = data.isSignUp;
   }
  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:['', [Validators.required]],
      lastName:['',[Validators.required]],
      email: ['', [Validators.required,Validators.pattern(RegularExpressions.emailPattern)]],
      password: ['', [Validators.required,Validators.pattern(RegularExpressions.passwordRegexPattern)]],
    });
  }
  signUp(){
    this.signUpRequest = {
      "firstName":this.signUpForm.controls["firstName"].value,
      "lastName":this.signUpForm.controls["lastName"].value,
      "emailId":this.signUpForm.controls["email"].value,
      "password":this.signUpForm.controls["password"].value,
    }
    const url = URLS.signup;
    this.signUpSub = this.api.post(url.endPoint,this.signUpRequest).subscribe((response:signUpResponse)=>{
      const userEmail = response.data.email;
      if (response.status == 200) {
        this.showOtpForm.emit({'showOtpForm':true,'userEmail':userEmail})
      }
      return response;
    }),
    catchError((error) : any=> {
      this.alertSvc.showAlertMessage("error", {
        message: error.message,
      });
      console.error(error);
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
}
