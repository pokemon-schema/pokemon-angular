import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../api/pokemon/pokemon.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

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
  
}