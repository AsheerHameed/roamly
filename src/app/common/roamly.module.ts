import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { SearchModalComponent } from './components/search-modal/search-modal.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardingModule } from '../modules/onboarding/onboarding.module';
import { AlertMsgComponent } from './components/alert-msg/alert-msg.component';
import { SharedModule } from '../shared/shared.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchModalComponent,
    AuthDialogComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    OnboardingModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SearchModalComponent,
    AuthDialogComponent,
    SearchResultsComponent
  ]
})
export class RoamlyModule { }
