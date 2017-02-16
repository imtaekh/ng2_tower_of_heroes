import { Injectable } from '@angular/core';


import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    //return Promise.resolve(JSON.parse(JSON.stringify(HEROES)));
    return Promise.resolve(HEROES);
  }
}
