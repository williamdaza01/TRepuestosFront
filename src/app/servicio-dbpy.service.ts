import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDbpyService {
  readonly APIurl = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  getRepuestosList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/repuestos');
  }

  postRepuestosList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + '/repuestos/',val);
  }

  putRepuestosList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `/repuestos/${val.id}` , val);
  }
  deleteRepuestosList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/repuestos/' + val);
  }

  getMarcasList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/marcas');
  }

  postMarcasList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + '/marcas/',val);
  }

  putMarcasList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `/marcas/${val.id}` , val);
  }

  deleteMarcasList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/marcas/' + val);
  }

  getModelosList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/modelos');
  }

  postModelosList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + '/modelos/',val);
  }

  putModelosList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `/modelos/${val.id}` , val);
  }

  deleteModelosList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/modelos/' + val);
  }

  getContratistasList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/contratistas');
  }

  getSedesList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/sedes');
  }

  postSedesList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + '/sedes/',val);
  }

  putSedesList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `/sedes/${val.id}` , val);
  }

  deleteSedesList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/sedes/' + val);
  }

  getClientesList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/clientes');
  }

  postClientesList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + '/Clientes/',val);
  }

  putClientesList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `/Clientes/${val.id}` , val);
  }

  deleteClientesList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/Clientes/' + val);
  }

  getEmpleadosList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/empleados');
  }

  postEmpleadosList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + '/Empleados/',val);
  }

  putEmpleadosList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `/Empleados/${val.id}` , val);
  }

  deleteEmpleadosList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/Empleados/' + val);
  }

  getProveedoresList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/Proveedores');
  }

  postProveedoresList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + '/Proveedores/',val);
  }

  putProveedoresList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `/Proveedores/${val.id}` , val);
  }

  deleteProveedoresList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/Proveedores/' + val);
  }
}
