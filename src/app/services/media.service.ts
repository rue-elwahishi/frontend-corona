import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import MediaReq from 'src/models/MediaReq';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class MediaService {

  request: MediaReq;

  constructor() { 
    
  }

  setRequest(advice_id: number, isNew: boolean) {
    this.request.advice_id = advice_id;
    this.request.isNew = isNew;
  }

  upload(form: FormGroup) {
    this.request.form = form;
    //TODO: send request to API service 
  }

}
