import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  offset!: number;
  limit!: number;
  id!: number;

  //pokemon-list (pager)
  public getPokemonList() {
    this.offset = 0;
    this.limit = 5;
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/?offset='+ this.offset +'&limit='+ this.limit);
  }
  //pokemon-info (id)
  public getPokemonInfo() {
    this.id = 1;
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/' + this.id);
  }
  
  //pokemon-sprite-utl (img)
  public getPokemonImg() {
    this.id = 1;
    return this.httpClient.get('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ this.id +'.png');
  }

  //type-list (pager)
  public getType() {
    return this.httpClient.get('https://pokeapi.co/api/v2/type/?offset='+ this.offset +'&limit='+ this.limit);
  }

  //ability-list (pager)
  public getAbility() {
    return this.httpClient.get('https://pokeapi.co/api/v2/ability/?offset='+ this.offset +'&limit='+ this.limit);
  }

}
