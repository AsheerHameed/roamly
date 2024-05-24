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

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchModalComponent,
    AuthDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    OnboardingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SearchModalComponent,
    AuthDialogComponent
  ]
})
export class RoamlyModule { }
