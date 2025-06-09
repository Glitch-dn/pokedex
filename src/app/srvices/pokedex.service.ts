import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemsResponse } from '../models/item';
import { PokedexResponse, Pokemon } from '../models/pokedex';
import { MoveResponse } from '../models/move';
import { TypePkm } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private basePath = '/pokemon.json/';

  selectedPokemon:Pokemon[] = [];

  constructor(private http: HttpClient) {}

  getItems(): Observable<ItemsResponse> {
    return this.http.get<ItemsResponse>(`${this.basePath}items.json`);
  }

  getPokedex(): Observable<PokedexResponse> {
    return this.http.get<PokedexResponse>(`${this.basePath}pokedex.json`);
  }

  getMoves(): Observable<MoveResponse> {
    return this.http.get<MoveResponse>(`${this.basePath}moves.json`);
  }

  getTypes(): Observable<TypePkm[]> {
    return this.http.get<TypePkm[]>(`${this.basePath}types.json`);
  }
}