import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PokemonsService} from "../../services/pokemons.service";
import {PokemonList} from "../../models/pokemon-list.model";
import {Pokemon} from "../../models/pokemon.model";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit{

  loading$!: Observable<boolean>;
  pokemons$!: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit(): void {
    this.initObservables();
    this.pokemonService.getAllPokemons();
  }

  private initObservables() {
    this.loading$ = this.pokemonService.loading$;
    this.pokemons$ = this.pokemonService.pokemons$;
  }
}
