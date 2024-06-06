import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanTripComponent } from '../modules/plan-trip/components/plan-trip/plan-trip.component';
import { LandingComponent } from '../modules/landing/landing.component';
import { LoggedInGuard } from '../common/guards/loggedIn.guard';
import { IsAuthGuard } from '../common/guards/authGuard.guard';

const routes: Routes = [
  {path: '', component:LandingComponent,canActivate:[LoggedInGuard]},
  {path: 'plan', component:PlanTripComponent,canActivate:[IsAuthGuard]}
  {path:'dashboard', loadChildren: () => import('../modules/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
