import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CosteoInputComponent } from './components/costeo-input/costeo-input.component';
import { CosteoTableComponent } from './components/costeo-table/costeo-table.component';
import { BuscarIngredienteComponent } from './pages/buscar-ingrediente/buscar-ingrediente.component';



@NgModule({
  declarations: [
    CosteoInputComponent,
    CosteoTableComponent,
    BuscarIngredienteComponent
  ],
  exports:[
    CosteoInputComponent,
    CosteoTableComponent,
    BuscarIngredienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CosteoModule { }
