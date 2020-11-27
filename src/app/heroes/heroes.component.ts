import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
// angular core 라이브러리에서 제공하는 Decorator

import { Hero } from '../hero'; // hero interface를 import
import { HeroService } from '../hero.service'; // HeroService import
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes', // Component Name
  templateUrl: './heroes.component.html', // Template URL
  styleUrls: ['./heroes.component.sass'], // style URL
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]; // getHeroes함수를 통해서 받아온 데이터를 저장하기 위해서 빈 Hero배열을 선언

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
