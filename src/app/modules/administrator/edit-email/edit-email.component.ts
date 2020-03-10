import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearService } from 'src/app/services/crear.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { tipoInmModel } from 'src/app/models/tipoInm.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.component.html',
  styleUrls: ['./edit-email.component.css']
})
export class EditEmailComponent implements OnInit {

  
  fgValidation : FormGroup;
  constructor(private fb: FormBuilder, private regService: UserService, private router: Router) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }
  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      email:['',[Validators.required]],
    });
    console.log(this.fgValidation)
  }



  registerEvent(){
    if(this.fgValidation.invalid){
      Swal.fire("¡Datos Invalidos!", "Ingrese correctamente los datos necesarios.", "error");
    }else{
      this.regService.findById("5e67142c45ef7958e8c0cffb").subscribe(dat =>{
        dat.email = this.fg.email.value;
        this.regService.updateUser(dat).subscribe(da =>{
          this.router.navigate(['/home']);
        })
      })
  }
}

get fg(){
  return this.fgValidation.controls;
  }


  }