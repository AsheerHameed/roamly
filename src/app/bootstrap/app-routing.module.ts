import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanTripComponent } from '../modules/plan-trip/components/plan-trip/plan-trip.component';
import { LandingComponent } from '../modules/landing/landing.component';

const routes: Routes = [
  {path: '', component:LandingComponent},
  {path:'dashboard', loadChildren: () => import('../modules/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
