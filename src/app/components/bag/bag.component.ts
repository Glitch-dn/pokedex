import { Component, Input } from '@angular/core';
import { ItemComponent } from "../item/item.component";
import { Item } from '../../models/item';

@Component({
  selector: 'app-bag',
  imports: [ItemComponent],
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.css'
})
export class BagComponent {
 @Input()
 fullItems: Item [] = [];

 
}
