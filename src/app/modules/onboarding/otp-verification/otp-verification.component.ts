import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription, catchError } from 'rxjs';
import { AuthDialogComponent } from 'src/app/common/components/auth-dialog/auth-dialog.component';
import { URLS } from 'src/app/common/constants/apiList';
import { verifyOtpResponse } from 'src/app/common/model/login';
import { AlertMessageService } from 'src/app/common/services/alert-message.service';
import { ApiService } from 'src/app/common/services/api.service';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.scss'
})
export class OtpVerificationComponent {
  otpForm!: FormGroup;
  @Input() userEmail = '';
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  verifyOtpSub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<OtpVerificationComponent>,

    private api: ApiService, private alertSvc: AlertMessageService) { }
  @Output() showLoginForm = new EventEmitter();
  ngOnInit() {
    this.otpForm = this.fb.group({
      otp1: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      otp2: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(1)]],
      otp3: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      otp4: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      otp5: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      otp6: ['', [Validators.required,Validators.pattern("^[0-9]*$")]]
    });
  }

  moveToNext(controlName: string, event: any) {
    if (event.key !== 'Backspace' && event.target.value.length === 1 ) {
      const nextControl = this.getNextControl(controlName);
      if (nextControl) {
        // console.log(nextControl.nativeElement);
        nextControl.nativeElement.focus();
      }
    }

  }

  moveToPrevious(controlName: string, event: any) {
    const eventVal = event.target.value;
    if (event.key == 'Backspace') {
      if (eventVal == '') {
        const previousControl = this.getPreviousControl(controlName);
        previousControl?.nativeElement.focus();
      }
    }
  }

  getPreviousControl(controlName: string) {

    const controls = this.otpForm.controls;
    const controlNames = Object.keys(controls);
    const currentControlIndex = controlNames.indexOf(controlName);
    const previousControlIndex = currentControlIndex - 1;
    // console.log(this.otpInputs.toArray()[previousControlIndex]);
    if (previousControlIndex <= -1) {
      return null;
    }
    return this.otpInputs.toArray()[previousControlIndex];

  }

  getNextControl(controlName: string) {
    const controls = this.otpForm.controls;
    const controlNames = Object.keys(controls);
    const currentControlIndex = controlNames.indexOf(controlName);
    const nextControlIndex = currentControlIndex + 1;

    if (nextControlIndex < controlNames.length) {
      return this.otpInputs.toArray()[nextControlIndex];
    }

    return null;
  }

  validateOtp() {
    const otp1 = this.otpForm.get('otp1')?.value;
    const otp2 = this.otpForm.get('otp2')?.value;
    const otp3 = this.otpForm.get('otp3')?.value;
    const otp4 = this.otpForm.get('otp4')?.value;
    const otp5 = this.otpForm.get('otp5')?.value;
    const otp6 = this.otpForm.get('otp6')?.value;
    const fullOtp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;

    const verification = {
      email: this.userEmail,
      otp: fullOtp
    };
    const isSignUp = false;
    const url = URLS.validateOtp;
    this.verifyOtpSub = this.api.post(url.endPoint, verification).subscribe(
      (response: verifyOtpResponse) => {
        if (response.status === 200) {
          this.alertSvc.showAlertMessage("success", {
            message: "OTP verified. Redirecting to SIGN IN in 3 seconds.."
          });
          setTimeout(() => {
            this.dialogRef.close();
          }, 3000);
          setTimeout(() => {
            this.dialog.open(AuthDialogComponent, {
              width: '400px',
              data: { isSignUp }
            });
          }, 3000);

        } else {
          return this.handleVerificationError(response);
        }
      },
      (error) => {
        console.error(error);
        this.handleVerificationError(error);
      }
    );
  }

  private handleVerificationError(error: any) {
    if (error.status === 400) {
      this.alertSvc.showAlertMessage("error", {
        message: "Invalid OTP. Please try again."
      });
    } else {
      this.alertSvc.showAlertMessage("error", {
        message: "An error occurred while verifying the OTP. Please try again later."
      });
    }
  }
}


