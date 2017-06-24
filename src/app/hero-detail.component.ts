import {Component, Input} from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'hero-detail',
  templateUrl: './htmls/hero-detail.component.html',
  styleUrls: ['./styles/hero-detail.component.css']
})

export class HeroDetailComponent {
  @Input() hero:Hero;
}
