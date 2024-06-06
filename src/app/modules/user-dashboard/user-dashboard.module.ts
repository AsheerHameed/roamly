import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsAndGuidesComponent } from './components/trips-and-guides/trips-and-guides.component';
import { RecentlyViewedComponent } from './components/recently-viewed/recently-viewed.component';
import { ExploreComponent } from './components/explore/explore.component';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { CardsComponent } from './components/cards-component/cards-component.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    TripsAndGuidesComponent,
    RecentlyViewedComponent,
    ExploreComponent,
    UserDashboardComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    UserDashboardRoutingModule,
    CardsComponent
  ]
})
export class UserDashboardModule { }
