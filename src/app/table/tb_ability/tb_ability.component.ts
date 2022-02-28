import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/poke-api/pokemon.service';

@Component({
  selector: 'app-ability',
  templateUrl: './tb_ability.component.html',
  styleUrls: ['./tb_ability.component.css']
})
export class TableAbilityComponent implements OnInit {
  constructor(private pokemonService: PokemonService) { }

  //created
  ability_id!: number;
  ability_name!: string;
  ability_url!: string;

  //api
  ability_count!: number;
  ability_next!: string;
  ability_previous!: string;
  ability_results!: [];

  //slicer
  offset!: number;
  limit!: number;

  ngOnInit() {

      this.pokemonService.getAbility(this.offset, this.limit).subscribe((data: any) => {
      this.offset = 0;
      this.limit = 6;

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

  goAbilityInfoPageClick(index: number, data: any) {
    this.ability_id = index + 1;
    this.ability_name = data["name"];
    this.ability_url = data["url"];
    console.log(
      `btn-ability-info clicked! 
      ability_id: ${this.ability_id}
      ability_name: ${this.ability_name}
      ability_name: ${this.ability_url}
      `
    );
    // alert("hello");
  }

  goNextPageClick(offset: number, limit: number) {
    if (limit <= 327) { //this.ability_count
      
      this.offset = offset + 6;
      this.limit = limit + 6;
      console.log(
        `btn-page-next clicked! 
        ability_id: ${this.offset}
        ability_id: ${this.limit}
        `
      );
    }
  }

  goPreviousPageClick(offset: number, limit: number) {
    if (offset > 0) {
      this.offset = offset - 6;
      this.limit = limit - 6;
      console.log(
        `btn-page-previous clicked! 
        type_id: ${this.offset}
        type_id: ${this.limit}
        `
      );
    }
  }


}
