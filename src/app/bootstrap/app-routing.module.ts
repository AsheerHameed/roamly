import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanTripComponent } from '../modules/plan-trip/components/plan-trip/plan-trip.component';
import { LandingComponent } from '../modules/landing/landing.component';

const routes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'plan', component:PlanTripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
