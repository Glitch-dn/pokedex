import { Component, inject, Input } from '@angular/core';
import { Pokemon } from '../../models/pokedex';
import { CommonModule } from '@angular/common';
import { PokedexService } from '../../srvices/pokedex.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  pokemon?:Pokemon;

  pService: PokedexService = inject(PokedexService);

  showDetails(pkm: Pokemon) {
    this.pService.selectedPokemon = [pkm];
  }
}
