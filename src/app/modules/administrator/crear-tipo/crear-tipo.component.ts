import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearService } from 'src/app/services/crear.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { tipoInmModel } from 'src/app/models/tipoInm.model';

@Component({
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styleUrls: ['./crear-tipo.component.css']
})
export class CrearTipoComponent implements OnInit {

  fgValidation : FormGroup;
  inmuebles: tipoInmModel[] = [];
  
  constructor(private fb: FormBuilder, private regService: CrearService, private router: Router) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      name:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      porcentaje:['',[Validators.required]],
    });
    console.log(this.fgValidation)
    this.regService.getAlltipos().subscribe(p =>{
      if(p != null){
        this.inmuebles = p;
      }
    })
  }



  registerEvent(){
    if(this.fgValidation.invalid){
      Swal.fire("¡Datos Invalidos!", "Ingrese correctamente los datos necesarios.", "error");
    }else{
      let n = this.fg.name.value;
      let d = this.fg.descripcion.value;
      let p = this.fg.porcentaje.value
      this.regService.crearTipo(n,d,p).subscribe(data => {
        if(data != null){
          console.log(data);
          Swal.fire('Logrado!', 'Tipo creado', 'success');
          this.router.navigate(['/home']);
        }
      });
  }
}

get fg(){
  return this.fgValidation.controls;
  }


  }


