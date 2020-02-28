import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailModel } from '../models/email.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  user: EmailModel = new EmailModel();
  userInfo= new BehaviorSubject<EmailModel>(new EmailModel());
  url: String= "http://localhost:3000/api/Categories";

  constructor(private http: HttpClient) { }


  enviarEmail(nombre: string, mensaje: String, asunto: String, Email: String):Observable<EmailModel>{
    let men= `[Nombre del usuario: ${nombre} ]
     //-----------// [Email: ${Email} ] 
    //----------------// [Mensaje: ${mensaje}]`;
    return this.http.get<EmailModel>(
      `${this.url}/sendEmail?message=${men}&subject=${asunto}&emailAdresses=hogarcolombia72@gmail.com`
     )
  }


}
