import { Component, EventEmitter, Output } from '@angular/core';
import { LandingService } from 'src/app/services/landingPage/landing.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss'
})
export class SearchModalComponent {
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private searchResult:LandingService){}

  closeModal() {
    // Emit an event to close the modal
    this.searchEvent.emit();
  }
  searchDestination(value:any) {
    const target = event?.target as HTMLInputElement;
    console.log("log", target.value)
    if (target) {
      const value = target.value;
      this.searchResult.searchDestination(value);
    }
    this.searchEvent.emit('search query');
  }
}
