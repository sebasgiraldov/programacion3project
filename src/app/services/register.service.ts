import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user: UserModel = new UserModel();
  userInfo= new BehaviorSubject<UserModel>(new UserModel());
  url: String= "http://localhost:3000/api/Users/";


  constructor(private http: HttpClient) { }



  registerUser(Rol: Number, Name: String, Username: String, Email: String, Pass: String):Observable<UserModel> {

    return this.http.post<UserModel>(`${this.url}`, {
      rol: Rol,
      realm: Name,
      username: Username,
      email: Email,
      password: Pass
    }, {headers: new HttpHeaders ({
      "content-type": "application/json"
    })
     })

  }

  registerAsesor(Name: String, Username: String, Email: String, Pass: String):Observable<UserModel> {

    return this.http.post<UserModel>(`${this.url}`, {
      rol: 2,
      realm: Name,
      username: Username,
      email: Email,
      password: Pass
    }, {headers: new HttpHeaders ({
      "content-type": "application/json"
    })
     })

  }

  
}
