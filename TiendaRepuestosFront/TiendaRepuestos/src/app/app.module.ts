import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VerClientesComponent } from './clientes/ver-clientes/ver-clientes.component';
import { VeredasComponent } from './veredas/veredas.component';
import { RepuestosComponent } from './repuestos/repuestos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SedesComponent } from './sedes/sedes.component';
import { VerEmpleadosComponent } from './empleados/ver-empleados/ver-empleados.component';
import { VerRepuestosComponent } from './repuestos/ver-repuestos/ver-repuestos.component';
import { VerVeredasComponent } from './veredas/ver-veredas/ver-veredas.component';
import { VerSedesComponent } from './sedes/ver-sedes/ver-sedes.component';
import { ServicioDbpyService } from './servicio-dbpy.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarcasComponent } from './marcas/marcas.component';
import { VerMarcasComponent } from './marcas/ver-marcas/ver-marcas.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    VerClientesComponent,
    VeredasComponent,
    RepuestosComponent,
    EmpleadosComponent,
    SedesComponent,
    VerEmpleadosComponent,
    VerRepuestosComponent,
    VerVeredasComponent,
    VerSedesComponent,
    MarcasComponent,
    VerMarcasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicioDbpyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
