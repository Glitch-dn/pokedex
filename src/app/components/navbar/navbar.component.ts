import { Component, inject } from '@angular/core';
import { PokedexService } from '../../srvices/pokedex.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  home(){
    window.location.reload();
  }

  pService : PokedexService = inject(PokedexService);

  changeDirectory(d:string){
    return this.pService.selectedDirectory = d;
  }
}
