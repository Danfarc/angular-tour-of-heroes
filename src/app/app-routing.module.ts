import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './Page/dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent, title: 'Heroes' },
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
  { path: 'detail/:id', component: HeroDetailComponent, title:'Detail' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ruta  predeterminada

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
