import { Component, inject } from '@angular/core';
import { PokedexService } from '../../srvices/pokedex.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  pService: PokedexService = inject(PokedexService);

}
