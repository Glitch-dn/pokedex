import { Component, inject, OnInit} from '@angular/core';
import { PackComponent } from "../pack/pack.component";
import { DetailsComponent } from "../details/details.component";
import { Pokemon } from '../../models/pokedex';
import { Item } from '../../models/item';
import { MoveResponse } from '../../models/move';
import { PokedexService } from '../../srvices/pokedex.service';
import { CommonModule } from '@angular/common';
import { TypePkm } from '../../models/type';
import { BagComponent } from "../bag/bag.component";

@Component({
  selector: 'app-pokedex',
  imports: [PackComponent, DetailsComponent, CommonModule, BagComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  pokedex: Pokemon[]= [];
  filteredPokemon: Pokemon[] = [];
  items: Item[] = [];
  moves?: MoveResponse;
  types: TypePkm[] = [];

  pokedexService: PokedexService = inject(PokedexService);
  
  ngOnInit(): void {
    this.pokedexService.getPokedex().subscribe(data => this.pokedex = data);
    this.pokedexService.getItems().subscribe(data => this.items = data);
    this.pokedexService.getMoves().subscribe(data => this.moves = data);
    this.pokedexService.getTypes().subscribe(data => this.types = data);
  }
  

}
