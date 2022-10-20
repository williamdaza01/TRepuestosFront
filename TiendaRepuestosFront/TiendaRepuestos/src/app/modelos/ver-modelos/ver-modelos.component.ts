import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-modelos',
  templateUrl: './ver-modelos.component.html',
  styleUrls: ['./ver-modelos.component.css']
})
export class VerModelosComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  modelosList:any = [];
  id:number = 0;

  ngOnInit(): void {
    this.verVeredas();
  }

  verVeredas(){
    this.service.getVeredasList().subscribe( data => {
      this.modelosList = data;
    })
  }

  getCity(value:string){
    this.id = Number(value);
    return this.id;
  }


}
