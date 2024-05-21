import { ChangeDetectorRef, Component } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { AuthDialogComponent } from '../components/auth-dialog/auth-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LandingService } from 'src/app/services/landingPage/landing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private observer:BreakpointObserver,
    private dialog: MatDialog,
    private searchResult:LandingService,
    private cdr: ChangeDetectorRef
  ){}

  isPhoneScreen = false;
  showSearchModal = false;
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

  openLoginDialog(){
    this.dialog.open(AuthDialogComponent, {
      width: '400px' // Set the desired width for the dialog
    });
    console.log("OPEN")
  }
  searchDestination(value:any) {
    const target = event?.target as HTMLInputElement;
    console.log("log", target.value)
    if (target) {
      const value = target.value;
      this.searchResult.searchDestination(value);
    }
  }
}
