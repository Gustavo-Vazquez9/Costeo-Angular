import { Component, Input, OnInit } from '@angular/core';
import { Ingrediente } from '../../interfaces/Ingredientes';

@Component({
  selector: 'app-costeo-muestra',
  templateUrl: './costeo-muestra.component.html',
  styleUrls: ['./costeo-muestra.component.css']
})
export class CosteoMuestraComponent{
  @Input() ingredientes: Ingrediente[] = [];
  seleccion(evento:string){
    console.log(evento);
  }
  inputCantidad(evento: string){
    console.log(evento);
  }
}
