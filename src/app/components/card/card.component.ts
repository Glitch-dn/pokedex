import { Component, Input } from '@angular/core';
import { Card } from '../../models/cardModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() 
  pokemon?: Card;

  // Funzione per formattare l'id a tre cifre
  padId(id: number): string {
    return id.toString().padStart(3, '0');
  }
}
