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

  //slicer
  offset!: number;
  limit!: number;

  ngOnInit() {
    this.pokemonService.getType(this.offset, this.limit).subscribe((data: any) => {
      this.offset = 0;
      this.limit = 6;

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

  goNextPageClick(offset: number, limit: number) {
    if (limit <= this.type_count) {
      
      this.offset = offset + 6;
      this.limit = limit + 6;
      console.log(
        `btn-page-next clicked! 
        type_id: ${this.offset}
        type_id: ${this.limit}
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

