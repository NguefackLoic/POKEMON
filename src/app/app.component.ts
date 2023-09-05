import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  //pokemonList: Pokemon[] = POKEMONS ;
 // pokemonSelected :  Pokemon | undefined;

  ngOnInit() {
    //console.table(this.pokemonList);  
  }

  /**selectPokemon(pokemonId : string){
   const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
   if(pokemon){
    console.log('vous avez cliquer sur le pokemon ' + pokemon.name);
    this.pokemonSelected = pokemon;
   }else{
    console.log('vous avez demander un pokemon qui n existe pas');
    this.pokemonSelected = pokemon;
   }
  }*/
}
 