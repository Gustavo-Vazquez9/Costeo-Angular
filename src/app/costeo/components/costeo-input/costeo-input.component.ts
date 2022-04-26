import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingrediente } from '../../interfaces/Ingredientes';
import { CosteoService } from '../../services/costeo.service';

@Component({
  selector: 'app-costeo-input',
  templateUrl: './costeo-input.component.html',
  styleUrls: ['./costeo-input.component.css']
})
export class CosteoInputComponent{
  ingredientes: Ingrediente[] = [];
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  texto: string = '';

  constructor(){}

  buscar(){
    this.onEnter.emit(this.texto);
  }
}
