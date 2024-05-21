import { Component } from '@angular/core';
import { featureCard } from 'src/app/common/constants/features';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        animate(1500)
      ]),
    ])
  ]
})
export class FeaturesComponent {
  cards = featureCard
}
