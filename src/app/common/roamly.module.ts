import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingModule } from '../modules/landing/landing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class RoamlyModule { }
