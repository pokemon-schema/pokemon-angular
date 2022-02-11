import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Http
import { HttpClientModule } from '@angular/common/http';

//Modules Created
import { PokemonComponent } from './pokemon/pokemon.component';
import { ItemComponent } from './item/item.component';
import { TrainerComponent } from './trainer/trainer.component';
import { CorePanelComponent } from './core-panel/core-panel.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ItemComponent,
    TrainerComponent,
    CorePanelComponent,
    PokemonPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
