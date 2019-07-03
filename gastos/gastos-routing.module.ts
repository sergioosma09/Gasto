import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { CreacionComponent } from './creacion/creacion.component';
import { DetalleComponent } from './detalle/detalle.component';


const routes: Routes = [
  {path: '', redirectTo:'creacion', pathMatch:'full'},
  {path: 'listado',component:ListadoComponent},
  {path: 'creacion',component:CreacionComponent},
  {path: 'detalle',component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastosRoutingModule { }
