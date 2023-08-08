import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SinglePokemonComponent } from './components/single-pokemon/single-pokemon.component';
import { PokemonsService } from './services/pokemons.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PokemonListComponent, SinglePokemonComponent],
  imports: [CommonModule, PokemonsRoutingModule, SharedModule],
  providers: [PokemonsService],
})
export class PokemonsModule {}
