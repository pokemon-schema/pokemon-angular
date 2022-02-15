import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/poke-api/pokemon.service';

@Component({
  selector: 'app-item',
  templateUrl: './tb_item.component.html',
  styleUrls: ['./tb_item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  //item
  item_count!: number;
  item_next!: string;
  item_previous!: string;
  item_results!: [];

  ngOnInit() {
    this.pokemonService.getItem().subscribe((data: any) => {
      this.item_count = data.count;
      this.item_next = data.next;
      this.item_previous = data.previous;
      this.item_results = data.results;

      console.log("ITEM");
      console.log(this.item_count);
      console.log(this.item_next);
      console.log(this.item_previous);
      console.log(this.item_results);
    });

  }

}
