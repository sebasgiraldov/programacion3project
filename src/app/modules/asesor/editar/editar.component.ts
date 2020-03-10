import { Component, OnInit } from '@angular/core';
import { tipoInmModel } from 'src/app/models/tipoInm.model';
import { CrearService } from 'src/app/services/crear.service';
import { ciudadesModel } from 'src/app/models/ciudades.model';
import { ProductModel } from 'src/app/models/product.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from 'src/app/services/product.service';

declare let initMaterializeSelect : any;

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  fgValidation : FormGroup;

  constructor(private route: ActivatedRoute,private fb: FormBuilder,private creService: CrearService,
    private pdtService: ProductService, private router: Router) { }

  asesor = JSON.parse(localStorage.getItem("activeUser"))
 product : ProductModel;
 categoria:String;
 ciudad :String ;
 tipo : String;
 tel:String;
 name :String;
 cate :String;
 price :Number;
 tip :String;
 ciud :String;
 dir:String;
 ima :String;



  ngOnInit() {
    this.fgValidationBuilder();
    this.traer();
    this.getProductInformation();
  }
  tipos:tipoInmModel[] = [];
  ciudades: ciudadesModel[]= [];
 
  getProductInformation():void{
    let id = this.route.snapshot.params["id"];
    this.pdtService.getProductById(id).subscribe(item =>{
      this.product = item;
      this.tel= this.product.telefono;
      this.name = this.product.name;
      this.cate = this.product.category;
      this.price = this.product.price;
      this.tip = this.product.tipo;
      this.ciud =  this.product.ciudad;
      this.dir =  this.product.direccion;
      this.ima =  this.product.image;
    })
  }

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
      telefono:[''],
      nombre:[''],
      aggby: [this.asesor.id],
      category: [''],
      precio:[''],
      ciudad: [''],
      tipo: [''],
      direccion:[''],
      imagen :['']
      
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
      if (this.fg.nombre.value != ''){
        this.name = this.fg.nombre.value;
      }
      if (this.fg.telefono.value != ''){
        this.tel = this.fg.telefono.value;
      }
      if (this.fg.imagen.value != ''){
        this.ima = this.fg.imagen.value;
      }
      if (this.fg.precio.value != ''){
        this.price = this.fg.precio.value;
      }
      if (this.fg.direccion.value != ''){
        this.dir = this.fg.direccion.value;
      }
      console.log(this.product.id,this.tel, this.name,this.asesor.id,
        this.cate, this.price, this.tip, this.ciud, this.dir, this.ima)
    this.pdtService.editarProducto(this.product.id,this.tel, this.name,this.asesor.id,
       this.cate, this.price, this.tip, this.ciud, this.dir, this.ima).subscribe(data => {
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
