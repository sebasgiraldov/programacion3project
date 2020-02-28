import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import Swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-add-asesor',
  templateUrl: './add-asesor.component.html',
  styleUrls: ['./add-asesor.component.css']
})
export class AddAsesorComponent implements OnInit {

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
      this.regService.registerAsesor(n , u, e, pEncrypted).subscribe(data => {
        this.emailService.sendEmail(`¡Hola ${n}! Bienvenido a Hogar Colombia, ¡Tú eres nuestro nuevo asesor! - Tus datos de ingreso son: Username: "${e}" // password: "${p}"   
        Por favor Ingrese aquí http://localhost:4200/user/login`,"Registro Hogar Colombia",
        e).subscribe(() => {
         Swal.fire('Logrado!', '', 'success');
         this.router.navigate(['/home']);
         });
          console.log(data)
        }, err => {
          // Entra aquí si el servicio entrega un código http de error EJ: 404, 
          422
          Swal.fire('Error!', 'Este email ya fue registrado.', 'error');
        this.router.navigate(['/home']); }
      );
      
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
