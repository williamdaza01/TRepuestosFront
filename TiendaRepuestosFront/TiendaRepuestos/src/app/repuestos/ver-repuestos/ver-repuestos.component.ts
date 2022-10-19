import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-repuestos',
  templateUrl: './ver-repuestos.component.html',
  styleUrls: ['./ver-repuestos.component.css']
})
export class VerRepuestosComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  arbolesList:any = [];

  ngOnInit(): void {
    this.verArboles();
  }


  verArboles(){
    this.service.getArbolesList().subscribe( data => {
      this.arbolesList = data;
    })
  }

  getId(value:string){
    let id;
    id = value;
    return id;
  }
}
