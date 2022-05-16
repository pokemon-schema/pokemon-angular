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
  url!: string;

  baseUrl = "http://localhost:8080/";

  /* ENDPOINT SPRINBOOT API: */
  public getPokemonList(offset: number, limit: number) {
    this.offset = offset;
    this.limit = 898; //limit
    this.url = `http://localhost:8080/pokemon/?offset=${this.offset}&limit=${this.limit}`;
    return this.httpClient.get(this.url);
  }
  public getPokemonInfo(pokemon_id: number) {
    this.id = pokemon_id;
    this.url = `http://localhost:8080/pokemon/id/${this.id}`;
    return this.httpClient.get(this.url);
  }
 
  //pokemon-sprite-utl (img)
  public getPokemonImg() {
    this.id = 1;
    this.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`; // ${this.id}.png
    return this.url;
  }

  
  //type-list (pager)
  public getType(offset: number, limit: number) {
    this.offset = offset;
    this.limit = 20; //limit
    this.url = `https://pokeapi.co/api/v2/type/?offset=${this.offset}&limit=${this.limit}`;
    return this.httpClient.get(this.url);
  }

  //ability-list (pager)
  public getAbility(offset: number, limit: number) {
    this.offset = offset;
    this.limit = 327; //limit
    this.url = `https://pokeapi.co/api/v2/ability/?offset=${this.offset}&limit=${this.limit}`;
    return this.httpClient.get(this.url);
  }

}
