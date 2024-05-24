import { Component } from '@angular/core';
import { AlertMessageService } from 'src/app/common/services/alert-message.service';

@Component({
  selector: 'app-plan-trip',
  templateUrl: './plan-trip.component.html',
  styleUrl: './plan-trip.component.scss'
})
export class PlanTripComponent {
  constructor(private alertSvc:AlertMessageService){}
  
  ngOnInit() {

  }
}
