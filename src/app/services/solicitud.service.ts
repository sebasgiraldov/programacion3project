import { Injectable } from '@angular/core';
import { SolicitudModel } from '../models/solicitud.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  solicitud: SolicitudModel = new SolicitudModel();
  solicitudInfo= new BehaviorSubject<SolicitudModel>(new SolicitudModel());
  url: String= "http://localhost:3000/api/solicitudes?";
  base_url: String= "http://localhost:3000/api/solicitudes";

  constructor(private http: HttpClient) { }

  
  solicitar(id_inm: String, tipo_sol: String, tipo_inm: String, id_creador:String, id_Cliente:String,
    direccion: String, ciudad: String, valor: Number, fecha_solicitud:String, estado:Number, foto:String, dispo: Boolean):Observable<SolicitudModel> {
    return this.http.post<SolicitudModel>(`${this.url}`, {
      id_propiedad: id_inm,
      tipo_solicitud: tipo_sol,
      tipo_inmueble: tipo_inm,
      id_creador: id_creador,
      id_cliente: id_Cliente,
      direccion: direccion,
      ciudad: ciudad,
      valor: valor,
      fecha_solicitud: fecha_solicitud,
      estado_solicitud: estado,
      foto: foto,
      dispo: dispo,
      comentarios: "No hay comentarios"
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
  
  
 

  editSolicitud(solicitud: SolicitudModel) :Observable<SolicitudModel>{
    return this.http.put<SolicitudModel>(`http://localhost:3000/api/solicitudes?`, {
      id_propiedad: solicitud.id_propiedad,
      id : solicitud.id,
      tipo_solicitud: solicitud.tipo_solicitud,
      tipo_inmueble: solicitud.tipo_inmueble,
      id_creador: solicitud.id_creador,
      id_cliente: solicitud.id_cliente,
      direccion: solicitud.direccion,
      ciudad: solicitud.ciudad,
      valor: solicitud.valor,
      fecha_solicitud: solicitud.fecha_solicitud,
      estado_solicitud: solicitud.estado_solicitud,
      foto: solicitud.foto,
      dispo: solicitud.dispo,
      comentarios: solicitud.comentarios
    },
    {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }
  
  getAllAsesores(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`http://localhost:3000/api/Users/`)
  }
}
