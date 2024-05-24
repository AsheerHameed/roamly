import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';
const TOKEN_KEY = 'accessToken';
interface userResponse {
  success: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  roamlyEndpoint: string

  constructor(private http: HttpClient, private router: Router) {
    this.roamlyEndpoint = environment.apiEndpoint;
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  private extractData(res: userResponse) {
    let body = res;
    return body || {};

  }

  private handleError(error: HttpErrorResponse) {
    if(error instanceof HttpErrorResponse){
      return throwError(error.error);
    }else{
      return of(null);
    }
  };

  // public get(url: string,params?:any,headers?:any): Observable<any> {
  //   return this.http.get<userResponse>(`${this.roamlyEndpoint}/${url}/${params}`,{headers}).pipe(map(this.extractData),
  //     catchError(this.handleError))
  // }

  public get(url: string, params?: any, headers?: any): Observable<any> {
    let httpParams = new HttpParams();
     if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
      });
    }

    const options = {
      headers,
      params: httpParams
    };

    return this.http.get<userResponse>(`${this.roamlyEndpoint}/${url}`, options)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  public post(url: string, data?: any,headers?:any): Observable<userResponse | any> {
    return this.http.post<userResponse>(`${this.roamlyEndpoint}/${url}`, data,{headers}).pipe(map(this.extractData),
      catchError(this.handleError))
  }

  public update(url: string, data: any,headers?:any): Observable<any> {
    return this.http.put<userResponse>(`${this.roamlyEndpoint}/${url}`, data,{headers}).pipe(map(this.extractData),
      catchError(this.handleError))
  }

  public delete(url: string,headers?:any): Observable<any> {
    return this.http.delete<userResponse>(`${this.roamlyEndpoint}/${url}`,{headers}).pipe(map(this.extractData),
      catchError(this.handleError))
  }}
