import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  EmpleadosList:any = [];
  Modaltitle:string = "";
  ActivateAddEditSiembra:boolean = false;
  sim:any;

  ngOnInit(): void {
    this.verEmpleados();
  }

  verEmpleados(){
    this.service.getEmpleadosList().subscribe( data => {
      this.EmpleadosList = data;
    })
  }

  addMarca() {
    this.sim ={
      Nombre: 0,
    }
    this.Modaltitle="Agregar Empleado";
    this.ActivateAddEditSiembra=true;
  }

  closeClick(){
    this.ActivateAddEditSiembra=false;
  }

  editMarca(item:any){
    this.sim=item;
    this.Modaltitle = "Editar Empleado";
    this.ActivateAddEditSiembra = true;
  }

  deleteMarca(item:any){
    if(confirm("¿Seguro que desea eliminar el Empleado?")) {
      this.service.deleteEmpleadosList(item.id).subscribe( data => {
        alert(data.toString());
        this.verEmpleados();
      })
    }
    window.location.reload()
  }

}
