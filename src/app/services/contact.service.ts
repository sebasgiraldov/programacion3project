import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailModel } from '../models/email.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  user: EmailModel = new EmailModel();
  userInfo= new BehaviorSubject<EmailModel>(new EmailModel());
  url: String= "http://localhost:3000/api/Categories";

  constructor(private http: HttpClient) { }
  

  obtenerEmail():Observable<UserModel>{
    return this.http.get<UserModel>(`http://localhost:3000/api/Users/5e67142c45ef7958e8c0cffb`);
  }

  enviarEmail(nombre: string, mensaje: String, asunto: String, Email: String, reci:String):Observable<EmailModel>{
    let men= `[Nombre del usuario: ${nombre} ]
     //-----------// [Email: ${Email} ] 
    //----------------// [Mensaje: ${mensaje}]`;
    return this.http.get<EmailModel>(
      `${this.url}/sendEmail?message=${men}&subject=${asunto}&emailAdresses=${reci}`
     )
  }


}
