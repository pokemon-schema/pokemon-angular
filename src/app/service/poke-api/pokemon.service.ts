import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  public getPokemon() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5');
  }
  public getType() {
    return this.httpClient.get('https://pokeapi.co/api/v2/type/?offset=0&limit=5');
  }
  public getAbility() {
    return this.httpClient.get('https://pokeapi.co/api/v2/ability/?offset=0&limit=5');
  }
  public getItem() {
    return this.httpClient.get('https://pokeapi.co/api/v2/item/?offset=0&limit=5');
  }

}
