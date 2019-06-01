import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MethodCall } from '@angular/compiler';
import { elementAttribute } from '@angular/core/src/render3';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  ready: boolean;

  tab: any[] = [];
  tabPokemon: Pokemon[] = [];


  getPokemons() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokedex/1').subscribe(poke => {
      console.log(poke);
      poke.pokemon_entries.forEach(element => {
        this.tab.push(element);
      });

      for (var i = 0; i < this.tab.length; i++) {
        var temp = new Pokemon(this.tab[i].entry_number, this.tab[i].pokemon_species.name, 
          //'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(i+1)+'.png',
         // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'+(i+1)+'.png',
          // [], []
        );
        this.tabPokemon.push(temp)
      }
      this.ready = true;
    });

  }
}