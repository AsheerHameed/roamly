import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanTripComponent } from './components/plan-trip/plan-trip.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PlanTripComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    PlanTripComponent
  ]
})
export class PlanTripModule { }
