import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {

  advice:Object = {};

  constructor(private media:MediaService, private router:Router, private api: ApiService) { }

  ngOnInit() {
  }

  createAdvice() {
    if(!Array.isArray(this.advice['phones']))
      this.advice['phones'] = this.advice['phones'].replace(/\s/g, '').split(',');
    
    this.api.createAdvice(this.advice)
    .subscribe({
      next: (id) => {
        this.media.setRequest(id, true);
        this.router.navigate(['/upload']);
      }
    })
    
  }

}
