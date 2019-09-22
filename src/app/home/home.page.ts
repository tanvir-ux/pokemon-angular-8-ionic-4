import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemons:any = [];
  species:any = []

  constructor(private http:HttpClient) {

    this.http.get("https://pokeapi.co/api/v2/pokemon/1").subscribe(data=>{
      console.log(data['species']);
      console.log(data['sprites']);
      this.pokemons.push(data['sprites']);
      this.species.push(data['species']);
    })
  }






}
