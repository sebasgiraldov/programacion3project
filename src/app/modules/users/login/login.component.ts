import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token = '';
  id_userActive: String;

  resolved(captchaResponse: string){
    this.token = captchaResponse;
  }


  fgValidation : FormGroup;

  constructor(private fb: FormBuilder, private secService: SecurityService, private router: Router) { }


  ngOnInit() {
    this.fgValidationBuilder();
  }

  

  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      username:['admin@gmail.com', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.email]],
      password:['1234567890', [Validators.required, Validators.minLength(3), Validators.maxLength(100)] ],
    });
    console.log(this.fgValidation)
  }

  loginEvent(){
    if(this.token == ''){
      Swal.fire('Error!', 'Debe verificar que no eres un robot', 'error');
      return;
    }
    if(this.fgValidation.invalid){
      alert("invalid Data");
    }else{
      let u = this.fg.username.value;
      let p = this.fg.password.value;
      this.secService.saveInfo(u).subscribe(datos =>{
        this.secService.saveLoginInfo(datos);
      });
      this.secService.loginUser(u, p).subscribe(data => {
        if(data != null){
          this.router.navigate(['/home']);
        }

      })
     

    }
  }


  get fg(){
    return this.fgValidation.controls;
  }


  


}
