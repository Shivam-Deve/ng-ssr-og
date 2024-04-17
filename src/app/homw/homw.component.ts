import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-homw',
  templateUrl: './homw.component.html',
  styleUrls: ['./homw.component.scss']
})
export class HomwComponent {
  constructor(private meta: Meta) {
    this.meta.addTag({ property: 'og:title', content: 'Home Open Graph Title' })
  }
}
