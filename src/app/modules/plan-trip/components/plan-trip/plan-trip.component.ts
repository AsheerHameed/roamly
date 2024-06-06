import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-plan-trip',
  providers: [provideNativeDateAdapter()],
  templateUrl: './plan-trip.component.html',
  styleUrl: './plan-trip.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        animate(500)
      ]),
    ])
  ]
})
export class PlanTripComponent {

  showTripmateDiv = false
  selected = "friends"
  displayTripmateDiv() {
    this.showTripmateDiv = !this.showTripmateDiv;
  }
}
