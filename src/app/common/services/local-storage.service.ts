import { Injectable } from '@angular/core';
import { decrypt, encrypt } from "../utilities/encrypt-decrypt";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(private router: Router) { }

  public getWithExpiry(key: string): any {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
      return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return decrypt(item.data);
  }

  public setWithExpiry(key:any, value:any) {
    const now = new Date();
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const encryptedData = encrypt(value);
    const item = {
      data: encryptedData
      //expiry: options.customExpiry ? options.customExpiry : now.getTime() + (options.expireHours * 60 * 60 * 1000)
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
  clearLocalStorage = () => {
    localStorage.clear();
  };

  navigateToLogin(){
    this.clearLocalStorage();
    this.router.navigate(['login']);
  }

}
