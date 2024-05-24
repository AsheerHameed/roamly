import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RoamlyModule } from '../common/roamly.module';
import { LandingModule } from '../modules/landing/landing.module';
import { HttpClientModule } from '@angular/common/http';
import { PlanTripModule } from '../modules/plan-trip/plan-trip.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoamlyModule,
    LandingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PlanTripModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
