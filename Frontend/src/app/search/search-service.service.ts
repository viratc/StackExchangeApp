import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getData(params){
    let url = this.baseUrl;
    console.log("url:", url);
    
    return this.http.get<any>(url, params);
  }
}
