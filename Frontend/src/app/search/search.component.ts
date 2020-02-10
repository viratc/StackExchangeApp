import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from './search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {

    // Have all the form control buttons
  }

  // Function called when the `search` button is clicked
  searchData(){
    console.log("searchData function!!")
  }

}
