import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Router } from '@angular/router';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { UserModel } from 'src/app/models/user.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CrearService } from 'src/app/services/crear.service';
import { tipoInmModel } from 'src/app/models/tipoInm.model';
import { ciudadesModel } from 'src/app/models/ciudades.model';

declare var openConfirmationModal: any;
declare var openImagenModal: any;
declare var openDetallesModal: any;
declare var openComentariosModal: any;
declare let initMaterializeSelect : any;

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {

  fgValidation : FormGroup;


  constructor(private fb: FormBuilder, private pdtService: ProductService, private solService: SolicitudService,
     private router: Router, private creService: CrearService) { }

  listaSol: SolicitudModel[] = [];
  solicitudes: SolicitudModel[] = [];
  list: boolean = false;
  codeToRemove: String;
  modal: boolean =false;
  foto: String;
  id_detalles: String;
  solicitud: SolicitudModel;
  asesores: UserModel[]=[];
  categoria:String;
  ciudad :String ;
  tipo : String;
  


  ngOnInit() {
    this.traer();
    this.fgValidationBuilder();
    this.getAllSolicitudes();
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

  
  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      VarR:['', [Validators.required]],
      HorA:['',[Validators.required]]
    });
  }


  filterEvent(){
    let VentaOArriendo = this.fg.VarR.value;
    let CasaoApto = this.fg.HorA.value;
    if(VentaOArriendo == null || CasaoApto == null){
      alert("Debe seleccionar bien los campos")
    }else{
      this.solicitudes = this.listaSol.filter(x => x.tipo_solicitud == VentaOArriendo && x.tipo_inmueble == CasaoApto)
      console.log("lista filtrada",this.listaSol)
    }
  }

  get fg(){
    return this.fgValidation.controls;
  }


  getAllSolicitudes(): void{
    this.solService.getAllSolicitudes().subscribe(p => {
      this.solicitudes = p;
      this.listaSol =p;
      console.log(this.solicitudes);
      if(this.solicitudes.length > 0){
        this.list = true;
      }else {
        this.list = false;
      }
    });
    this.solService.getAllAsesores().subscribe(p => {
      this.asesores =p.filter(x => x.rol == 2);
      setTimeout(() => {
        initMaterializeSelect();
      }, 300);     })
  }

  getSolicitudesbyId(id: String): void{
    this.solService.getSolicitudesbyId(id).subscribe(p => {
     this.solicitud = p });
  }

  get mostrar(): boolean{
    return this.list;
  }
  get modall(): boolean{
    return this.modal;
  }

  openConfirmation(code: String){
    this.codeToRemove = code;
    this.getSolicitudesbyId(this.codeToRemove)
    openConfirmationModal();
  }

  openImage(foto: String){
    this.foto= foto;
    openImagenModal();
  }

  openDetalles(id: String){
    this.id_detalles= id;
    this.getSolicitudesbyId(this.id_detalles);
    openDetallesModal();
  }

  openComentarios(id: String){
    this.id_detalles= id;
    this.getSolicitudesbyId(this.id_detalles);
    openComentariosModal();
  }
  
  

  editElement(id: String){
    this.solicitud.id_creador = id;
    this.solicitud.estado_solicitud = 2;
    this.solService.editSolicitud(this.solicitud).subscribe(x => {
      this.getAllSolicitudes();
    });
  }

}
