import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrl: './cards-component.component.scss'
})
export class CardsComponent {

  @Input() cardsHeading!:string;

  cards = [
    {
      image: 'https://picsum.photos/200/300',
      head: 'Paris, France'
    },
    {
      image: 'https://picsum.photos/200/300',
      head: 'New York, USA'
    },
    {
      image: 'https://picsum.photos/200/300',
      head: 'Tokyo, Japan'
    },
    {
      image: 'https://picsum.photos/200/300',
      head: 'Sydney, Australia'
    },
  ];
}
