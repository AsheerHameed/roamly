import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { URLS } from 'src/app/common/constants/apiList';
import { loginRequest,loginResponse, signUpRequest, signUpResponse, verifyOtpRequest } from 'src/app/common/model/login';
import { ApiService } from 'src/app/common/services/api.service';
import { LocalStorageService } from 'src/app/common/services/local-storage.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/modules/onboarding/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  url: any = {} as URL;
  authId: string = 'Authorization';

  constructor(private api: ApiService,private localStorageSvc:LocalStorageService,private router:Router) {}

  login(request: loginRequest,dialogRef: MatDialogRef<any>) {
    const url = URLS.login;
    return this.api.post(url.endPoint, request, url.reqHeader.eventName).subscribe((response: loginResponse) => {
      if (response.status == 200) {
        const userData = response.data.data;
        const accessToken = response.data.tokens.accessToken;
        this.localStorageSvc.setWithExpiry(this.authId, accessToken);
        this.localStorageSvc.setWithExpiry("user", userData);
        setTimeout(() => {
          dialogRef.close();
          this.router.navigate(['plan']).then(() => {
            window.location.reload();
          });;
        }, 3000);
      }
      return response;
    }),
    catchError((error) : any=> {
      console.error(error);
    });
  }
  // signUp(request:signUpRequest) {
  //   const url = URLS.signup;
  //   return this.api.post(url.endPoint,request).subscribe((response:signUpResponse)=>{
  //     if (response.status == 200) {
  //       this.router.navigate(['dashboard']);
  //     }
  //     return response;
  //   }),
  //   catchError((error) : any=> {
  //     console.error(error);
  //   });

  // }

  verifyOtp(request: verifyOtpRequest) {
    const url = URLS.validateOtp;
    this.api.post(url.endPoint,request,url.reqHeader).subscribe((response:any)=>{
      return console.log(response)
    })
  }
  isLoggedIn(){
    return this.localStorageSvc.getWithExpiry("user") ? true : false;
  }

}
