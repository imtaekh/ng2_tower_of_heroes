import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector:'my-hero-detail',
  template:`
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <input type="button" (click)="changeHero(null)" value="Close">
    </div>
  `
})
export class HeroDetailComponent{
  @Input()
  hero: Hero;

  @Output()
  heroChange: EventEmitter<Hero> = new EventEmitter<Hero>();

  showHero(): void {
    console.log("showHero: ", this.hero)
    //this.change.emit(this.hero);
  }

  changeHero(hero:Hero): void {
    this.hero = null;
    this.heroChange.emit(this.hero);
  }
}
