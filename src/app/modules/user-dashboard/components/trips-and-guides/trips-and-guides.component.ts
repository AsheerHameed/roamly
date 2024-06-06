import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/common/services/local-storage.service';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

@Component({
  selector: 'app-trips-and-guides',
  templateUrl: './trips-and-guides.component.html',
  styleUrl: './trips-and-guides.component.scss'
})
export class TripsAndGuidesComponent {
  isLoggedIn: any;
  userNameInitial = '';

  tripData = [
    {
      image:"https://picsum.photos/200/300",
      title:"Trip to mumbai",
      places:"3 places"
    },
    {
      image:"https://picsum.photos/200/300",
      title:"Trip to Delhi",
            places:"3 places"

    },
    {
      image:"https://picsum.photos/200/300",
      title:"Trip to UAE",
            places:"3 places"

    },

]
limitedTripData = this.tripData.slice(0, 2);
showSeeAllButton = this.tripData.length > 2;
  constructor(private localStorageSvc: LocalStorageService, private loginSvc: OnboardingService,private router: Router){}

  navigateToUserInfo() {
    this.router.navigate(['/userInfo']);
  }
  ngOnInit() {
    this.isLoggedIn = this.loginSvc.isLoggedIn();
    const user = this.localStorageSvc.getWithExpiry('user')
    this.userNameInitial = user?.name[0].toString().toUpperCase();
    }
}
