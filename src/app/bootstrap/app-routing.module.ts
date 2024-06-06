import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanTripComponent } from '../modules/plan-trip/components/plan-trip/plan-trip.component';
import { LandingComponent } from '../modules/landing/landing.component';
import { LoggedInGuard } from '../common/guards/loggedIn.guard';
import { IsAuthGuard } from '../common/guards/authGuard.guard';
import { SearchModalComponent } from '../common/components/search-modal/search-modal.component';
import { PageNotFoundComponent } from '../common/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component:LandingComponent,canActivate:[LoggedInGuard]},
  {path: 'plan', component:PlanTripComponent,canActivate:[IsAuthGuard]},
  {path:'search',component:SearchModalComponent},
  {path:'dashboard', loadChildren: () => import('../modules/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule),canActivate:[IsAuthGuard]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
