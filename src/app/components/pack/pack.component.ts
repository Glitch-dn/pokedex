import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokedex';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { TypePkm } from '../../models/type';

@Component({
  selector: 'app-pack',
  imports: [CommonModule, CardComponent],
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.css'
})
export class PackComponent {
  @Input()
  fullPokemon: Pokemon[] = [];
  @Input()
  fullTypes:TypePkm[] = [];

  filteredPokemon: Pokemon[] = [];
  selectedType: string = '';
  

  filterByType(type:string) {
    console.log(type);
      this.filteredPokemon = this.fullPokemon.filter(pokemon => pokemon.type.includes(type));
      this.selectedType = type;
      
  }
  resetPokedex(){
    this.filteredPokemon = [];
    this.selectedType = '';
  }
  
}
