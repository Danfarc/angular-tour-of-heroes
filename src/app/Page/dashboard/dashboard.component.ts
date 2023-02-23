import { Component } from '@angular/core';
import { Hero } from 'src/app/Models/hero';
import { HeroService } from 'src/app/Servicios/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Declaro Variables
  heroes: Hero[] = [];

  // Inyecto dependencias
  constructor(private heroService: HeroService) { }

  // Inicializo la aplicacion
  ngOnInit() {
    this.getHeroes();
  }

  //Meotodos
  //Llamo al servicio
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
