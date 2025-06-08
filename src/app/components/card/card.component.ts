import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokedex';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  pokemon?:Pokemon;
}
