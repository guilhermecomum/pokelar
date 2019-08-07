import { Component, OnInit } from '@angular/core';
import { MatCard, MatButton } from '@angular/material';
import { DITTO } from '../shared/pokemon.mock'

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {
  public pokemon = DITTO;
  constructor() { }

  ngOnInit() {
  }


}
