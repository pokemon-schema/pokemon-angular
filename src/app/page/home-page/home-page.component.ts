import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

  template: `
  <img src="assets/img/abilityImg.png">
  <img src="assets/img/itemImg.jpg">
  <img src="assets/img/pokemonImg.png">
  <img src="assets/img/typeImg.png">
  `
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
