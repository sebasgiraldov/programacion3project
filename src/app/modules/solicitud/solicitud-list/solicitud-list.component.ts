import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Router } from '@angular/router';
import { SolicitudModel } from 'src/app/models/solicitud.model';

declare var openConfirmationModal: any;
declare var openImagenModal: any;
declare var openDetallesModal: any;
declare var openComentariosModal: any;

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

  constructor(private pdtService: ProductService, private solService: SolicitudService, private router: Router) { }

  cliente = JSON.parse(localStorage.getItem("activeUser"));
  
 
  listaSol: SolicitudModel[] = [];
  solicitudes: SolicitudModel[] = [];
  list: boolean = false;
  codeToRemove: String;
  modal: boolean =false;
  foto: String;
  id_detalles: String;
  solicitud: SolicitudModel;
  
  objectKeys (objeto: SolicitudModel) {
    const keys = Object.keys(objeto);
    console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"
    return keys;
 }

  ngOnInit() {
    this.getAllSolicitudes();
  }

  getSolicitudes(): void{
    this.solService.getSolicitudesById(this.cliente.id).subscribe(p => {
        this.listaSol = p; 
      
    });
  }

  getAllSolicitudes(): void{
    this.solService.getAllSolicitudes().subscribe(p => {
      this.solicitudes = p.filter(x => x.id_cliente == this.cliente.id);
      console.log(this.solicitudes);
      if(this.solicitudes.length > 0){
        this.list = true;
      }else {
        this.list = false;
      }
    });
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
  
  

  removeElement(){
    this.solService.deleteSolicitud(this.codeToRemove).subscribe(x => {
      this.getAllSolicitudes();
    });
  }

}
