import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PokemonPageComponent } from './page/pokemon-page/pokemon-page.component';
import { AbilityPageComponent } from './page/ability-page/ability-page.component';
import { TypePageComponent } from './page/type-page/type-page.component';
import { PokemonInfoPageComponent } from './page/pokemon-info-page/pokemon-info-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
    data: {title: 'Pokemon | Home Page'}
  },
  {
    path:'pokemon-page',
    component: PokemonPageComponent,
    data: {title: 'Pokemon | Pokemon Page'}
  },
  {
    path:'pokemon-page/pokemon-info',
    component: PokemonInfoPageComponent,
    data: {title: 'Pokemon | Pokemon-Info Page'}
  },
  {
    path:'ability-page',
    component: AbilityPageComponent,
    data: {title: 'Pokemon | Ability Page'}
  },
  {
    path:'type-page',
    component: TypePageComponent,
    data: {title: 'Pokemon | Type Page'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
