import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../api/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {
  constructor(private pokemonService: PokemonService) { }

  //pokemon
  pokemon_count!: number;
  pokemon_next!: string;
  pokemon_previous!: string;
  pokemon_results!: [];

  //ability
  ability_count!: number;
  ability_next!: string;
  ability_previous!: string;
  ability_results!: [];

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe((data: any) => {

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
    
    this.pokemonService.getAbility().subscribe((data: any) => {
      this.ability_count = data.count;
      this.ability_next = data.next;
      this.ability_previous = data.previous;
      this.ability_results = data.results;
      
      console.log("ABILITY");
      console.log(this.ability_count);
      console.log(this.ability_next);
      console.log(this.ability_previous);
      console.log(this.ability_results);
    });

  }
}

