import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FeaturesComponent } from './features/features.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RoamlyModule } from 'src/app/common/roamly.module';

@NgModule({
  declarations: [LandingComponent,FeaturesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RoamlyModule
  ],
  exports: [LandingComponent,FeaturesComponent]
})
export class LandingModule { }
