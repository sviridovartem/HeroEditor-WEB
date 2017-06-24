import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component'
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './htmls/app.component.html',
  styleUrls: ['./styles/app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes:Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}




