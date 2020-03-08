import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Router } from '@angular/router';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { UserModel } from 'src/app/models/user.model';

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

  constructor(private pdtService: ProductService, private solService: SolicitudService, private router: Router) { }

  listaSol: SolicitudModel[] = [];
  solicitudes: SolicitudModel[] = [];
  list: boolean = false;
  codeToRemove: String;
  modal: boolean =false;
  foto: String;
  id_detalles: String;
  solicitud: SolicitudModel;
  asesores: UserModel[]=[];
  


  ngOnInit() {
    this.getAllSolicitudes();
  }


  getAllSolicitudes(): void{
    this.solService.getAllSolicitudes().subscribe(p => {
      this.solicitudes = p;
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
