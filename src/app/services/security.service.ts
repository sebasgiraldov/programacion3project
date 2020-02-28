import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {


  user: UserModel = new UserModel();
  userInfo= new BehaviorSubject<UserModel>(new UserModel());
  url: String= "http://localhost:3000/api/Users/";
  urld: String= "http://localhost:3000/api/InSessions";

  constructor(private http: HttpClient) {
    this.verifyUserInSession();
   }


  verifyUserInSession(){
    let session = localStorage.getItem("activeUser");
    if(session != undefined){
        this.userInfo.next(JSON.parse(session));
      }
  }
  

  getUserInfo(){
    return this.userInfo.asObservable();
  }


  loginUser(username: String, pass: String):Observable<UserModel> {
  let pEncrypted = this.encryptPassword(pass).toString();
  console.log(pEncrypted)
    return this.http.post<UserModel>(`${this.url}login?include=User`, {
      email: username,
      password: pEncrypted
    }, {headers: new HttpHeaders ({
      "content-type": "application/json"
    })
     })

  }


  saveInfo(email:string):Observable<UserModel>{
    let filter = JSON.stringify({"where":{'email': email }});
    return this.http.get<UserModel>(`${this.url}findOne/?filter[where][email]=${email}`,{
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  saveLoginInfo(user: UserModel){
    user.isLogged = true;
      this.userInfo.next(user);
      localStorage.setItem("activeUser", JSON.stringify(user));
  }


  logoutUser(){
    localStorage.removeItem("activeUser");
    this.userInfo.next(new UserModel());
    
  }

  isActiveSession(){
    return this.userInfo.getValue().isLogged;
  }

  encryptPassword(pass: String){
    var hash=CryptoJS.SHA256(pass);
    var encypted= CryptoJS.SHA256(hash);
    return encypted;
  }
  
}
