import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from './search-service.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private searchService: SearchServiceService) {
    this.searchForm = this.createFormGroup(formBuilder);
   }

  ngOnInit() {}

  // Have all the form control buttons
  createFormGroup(formBuilder: FormBuilder) {

    return formBuilder.group({
      page: '',
      pageSize: '',
      fromDate: '',
      toDate: '',
      order: 'desc',
      min: '',
      max: '',
      sort: 'activity',
      q: '',
      accepted: '',
      answers: '',
      body: '',
      closed: '',
      migrated: '',
      notice: '',
      notTagged: '',
      tagged: '',
      title: '',
      user: '',
      url: '',
      views: '',
      wiki: '', 
    });
    
  }

  // Function called when the `search` button is clicked
  searchData(){
    console.log("searchData function!!");
    
  }

}
