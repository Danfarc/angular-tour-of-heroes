import { Component, OnInit } from '@angular/core';
import { Hero } from '../Models/hero';
//import { HEROES } from '../Mocks/mock-heroes';
import { HeroService } from '../Servicios/hero.service';
import { MessageService } from '../Servicios/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // Declaracion de Variables
  //hero = 'Windstorm';
  selectedHero?: Hero;
  //heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes?: Hero[];

  // Inyeccion de dependencias
  // Inyecto el servicio HeroService
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  // Metodos
  onSelect(hero: Hero): void {
    console.log(hero);
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes!.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes!.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
