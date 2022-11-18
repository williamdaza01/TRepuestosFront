import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  ClientesList:any = [];
  Modaltitle:string = "";
  ActivateAddEditSiembra:boolean = false;
  sim:any;
  
  ngOnInit(): void {
    this.verMunicipios();
  }

  verMunicipios(){
     this.service.getClientesList().subscribe( data => {
      this.ClientesList = data;
    }); 
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
    this.Modaltitle = "Editar Cliente";
    this.ActivateAddEditSiembra = true;
  }

  deleteMarca(item:any){
    if(confirm("¿Seguro que desea eliminar el Cliente?")) {
      this.service.deleteClientesList(item.id).subscribe( data => {
        alert(data.toString());
        this.verMunicipios();
      })
    }
    window.location.reload()
  }
}
