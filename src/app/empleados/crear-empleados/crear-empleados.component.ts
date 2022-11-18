import { Component, Input, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css']
})
export class CrearEmpleadosComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  @Input() sim:any;
  id:string = "";
  nombre:string = "";
  apellido:string = "";
  dni:string = "";
  sede:string = "";

  ngOnInit(): void {
    this.id = this.sim.id;
    this.nombre = this.sim.nombre;
  }

  addMarca(){
    const val ={
      Nombre: this.nombre,
      Apellido: this.apellido,
      DNI: this.dni,
      Sede: this.sede
    };
    this.service.postEmpleadosList(val).subscribe( res => {
      alert(res.toString());
    });
    window.location.reload()
  }

  updateMarca(){
    const val ={
      id: this.id,
      Nombre: this.nombre,
      Apellido: this.apellido,
      DNI: this.dni,
      Sede: this.sede
    };
    this.service.putEmpleadosList(val).subscribe( res => {
      alert(res.toString());
    });
    window.location.reload()
  }

}
