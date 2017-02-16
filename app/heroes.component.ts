import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero = null;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  getHeroes(): void {
    this.selectedHero = null;
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    console.log("")
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  showSelectedHero(): void{
    console.log("show: ", this.selectedHero);
  }

  removeSelectedHero(): void{
    this.selectedHero = null;
  }

  selectedHeroChange(event: Hero) {
    this.selectedHero = event;
  }

}
