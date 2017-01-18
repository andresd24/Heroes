import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Hero } from './hero';


@Component({
    selector: 'my-app',
    template: `
      <h2>{{title}}</h2>
      <h3>Heroes</h3>
      <ul class="heroes">
        <li *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <my-hero-detail [hero]="selectedHero"></my-hero-detail>,
    `,
    providers: [HeroService]
})


export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

}

