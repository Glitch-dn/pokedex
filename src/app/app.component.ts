import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PackComponent } from './components/pack/pack.component';
import { Card } from './models/cardModel';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PackComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  packs: Card[]=[];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<Card[]>('assets/pokedex.json').subscribe(
      data => {
        console.log('Dati ricevuti:', data);
        this.packs = data;
      },
      error => {
        console.error('Errore caricamento JSON:', error);
      }
    );
  }
  
}
