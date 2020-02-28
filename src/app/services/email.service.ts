import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailModel } from '../models/email.model';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

url: String= "http://localhost:3000/api/Categories";

  constructor(private http: HttpClient) { }

  //send email
  sendEmail(mensaje: String, asunto: String, Email: String):Observable<EmailModel>{

    return this.http.get<EmailModel>(
      `${this.url}/sendEmail?message=${mensaje}&subject=${asunto}&emailAdresses=${Email}`
     )
  }


}
