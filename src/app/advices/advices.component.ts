import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {

  advice:Object = {};

  constructor(private media:MediaService) { }

  ngOnInit() {
  }

  createAdvice() {
    if(!Array.isArray(this.advice['phones']))
      this.advice['phones'] = this.advice['phones'].replace(/\s/g, '').split(',');
    
    var id = 1;
    // create advice request
    // get advice ID and change media status to id
    this.media.setRequest(id, true);
  }

}
