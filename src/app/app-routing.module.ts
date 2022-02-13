import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PokemonPageComponent } from './page/pokemon-page/pokemon-page.component';
import { ItemPageComponent } from './page/item-page/item-page.component';
import { AbilityPageComponent } from './page/ability-page/ability-page.component';

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
    path:'item-page',
    component: ItemPageComponent,
    data: {title: 'Pokemon | Item Page'}
  },
  {
    path:'ability-page',
    component: AbilityPageComponent,
    data: {title: 'Pokemon | Item Page'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
