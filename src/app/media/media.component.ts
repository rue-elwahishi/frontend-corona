import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MediaService } from '../services/media.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private media: MediaService) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      image: new FormControl(),
      name: new FormControl(),
      type: new FormControl(),
      advice_id: new FormControl(),
      _method: new FormControl()
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0){
      const file = event.target.files[0];
      this.uploadForm.get('image').setValue(file);
      this.uploadForm.get('name').setValue(file.name);
      this.media.upload(this.uploadForm);
    }
  }

}
