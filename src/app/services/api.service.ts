import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base_url:string = 'http://127.0.0.1:8000/api/v1';

  constructor(private http: HttpClient) { }

  getMedia() {
    return this.http.get(`${this.base_url}/adminboard/media`);
  }

  uploadMedia(details:FormGroup) {
    console.log(details);
  //  return this.http.post(`${this.base_url}/adminboard/media`, details);
  }

  patchMedia(details:FormGroup, id:Number) {
    console.log(details, id)
    // return this.http.post(`${this.base_url}/adminboard/media/${id}`, details);
  }
  

}
