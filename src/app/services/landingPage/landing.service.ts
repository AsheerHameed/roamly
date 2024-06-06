import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from 'src/app/common/constants/apiList';
import { ApiService } from 'src/app/common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private api:ApiService) { }

  searchDestination(value:string){
    const url = URLS.generalSearch;
    const params = new HttpParams().set('place', value);

    return this.api.get(url.endPoint,{"place" : value})
  }
}
