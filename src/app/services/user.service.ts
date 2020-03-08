import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { ResetService } from './reset.service';


const base_url = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private auth: ResetService) { }

  findUser(id: String){
    return this.http.get<UserModel>(`${base_url}Users/${id}`);
  }

  //edit editor
  updateUser(user: UserModel): Observable<UserModel> {
    let id = user.id;
    return this.http.patch<UserModel>(`${base_url}Users/${id}`, user);
  }

     //delete user
     deleteUser(userId: String): Observable<UserModel> {
      return this.http.delete<UserModel>(`${base_url}Users/${userId}`);
    };

    //find by email
  findByEmail(email:string):Observable<UserModel>{
    let filter = JSON.stringify({"where":{'email': email }});
    return this.http.get<UserModel>(`${base_url}Users/findOne/?filter[where][email]=${email}`,{
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  findById(id :String):Observable<UserModel>{
    return this.http.get<UserModel>(`${base_url}Users/findOne/?filter[where][id]=${id}`,{
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }


    //find by rol
  findByRol(rol:number):Observable<UserModel[]>{
    let filter = JSON.stringify({"where":{'rol': rol }});
    return this.http.get<UserModel[]>(`${base_url}Users?filter=${filter}`,{
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

}
