import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../../product.module';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CrearService } from 'src/app/services/crear.service';
import { tipoInmModel } from 'src/app/models/tipoInm.model';
import { ciudadesModel } from 'src/app/models/ciudades.model';


declare let initMaterializeSelect : any;

@Component({
  selector: 'app-produt-home',
  templateUrl: './produt-home.component.html',
  styleUrls: ['./produt-home.component.css']
})
export class ProdutHomeComponent implements OnInit {

  fgValidation : FormGroup;


  constructor(private fb: FormBuilder, private pdtService: ProductService,
     private spinnerService: NgxSpinnerService, private creService: CrearService) { }

  productList: ProductModel[] = [];
  listaVenta: ProductModel[] = [];
  listaRenta: ProductModel[] = [];
  listaFiltrada: ProductModel[]= [];
  cliente = JSON.parse(localStorage.getItem("activeUser"));
  sessionCliente = false;
  categoria:String;
  ciudad :String ;
  tipo : String;
  ver: boolean = true;
 

  ngOnInit() {
    this.traer();
    this.fgValidationBuilder();
    this.getAllProducts();
    this.spinner();
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

ExtraerCiudad(v: String){
  this.ciudad= v;
    }
    
    ExtraerTipo(v: String){
      this.ciudad= v;
        }

  spinner(): void{
    this.spinnerService.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
    }, 1500);
  }

  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      VarR:['', [Validators.required]],
      HorA:['',[Validators.required]],
      ciudad:['',[Validators.required]]
    });
  }


  filterEvent(){
    let VentaOArriendo = this.fg.VarR.value;
    let CasaoApto = this.fg.HorA.value;
    let cit = this.fg.ciudad.value;
    if(VentaOArriendo == null || CasaoApto == null || cit == null){
      alert("Debe seleccionar bien los campos")
    }else{
      this.listaFiltrada = this.productList.filter(x => x.category == VentaOArriendo && x.tipo == CasaoApto && x.ciudad == cit)
      if(this.listaFiltrada == []){
        this.ver = false
      }
      console.log("lista filtrada",this.listaFiltrada)
    }
  }

  get verr(): boolean{
    return this.ver;
  }



  getAllProducts(): void {
    this.pdtService.getAllProducts().subscribe(p => {
      this.productList = p;
      this.listaFiltrada = p;
      this.listaVenta = p.filter(x => x.category == "1" && x.disponible == true);
      this.listaRenta = p.filter(x => x.category == "2" && x.disponible == true);
      if(this.cliente.rol == 1){
        this.sessionCliente = true;
      }
      console.log(this.productList);
    });
    /*for (let p of this.productList){
      console.log("se agrego")
      if(p.category == "Venta"){
        this.listaVenta.push(p);
      }
      if(p.category == "Renta"){
        this.listaRenta.push(p);
      }
      if(p.category != "Venta" && p.category != "Renta"){
        alert("categoria invalida");
      }*/
  }

  
  get fg(){
    return this.fgValidation.controls;
  }
}
