import { Injectable } from '@angular/core';
import { SolicitudModel } from '../models/solicitud.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  solicitud: SolicitudModel = new SolicitudModel();
  solicitudInfo= new BehaviorSubject<SolicitudModel>(new SolicitudModel());
  url: String= "http://localhost:3000/api/solicitudes?";
  base_url: String= "http://localhost:3000/api/solicitudes";

  constructor(private http: HttpClient) { }

  
  solicitar(tipo_sol: String, tipo_inm: String, id_creador:String, id_Cliente:String,
    direccion: String, valor: Number, fecha_solicitud:String, estado:Number, foto:String, dispo: Boolean):Observable<SolicitudModel> {
    return this.http.post<SolicitudModel>(`${this.url}`, {
      tipo_solicitud: tipo_sol,
      tipo_inmueble: tipo_inm,
      id_creador: id_creador,
      id_cliente: id_Cliente,
      direccion: direccion,
      valor: valor,
      fecha_solicitud: fecha_solicitud,
      estado_solicitud: estado,
      foto: foto,
      dispo: dispo
    }, {headers: new HttpHeaders ({
      "content-type": "application/json"
    })
     })

  }

  getSolicitudesById(id: string) : Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${this.base_url}/findOne/?filter{where}{id_cliente}=${id}`);
    
  }

  getAllSolicitudes() :Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${this.base_url}`)
  }

  getSolicitudesbyId(id: String) :Observable<SolicitudModel>{
    return this.http.get<SolicitudModel>(`${this.base_url}/${id}`)
  }

  deleteSolicitud(id: String) :Observable<SolicitudModel>{
    return this.http.delete<SolicitudModel>(`http://localhost:3000/api/solicitudes/${id}`)
  }
  
}
