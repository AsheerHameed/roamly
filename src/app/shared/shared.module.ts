import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMsgComponent } from '../common/components/alert-msg/alert-msg.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [AlertMsgComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [AlertMsgComponent]
})
export class SharedModule { }
