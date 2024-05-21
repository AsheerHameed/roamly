import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss'
})
export class SearchModalComponent {
  @Output() searchEvent = new EventEmitter<string>();

  closeModal() {
    // Emit an event to close the modal
    this.searchEvent.emit();
  }

  searchDestination() {
    // Implement your search logic here
    // Emit an event with the search query
    this.searchEvent.emit('search query');
  }
}
