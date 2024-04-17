import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  id!:any;
  constructor(
    private meta: Meta,
    private route: ActivatedRoute
  ) {
    
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ID:', this.id);
    });
    this.meta.addTag({ property: 'og:title', content: `Contact Open Graph Title | id=${this.id}` })
  }
}
