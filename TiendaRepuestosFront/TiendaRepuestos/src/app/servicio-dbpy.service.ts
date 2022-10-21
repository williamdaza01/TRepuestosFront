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
  getVeredasList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/veredas');
  }

  getContratistasList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/contratistas');
  }

  /* getSiembrasList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/sedes);
  } */

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
}
