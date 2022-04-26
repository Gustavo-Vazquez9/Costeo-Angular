import { Component, Input, OnInit } from '@angular/core';
import { Ingrediente } from '../../interfaces/Ingredientes';
import { CosteoService } from '../../services/costeo.service';

@Component({
  selector: 'app-costeo-table',
  templateUrl: './costeo-table.component.html',
  styleUrls: ['./costeo-table.component.css']
})
export class CosteoTableComponent{
  @Input() ingredientes: Ingrediente[] = [];
  constructor() { }

}
