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

  //pokemon-list (pager)
  public getPokemonList() {
    this.offset = 0;
    this.limit = 898;
    this.url = `https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=${this.limit}`;
    return this.httpClient.get(this.url);
  }
  //pokemon-info (id)
  public getPokemonInfo() {
    this.id = 1;
    this.url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
    return this.httpClient.get(this.url);
  }
  
  //pokemon-sprite-utl (img)
  public getPokemonImg() {
    this.id = 1;
    this.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`; //${this.id}.png
    return this.url;
  }

  //type-list (pager)
  public getType() {
    this.offset = 0;
    this.limit = 5;
    this.url = `https://pokeapi.co/api/v2/type/?offset=${this.offset}&limit=${this.limit}`;
    return this.httpClient.get(this.url);
  }

  //ability-list (pager)
  public getAbility() {
    this.offset = 0;
    this.limit = 5;
    this.url = `https://pokeapi.co/api/v2/ability/?offset=${this.offset}&limit=${this.limit}`;
    return this.httpClient.get(this.url);
  }

}
