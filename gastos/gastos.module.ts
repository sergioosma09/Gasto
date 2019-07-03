import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CreacionComponent } from './creacion/creacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListadoComponent, DetalleComponent, CreacionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GastosRoutingModule
  ]
})
export class GastosModule { }
