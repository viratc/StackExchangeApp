import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from './search-service.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  data: any = [];

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
      site: 'stackoverflow', 
    });
    
  }

  // Function called when the `search` button is clicked
  searchData(){
    
    const params = Object.assign({}, this.searchForm.value); 
    console.log("params:", JSON.stringify(params));
    
    this.searchService.getData(params).subscribe(data => {
      this.data = data;
    });
    
  }

}
