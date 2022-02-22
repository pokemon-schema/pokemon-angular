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
  title = "asdasd";
  pokemon: any;

  //pokemon
  pokemon_count!: number;
  pokemon_next!: string;
  pokemon_previous!: string;
  pokemon_results!: [];
  pokemon_img!: string;

  ngOnInit() {
    //pokemon-list (pager)
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
    
    //pokemon-sprite (img)
    this.pokemon_img = this.pokemonService.getPokemonImg();

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

