import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { HttpService } from '../http.service';




@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})


export class MyComponentComponent implements OnInit {

  idinput: string = '';
  selectedValue: Pokemon;
  choix: String;
  done: Boolean = false;
  name : string;
  id : number;
  brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];

  filteredPokemon: any[];

  brand: Pokemon;

  pokemons : Pokemon[] = this.recup.tabPokemon;
  messageService: any;


  /*pokemons : Pokemon[] = [
    {id: 1, name: "picachu"},
    {id: 2, name: "bulbizare"}
  ];*/


  filterBrands(event) {
    this.filteredPokemon = [];
    for(let i = 0; i < this.pokemons.length; i++) {
        let brand = this.pokemons[i];
        if(brand.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredPokemon.push(brand);
        }
    }
}

selectPokemon(poke : Pokemon[]) {
  //this.Pok.add({id: 'info', summary: 'Car Selected', detail: 'Vin:' });
}


  /*go(){
    this.done = true;
    //console.log(this.selectedValue.toString());
    this.choix = this.selectedValue.name;
    //console.log(this.choix);

  }*/

  constructor(public recup: HttpService) { }

  ngOnInit() {
    this.recup.getPokemons();
    //console.log(this.pokemons)
  }

}

