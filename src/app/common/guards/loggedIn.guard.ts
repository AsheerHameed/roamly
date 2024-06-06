import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private loginService: OnboardingService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn();
  }

  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn();
  }

  private checkLoggedIn(): boolean | UrlTree {
    if (this.loginService.isLoggedIn()) {
      return this.router.createUrlTree(['/dashboard']);
    }
    return true;
  }
}
