import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanTripComponent } from './components/plan-trip/plan-trip.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanTripRoutingModule } from './plan-trip-routing.module';



@NgModule({
  declarations: [PlanTripComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    PlanTripRoutingModule,
    PlanTripComponent
  ]
})
export class PlanTripModule { }
