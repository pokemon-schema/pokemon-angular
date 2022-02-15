import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/poke-api/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './tb_pokemon.component.html',
  styleUrls: ['./tb_pokemon.component.css']
})

export class PokemonComponent implements OnInit {
  constructor(private pokemonService: PokemonService) { }

  //pokemon
  pokemon_count!: number;
  pokemon_next!: string;
  pokemon_previous!: string;
  pokemon_results!: [];

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

  }
}

