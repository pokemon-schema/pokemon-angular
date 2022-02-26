import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Icons
import {MatIconModule} from '@angular/material/icon';

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
import { PokemonInfoPageComponent } from './page/pokemon-info-page/pokemon-info-page.component';

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
    PokemonInfoPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
