import { Injectable, inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { LocalStorageService } from "../services/local-storage.service";
import { OnboardingService } from "src/app/services/onboarding/onboarding.service";

@Injectable({
  providedIn: "root",
})

class AuthGuard {
  constructor(
    private router: Router,
    private loginSvc: OnboardingService,
    private localStorageSvc: LocalStorageService
  ){}
  CanActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginSvc.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate([''], { queryParamsHandling: 'merge' });
      return false;
    }
  }
}

export const IsAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
   return inject(AuthGuard).CanActivate(route, state);
}
