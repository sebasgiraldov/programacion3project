import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userInfo: UserModel;
  userLogged: boolean = false;
  userName: String;
  Admin: boolean = false;
  Cliente: boolean = false;
  Asesor: boolean = false;

  subscription: Subscription;
  

  constructor(private secService: SecurityService) { }

  ngOnInit() {
    this.verifyUserSession();
  }

  verifyUserSession(){
    this.subscription = this.secService.getUserInfo().subscribe(user =>{
      this.userInfo = user;
      this.updateInfo();
    })
  }

  


  updateInfo(){
    this.userLogged = this.userInfo.isLogged;
    if(this.userInfo.rol == 3){
      this.Admin = true;
    }if(this.userInfo.rol == 2){
      this.Asesor = true;
    }
    if(this.userInfo.rol == 1){
      this.Cliente = true
    }
    if(this.userLogged == false){
      this.Admin = false;
      this.Asesor = false;
      this.Cliente = false
    }
  }

}
