import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../../models/cardModel';

@Component({
  selector: 'app-pack',
  imports: [CardComponent],
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.css'
})
export class PackComponent {
  @Input() pack: Card[] = [];
}
