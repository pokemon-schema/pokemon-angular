import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PokemonPageComponent } from './page/pokemon-page/pokemon-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
