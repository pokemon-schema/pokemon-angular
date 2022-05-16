import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/poke-api/pokemon.service';

@Component({
  selector: 'app-pokemon-info-page',
  templateUrl: './pokemon-info-page.component.html',
  styleUrls: ['./pokemon-info-page.component.css']
})
  
export class PokemonInfoPageComponent implements OnInit {
  constructor(private pokemonService: PokemonService) { }

  //AJUSTAR O ID PRA SER RECEBIDO PELO CLICK DO BOTÃO...
  pokemon_id!: number;

  //api
  name!: string;
  weight!: number;
  height!: number;
  base_experience!: number;
  base_hp!: number;
  base_attack!: number;
  base_defense!: number;
  base_special_attack!: number;
  base_special_defense!: number;
  base_speed!: number;

  pokemon_img!: string;

  ngOnInit(): void {
    this.pokemon_img = this.pokemonService.getPokemonImg();
    this.pokemon_id = 25;
    this.pokemonService.getPokemonInfo(this.pokemon_id).subscribe((data: any) => {
      this.pokemon_id = data["id"];
      this.name = data["name"];
      this.weight = data["weight"];
      this.height = data["height"];
      this.base_experience = data["base_experience"];
      this.base_hp = data.stats[0].base_stat;
      this.base_attack = data.stats[1].base_stat;
      this.base_defense = data.stats[2].base_stat;
      this.base_special_attack = data.stats[3].base_stat;
      this.base_special_defense = data.stats[4].base_stat;
      this.base_speed = data.stats[5].base_stat;
    });
  }

}
