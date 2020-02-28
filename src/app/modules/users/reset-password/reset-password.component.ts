import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { EmailService } from 'src/app/services/email.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

 

  constructor(private userService: UserService, private emailService: EmailService, private router: Router) { }

  token = '';
  email: string = '';

  ngOnInit() {
  }

  sendPassword(){
    if(this.token == ''){
      Swal.fire('Error!', 'Debe verificar que no eres un robot', 'error');
      return;
    }
    this.userService.findByEmail(this.email).subscribe((item) => {
      let pass = Math.random().toString(36).slice(-8);
      let pas = this.encryptPassword(pass).toString();
      item.password = pas;
      this.userService.updateUser(item).subscribe((item) => {
        this.emailService.sendEmail(`Usted pidio un cambio de contraseña<br>Contraseña:${pass}`, 'Recuperar Contraseña', item.email).subscribe(() => {
          Swal.fire('Logrado!', 'La nueva contraseña fue enviada a su correo', 'success').then(() => {
            this.router.navigate(['user/login']);
          });
        });
      });
    }, (erro) => {
      Swal.fire('Error!', 'El correo ingresado no existe', 'error');
    });
    console.log(this.email);
  }

  resolved(captchaResponse: string){
    this.token = captchaResponse;
  }


  encryptPassword(pass: String){
    var hash=CryptoJS.SHA256(pass);
    var encypted= CryptoJS.SHA256(hash);
    return encypted;
  }

 
}
