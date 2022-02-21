import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Http
import { HttpClientModule } from '@angular/common/http';

//Modules Created
import { PokemonComponent } from './table/tb_pokemon/tb_pokemon.component';
import { PokemonPageComponent } from './page/pokemon-page/pokemon-page.component';
import { TableAbilityComponent } from './table/tb_ability/tb_ability.component';
import { TypeComponent } from './table/tb_type/tb_type.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AbilityPageComponent } from './page/ability-page/ability-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypePageComponent } from './page/type-page/type-page.component';
import { PokemonSearchPipe } from './pipe/pokemon-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonPageComponent,
    TableAbilityComponent,
    TypeComponent,
    HomePageComponent,
    AbilityPageComponent,
    TypePageComponent,
    PokemonSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
