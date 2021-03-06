import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class ApiService {

  private base_url:string = 'http://127.0.0.1:8000/api/v1';

  constructor(private http: HttpClient) { }


  // Advice requests

  getAdvice(id: Number|String = ''){
    return this.http.get(`${this.base_url}/adminboard/advice/${id}`)
  }

  createAdvice(details) {
    return this.http.post(`${this.base_url}/adminboard/advice`, details);
  }

  // Media requests

  getMedia(id: Number|String = '') {
    return this.http.get(`${this.base_url}/adminboard/media/${id}`);
  }

  uploadMedia(details:FormGroup) {
    return this.http.post(`${this.base_url}/adminboard/media`, details);
  }

  patchMedia(details:FormGroup, id:Number) {
    return this.http.post(`${this.base_url}/adminboard/media/${id}`, details);
  }

  // FAQs requests

  getFaq(id: Number|String = "") {
    return this.http.get(`${this.base_url}/adminboard/faqs/${id}`);
  }

  createFaq(details) {
    return this.http.post(`${this.base_url}/adminboard/faqs`, details);
  }
  

}
