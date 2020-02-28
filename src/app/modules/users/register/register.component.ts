import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  token = '';
  fgValidation : FormGroup;

  resolved(captchaResponse: string){
    this.token = captchaResponse;
  }

  constructor(private fb: FormBuilder, private regService: RegisterService, private router: Router,
     private emailService: EmailService) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      name:['',[Validators.required]],
      username:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]]
      ,
    });
    console.log(this.fgValidation)
  }



  registerEvent(){
    if(this.token == ''){
      Swal.fire('Error!', 'Debe verificar que no eres un robot', 'error');
      return;
    }
    if(this.fgValidation.invalid){
      Swal.fire("¡Datos Invalidos!", "Ingrese correctamente los datos necesarios.", "error");
    }else{
      let n = this.fg.name.value;
      let u = this.fg.username.value;
      let p = this.fg.password.value;
      let e = this.fg.email.value;
      let pEncrypted = this.encryptPassword(p).toString();
      console.log(pEncrypted)
      this.emailService.sendEmail(`¡Hola ${n}! Bienvenido a Hogar Colombia, ¡Tú registro ha finalizado con exito!`,"Registro Hogar Colombia",
       e).subscribe(() => {
        });
      this.regService.registerUser(1, n, u, e, pEncrypted).subscribe(data => {
        if(data != null){
          console.log(data);
          Swal.fire('Logrado!', 'Revise su correo', 'success');
          this.router.navigate(['user/login']);
        }
      });

     
  
  }

}

get fg(){
  return this.fgValidation.controls;
  }

  encryptPassword(pass: string){
    var hash=CryptoJS.SHA256(pass);
    var encypted= CryptoJS.SHA256(hash);
    return encypted;
  }


  }

