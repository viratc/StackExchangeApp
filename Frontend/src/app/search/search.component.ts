import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SearchServiceService } from './search-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  data: any = [];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private formBuilder: FormBuilder, private searchService: SearchServiceService, private changeDetectorRef: ChangeDetectorRef) {
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
    // console.log("params:", JSON.stringify(params));
    
    this.searchService.getData(params).subscribe(data => {
      this.data = data['items'];
    });
    
    console.log("data:", this.data)

  }

}
