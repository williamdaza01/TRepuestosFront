import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepuestosComponent } from './repuestos/repuestos.component'
import { ClientesComponent } from './clientes/clientes.component'
import { VeredasComponent } from './veredas/veredas.component'
import { EmpleadosComponent } from './empleados/empleados.component'
import { SedesComponent } from './sedes/sedes.component'

const routes: Routes = [
  {path: 'repuestos', component:RepuestosComponent},
  {path: 'sedes', component:SedesComponent},
  {path: 'empleados', component:EmpleadosComponent},
  {path: 'veredas', component:VeredasComponent},
  {path: 'clientes', component:ClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
