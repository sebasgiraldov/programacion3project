import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tipoInmModel } from '../models/tipoInm.model';
import { ciudadesModel } from '../models/ciudades.model';



@Injectable({
  providedIn: 'root'
})
export class CrearService {
  url: String= "http://localhost:3000/api/";
  tipo= new BehaviorSubject<tipoInmModel>(new tipoInmModel());
  ciudad= new BehaviorSubject<ciudadesModel>(new ciudadesModel());


  constructor(private http: HttpClient) { }


  crearTipo(nombre:String, descripcion: String, porcentaje: Number):Observable<tipoInmModel> {
    return this.http.post<tipoInmModel>(`${this.url}/tipoInms`, {
      nombre : nombre,
      descripcion : descripcion,
      porcentaje : porcentaje
    }, {headers: new HttpHeaders ({
      "content-type": "application/json"
    })
     })
  }

  crearCiudad(nombre:String):Observable<ciudadesModel> {
    return this.http.post<ciudadesModel>(`${this.url}/ciudadess`, {
      nombre : nombre,
    }, {headers: new HttpHeaders ({
      "content-type": "application/json"
    })
     })
  }

  getAllCiudades(): Observable<ciudadesModel[]>{
    return this.http.get<ciudadesModel[]>(`${this.url}/ciudadess`);
  }

  getAlltipos(): Observable<tipoInmModel[]>{
    return this.http.get<tipoInmModel[]>(`${this.url}/tipoInms`);
  }


}
