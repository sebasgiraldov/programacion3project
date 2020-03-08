import { Component, OnInit } from '@angular/core';
import { tipoInmModel } from 'src/app/models/tipoInm.model';
import { CrearService } from 'src/app/services/crear.service';
import { ciudadesModel } from 'src/app/models/ciudades.model';
import { ProductModel } from 'src/app/models/product.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


declare let initMaterializeSelect : any;

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})

export class CrearComponent implements OnInit {

  fgValidation : FormGroup;

  constructor(private fb: FormBuilder,private creService: CrearService, private router: Router) { }

asesor = JSON.parse(localStorage.getItem("activeUser"))
 product : ProductModel;
 categoria:String;
 ciudad :String ;
 tipo : String;

  ngOnInit() {
    this.fgValidationBuilder();
    this.traer();
  }
  tipos:tipoInmModel[] = [];
  ciudades: ciudadesModel[]= [];
 

traer(){
  this.creService.getAlltipos().subscribe(p =>{

    console.warn(p)
    if(p != null){
      this.tipos = p;
    }
  });
  this.creService.getAllCiudades().subscribe(p =>{
    if(p != null){
      this.ciudades = p;
      setTimeout(() => {
        initMaterializeSelect();
      }, 300); 
    }
  })
}
  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      telefono:['',[Validators.required,Validators.maxLength(11)]],
      nombre:['',[Validators.required,Validators.minLength(4)]],
      aggby: [this.asesor.id],
      category: ['', [Validators.required, Validators.minLength(1)]],
      precio:['', [Validators.required]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['',[Validators.required, Validators.minLength(3)]],
      direccion:[''],
      imagen :['',Validators.required]
      
    });
    console.log(this.fgValidation)
  }
  
  ExtraerCiudad(v: String){
this.ciudad= v;
  }
  
  ExtraerTipo(v: String){
    this.ciudad= v;
      }
  

  registerEvent(){
    if(this.fgValidation.invalid){
      Swal.fire("¡Datos Invalidos!", "Ingrese correctamente los datos necesarios.", "error");
    }else{
      let tel = this.fg.telefono.value;
      let n = this.fg.nombre.value;
      let agg = this.fg.aggby.value;
      let c =  this.fg.category.value;
      let p = this.fg.precio.value;
      let t = this.fg.tipo.value;
      let ct =this.fg.ciudad.value;
      let dir = this.fg.direccion.value;
      let img = this.fg.imagen.value
       
    this.creService.crearProducto(tel,n,agg,c,p,t,ct,dir,img).subscribe(data => {
      if(data != null){
        console.log(data);
        this.router.navigate(['/asesor']);
      }});
  }

}
  get fg(){
    return this.fgValidation.controls;
  }




}
