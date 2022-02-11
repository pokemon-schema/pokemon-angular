import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../api/pokemon/pokemon.service';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {
  constructor(private pokemonService: PokemonService) { }

  //ability
  ability_count!: number;
  ability_next!: string;
  ability_previous!: string;
  ability_results!: [];

  ngOnInit() {

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
