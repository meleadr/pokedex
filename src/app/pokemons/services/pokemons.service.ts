import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, delay, Observable, tap} from "rxjs";
import {Pokemon} from "../models/pokemon.model";

@Injectable()
export class PokemonsService {

  constructor(private http: HttpClient) { }

  private _loading$ = new BehaviorSubject<boolean>(false);
  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  private _pokemons$ = new BehaviorSubject<Pokemon[]>([]);
  get pokemons$(): Observable<Pokemon[]> {
    return this._pokemons$.asObservable();
  }

  private lastPokemonsLoaded = 0;

  private setLoadingStatus(status: boolean) {
    this._loading$.next(status);
  }

  getAllPokemons():void {
    //if(Date.now() - this.lastPokemonsLoaded <= 3000000) {
    //  return;
    //}
    this.setLoadingStatus(true);
    this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon/?limit=20').pipe(
      delay(1000),
      tap(pokemons => {
        //this.lastPokemonsLoaded = Date.now();
        this._pokemons$.next(pokemons);
        this.setLoadingStatus(false);
      })
    ).subscribe();
  }
}
