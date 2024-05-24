import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertMessageService } from '../../services/alert-message.service';

@Component({
  selector: 'phr-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrl: './alert-msg.component.scss'
})
export class AlertMsgComponent {
  private alertSvcSub: Subscription | undefined;
  alertData: any;
  @Output() closeAlertMsgEvent = new EventEmitter();

  constructor(private alertService: AlertMessageService) {}

  ngOnInit() {
    this.alertSvcSub = this.alertService
      .getAlertMessage()
      .subscribe((alertMessageData) => {
        this.alertData = alertMessageData;
      });
  }

  closeAlertMsgBoxHandler() {
    this.alertService?.closeAlertMessage();
    this.closeAlertMsgEvent.emit();
  }

  ngOnDestroy(): void {
    if (this.alertSvcSub) this.alertSvcSub.unsubscribe();
  }
}
