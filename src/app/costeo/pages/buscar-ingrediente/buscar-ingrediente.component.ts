import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../interfaces/Ingredientes';
import { CosteoService } from '../../services/costeo.service';

@Component({
  selector: 'app-buscar-ingrediente',
  templateUrl: './buscar-ingrediente.component.html',
  styleUrls: ['./buscar-ingrediente.component.css']
})
export class BuscarIngredienteComponent{
  ingredientes: Ingrediente [] = [];
  constructor(private costeoService: CosteoService) {
    this.costeoService.mostrarIngrediente()
    .subscribe((respuesta)=>{
        this.ingredientes = respuesta;
    });
  }

  buscar(evento : string){
    this.costeoService.buscarIngrediente(evento)
    .subscribe((respuesta)=>{
      console.log(respuesta);
      this.ingredientes=respuesta;
    });
  }
}
