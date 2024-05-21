import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { URLS } from 'src/app/common/constants/apiList';
import { loginRequest,loginResponse } from 'src/app/common/model/login';
import { ApiService } from 'src/app/common/services/api.service';
import { LocalStorageService } from 'src/app/common/services/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  url: any = {} as URL;
  authId: string = '';

  constructor(private api: ApiService,private localStorageSvc:LocalStorageService,private router:Router) {}

  // login(request: loginRequest) {
  //   const url = URLS.login;
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //   return this.http.post<loginResponse>(url.endPoint, request, { headers })
  //     .subscribe(
  //       (response: loginResponse) => {
  //         if (response && response.data && response.data.tokens.accessToken) {
  //           const userData = response.data.data;
  //           const accessToken = response.data.tokens.accessToken;
  //           this.localStorageSvc.setWithExpiry(this.authId, accessToken);
  //           this.localStorageSvc.setWithExpiry("user", userData);
  //           this.router.navigate(['dashboard']);
  //         }
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }

  login(request: loginRequest) {
    const url = URLS.login;
    // let headers = new Headers({ 'Content-Type': '*' });
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.api.post(url.endPoint, request, url.reqHeader.eventName).subscribe((response: loginResponse) => {
      if (response.data && response.data.tokens.accessToken) {
        const userData = response.data.data;
        const accessToken = response.data.tokens.accessToken;
        this.localStorageSvc.setWithExpiry(this.authId, accessToken);
        this.localStorageSvc.setWithExpiry("user", userData);
        this.router.navigate(['dashboard']);
      }
      return response;
    }),
    catchError((error) : any=> {
      console.error(error);
    });
  }
}
