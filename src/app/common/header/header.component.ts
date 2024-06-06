import { ChangeDetectorRef, Component } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { AuthDialogComponent } from '../components/auth-dialog/auth-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LandingService } from 'src/app/services/landingPage/landing.service';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn: any;
  isPhoneScreen = false;
  showSearchModal = false;
  userNameInitial = '';
  searchResults: any[] = [];
  constructor(
    private observer:BreakpointObserver,
    private dialog: MatDialog,
    private searchResult:LandingService,
    private cdr: ChangeDetectorRef,
    private loginSvc: OnboardingService,
    private localStorageSvc:LocalStorageService
  ){}

  ngOnInit() {
    this.isLoggedIn = this.loginSvc.isLoggedIn();
    const user = this.localStorageSvc.getWithExpiry('user')
    this.userNameInitial = user?.name[0].toString().toUpperCase();
    }
  ngOnChanges(){
  console.log(this.isLoggedIn)
}
  ngAfterViewInit(): void {
    this.observer.observe(["(max-width: 670px)"]).subscribe((res) => {
      if (res.matches) {
        this.isPhoneScreen = true;
      } else {
        this.isPhoneScreen = false;
      }
    });
    this.cdr.detectChanges();
  }
  toggleSearchModal() {
    this.showSearchModal = !this.showSearchModal;
  }

  handleSearchEvent() {
    this.showSearchModal = false;
  }

  openLoginDialog(isSignUp = false){
    this.dialog.open(AuthDialogComponent, {
      width: '400px',
      data: { isSignUp }
    });
  }
  searchDestination(value:any) {
    const target = event?.target as HTMLInputElement;
    console.log("log", target.value)
    if (target) {
      const value = target.value;
      this.searchResult.searchDestination(value)
      .subscribe((results: any[]) => {
        this.searchResults = results;
      });
  } else {
    this.searchResults = [];
  };
}

  // getInitials(){

  // }

  // }login
}
