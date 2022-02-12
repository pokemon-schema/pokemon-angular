import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Http
import { HttpClientModule } from '@angular/common/http';

//Modules Created
import { PokemonComponent } from './pokemon/pokemon.component';
import { ItemComponent } from './item/item.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { AbilityComponent } from './ability/ability.component';
import { TypeComponent } from './type/type.component';
import { HomePageComponent } from './page/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ItemComponent,
    PokemonPageComponent,
    AbilityComponent,
    TypeComponent,
    HomePageComponent,
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
