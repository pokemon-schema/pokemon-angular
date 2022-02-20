import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/poke-api/pokemon.service';
//import { Observable } from 'rxjs';
//import 'rxjs/add/aperator/map';

@Component({
  selector: 'app-pokemon',
  templateUrl: './tb_pokemon.component.html',
  styleUrls: ['./tb_pokemon.component.css']
})

export class PokemonComponent implements OnInit {
  constructor(private pokemonService: PokemonService) { }
  title = "asdasd";
  pokemon: any;

  // fetchDataFromServer() {
  //   this.pokemon = this.pokemonService.getAllPokemons();
  // }

  //pokemon
  pokemon_count!: number;
  pokemon_next!: string;
  pokemon_previous!: string;
  pokemon_results!: [];

  //amyszko - on construction.. monkey shit 
  api_pokemon_count!: number;
  api_pokemon_next!: string;
  api_pokemon_previous!: string;
  api_pokemon_results!: [];

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((data: any) => {

      this.pokemon_count = data.count;
      this.pokemon_next = data.next;
      this.pokemon_previous = data.previous;
      this.pokemon_results = data.results;

      console.log("POKEMON");
      console.log(this.pokemon_count);
      console.log(this.pokemon_next);
      console.log(this.pokemon_previous);
      console.log(this.pokemon_results);
    });

  }
}

