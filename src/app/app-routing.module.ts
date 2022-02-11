import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePanelComponent } from './core-panel/core-panel.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';

const routes: Routes = [
  {path:'', component: CorePanelComponent},
  {path:'pokemon-page', component: PokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
