import { Component, Input } from '@angular/core';
import { Hero } from '../Models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../Servicios/hero.service';
import { MessageService } from '../Servicios/message.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService
  ) {}


  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    //const id = +this.route.snapshot.paramMap.get('id'); Tutorial
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.messageService.add(`HeroService: Detail hero id=${id}`);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(){
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero!)
      .subscribe(() => this.goBack());
  }
}
