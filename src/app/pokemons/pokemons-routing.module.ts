import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SinglePokemonComponent } from './components/single-pokemon/single-pokemon.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: ':id', component: SinglePokemonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
