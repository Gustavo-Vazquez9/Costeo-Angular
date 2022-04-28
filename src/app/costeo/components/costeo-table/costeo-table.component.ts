import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingrediente } from '../../interfaces/Ingredientes';
import { CosteoService } from '../../services/costeo.service';

@Component({
  selector: 'app-costeo-table',
  templateUrl: './costeo-table.component.html',
  styleUrls: ['./costeo-table.component.css']
})
export class CosteoTableComponent{

  opcionSeleccionado: string = '';
  cantidadTexto: string = '';
  ingredientes: Ingrediente[] = [];
  @Output() onSeleccion : EventEmitter<string> = new EventEmitter();
  @Output() onCantidad : EventEmitter<string> = new EventEmitter();
  constructor(private costeoService: CosteoService) {
    this.costeoService.mostrarIngrediente()
    .subscribe((respuesta)=>{
        this.ingredientes = respuesta;
    });
  }

  buscar(evento : string){
    this.costeoService.buscarIngrediente(evento)
    .subscribe((respuesta)=>{
      this.ingredientes=respuesta;
    });
  }
  agregar(){
    this.onCantidad.emit(this.cantidadTexto);
    this.onSeleccion.emit(this.opcionSeleccionado);
  }
}
