import { Component, OnInit } from '@angular/core';
// angular core 라이브러리에서 제공하는 Decorator

import { Hero } from '../hero'; // hero interface를 import
import { HEROES } from '../mock-heroes' // mock data import

@Component({
  selector: 'app-heroes',   // Component Name
  templateUrl: './heroes.component.html',   // Template URL
  styleUrls: ['./heroes.component.sass']    // style URL
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;    //mock-heroes file --> heroes에 할당
  selectedHero:Hero;    //onSelect함수를 통해서 받아온 매개변수를 hero interface에 적용 

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

}
