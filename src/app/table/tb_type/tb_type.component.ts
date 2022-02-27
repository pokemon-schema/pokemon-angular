import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/poke-api/pokemon.service';

@Component({
  selector: 'app-type',
  templateUrl: './tb_type.component.html',
  styleUrls: ['./tb_type.component.css']
})
export class TypeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  //created
  type_id!: number;
  type_name!: string;
  type_url!: string;

  //api
  type_count!: number;
  type_next!: string;
  type_previous!: string;
  type_results!: [];

  ngOnInit() {
    this.pokemonService.getType().subscribe((data: any) => {
      this.type_count = data.count;
      this.type_next = data.next;
      this.type_previous = data.previous;
      this.type_results = data.results;

      console.log("TYPES");
      console.log(this.type_count);
      console.log(this.type_next);
      console.log(this.type_previous);
      console.log(this.type_results);
    });

  }

  goTypeInfoPageClick(index: number, data: any) {
    this.type_id = index + 1;
    this.type_name = data["name"];
    this.type_url = data["url"];
    console.log(
      `btn-type-info clicked! 
      type_id: ${this.type_id}
      type_name: ${this.type_name}
      type_name: ${this.type_url}
      `
    );
    // alert("hello");
  }

  goNextPageClick(index: number) {
    this.type_id = index + 1;
    console.log(
      `btn-type-info clicked! 
      type_id: ${this.type_id}
      `
    );
  }

}

