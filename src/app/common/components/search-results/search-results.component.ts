import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  constructor(private router: Router){}
  @Input() searchResults: any[] = [];
  searchModal : boolean = false;
  ngOnInit() {
    // this.href = this.router.url;
    if(this.router.url == '/search'){
      this.searchModal = true;
    }else{
      this.searchModal = false;
    }
    console.log(this.searchModal);
}
}
