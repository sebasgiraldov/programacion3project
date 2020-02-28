import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearService } from 'src/app/services/crear.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ciudadesModel } from 'src/app/models/ciudades.model';


@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {

    fgValidation : FormGroup;
    citys: ciudadesModel[] = [];
  
    constructor(private fb: FormBuilder, private regService: CrearService, private router: Router) { }
  
    ngOnInit() {
      this.fgValidationBuilder();
    }
  
    fgValidationBuilder(){
      this.fgValidation = this.fb.group({
        name:['',[Validators.required]],
      });
      console.log(this.fgValidation)
        this.regService.getAllCiudades().subscribe(p =>{
      if(p != null){
        this.citys = p;
      }
    })
    }
  
  
  
    registerEvent(){
      if(this.fgValidation.invalid){
        Swal.fire("¡Datos Invalidos!", "Ingrese correctamente los datos necesarios.", "error");
      }else{
        let n = this.fg.name.value;
        this.regService.crearCiudad(n).subscribe(data => {
          if(data != null){
            console.log(data);
            Swal.fire('Logrado!', 'Ciudad creada', 'success');
            this.router.navigate(['/home']);
          }
        });
    }
  
  }


  
  
  get fg(){
    return this.fgValidation.controls;
    }
  

    }
  
  
