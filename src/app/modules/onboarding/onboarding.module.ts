import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { RoamlyModule } from 'src/app/common/roamly.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [OtpVerificationComponent,SignUpComponent,LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
    ],
  exports: [OtpVerificationComponent,SignUpComponent,LoginComponent]
})
export class OnboardingModule { }
