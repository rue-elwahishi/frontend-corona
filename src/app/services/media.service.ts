import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import MediaReq from 'src/models/MediaReq';
import { FormGroup } from '@angular/forms';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class MediaService {

  request: MediaReq = new MediaReq();

  constructor(private api:ApiService) {}

  setRequest(advice_id, isNew) {
    this.request.advice_id = advice_id;
    this.request.isNew = isNew;
  }

  upload(form: FormGroup) {
    if(this.request.isNew) {
      form.get('_method').setValue('POST'); 
      form.get('advice_id').setValue(this.request.advice_id);
      this.api.uploadMedia(form);
    } else {
      form.get('_method').setValue('PATCH');
      this.api.patchMedia(form, this.request.advice_id); 
    }
  }

}
