import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PokedexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-pokedex';
}
