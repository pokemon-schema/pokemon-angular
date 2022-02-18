import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  public getPokemon() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon');
  }
  public getType() {
    return this.httpClient.get('https://pokeapi.co/api/v2/type');
  }
  public getAbility() {
    return this.httpClient.get('https://pokeapi.co/api/v2/ability');
  }
  public getItem() {
    return this.httpClient.get('https://pokeapi.co/api/v2/item');
  }

  // public getAllPokemons() {
  //   return this.httpClient.get('http://localhost:8080/pokemons');
  // }


}
