import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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

  //created
  pokemon_id!: number;
  pokemon_name!: string;
  pokemon_url!: string;

  //api
  data!: [];
  pokemon_count!: number;
  pokemon_next!: string;
  pokemon_previous!: string;
  pokemon_results!: [];

  //sprite
  pokemon_img!: string;

  //slicer
  offset!: number;
  limit!: number;

  ngOnInit() {
    //pokemon-list (pager)
    this.pokemonService.getPokemonList().subscribe((data: any) => {
      this.offset = 0;
      this.limit = 12;

      this.data = data;
      this.pokemon_count = data.count;
      this.pokemon_next = data.next;
      this.pokemon_previous = data.previous;
      this.pokemon_results = data.results;
      
      console.log("POKEMON");
      console.log(this.data);
      console.log(this.pokemon_count);
      console.log(this.pokemon_next);
      console.log(this.pokemon_previous);
      console.log(this.pokemon_results);
    });
    
    //pokemon-sprite (img)
    this.pokemon_img = this.pokemonService.getPokemonImg();
  }

  goPokemonInfoPageClick(index: number, data: any) {
    this.pokemon_id = index + 1;
    this.pokemon_name = data["name"];
    this.pokemon_url = data["url"];
    console.log(
      `btn-pokemon-info clicked! 
      pokemon_id: ${this.pokemon_id}
      pokemon_name: ${this.pokemon_name}
      pokemon_name: ${this.pokemon_url}
      `
    );
    // alert("hello");
  }

  goNextPageClick(offset: number, limit: number) {
    if (limit <= 898) { //this.pokemon_count
      
      this.offset = offset + 12;
      this.limit = limit + 12;
      console.log(
        `btn-page-next clicked! 
        pokemon_id: ${this.offset}
        pokemon_id: ${this.limit}
        `
      );
    }
  }

  goPreviousPageClick(offset: number, limit: number) {
    if (offset > 0) {
      this.offset = offset - 12;
      this.limit = limit - 12;
      console.log(
        `btn-page-previous clicked! 
        pokemon_id: ${this.offset}
        pokemon_id: ${this.limit}
        `
      );
    }
  }



}

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
})
export class AppModule {
  pokemon_count!: number;
  pokemon_next!: string;
  pokemon_previous!: string;
  pokemon_results!: [];
  pokemon_img!: string;
}

