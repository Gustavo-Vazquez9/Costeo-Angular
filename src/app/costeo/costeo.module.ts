import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CosteoInputComponent } from './components/costeo-input/costeo-input.component';
import { CosteoTableComponent } from './components/costeo-table/costeo-table.component';
import { BuscarIngredienteComponent } from './pages/buscar-ingrediente/buscar-ingrediente.component';
import { CosteoMuestraComponent } from './components/costeo-muestra/costeo-muestra.component';



@NgModule({
  declarations: [
    CosteoInputComponent,
    CosteoTableComponent,
    BuscarIngredienteComponent,
    CosteoMuestraComponent
  ],
  exports:[
    CosteoInputComponent,
    CosteoTableComponent,
    BuscarIngredienteComponent,
    CosteoMuestraComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CosteoModule { }
