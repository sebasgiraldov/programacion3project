import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Router } from '@angular/router';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { EmailService } from 'src/app/services/email.service';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

declare var openConfirmationModal: any;
declare var openConfirmationModal2: any;
declare var openImagenModal: any;
declare var openAsignarModal: any;
declare var openDetallesModal: any;
declare var openComentariosModal: any;

@Component({
  selector: 'app-soli',
  templateUrl: './soli.component.html',
  styleUrls: ['./soli.component.css']
})
export class SoliComponent implements OnInit {

  
  constructor(private pdtService: ProductService, private solService: SolicitudService, private router: Router, 
    private emailService: EmailService, private uUser: UserService) { }

  cliente = JSON.parse(localStorage.getItem("activeUser"));
  
 
  listaSol: SolicitudModel[] = [];
  solicitudes: SolicitudModel[] = [];
  list: boolean = false;
  codeToRemove: String;
  modal: boolean =false;
  foto: String;
  id_detalles: String;
  solicitud: SolicitudModel;
  comentarios: String = "";
  sol_to_change: SolicitudModel[];
  usuario: UserModel;
  propiedad: ProductModel;
  

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
      this.solicitudes = p.filter(x => x.id_creador == this.cliente.id);
      this.sol_to_change =p;
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

  openConfirmation2(code: String){
    this.codeToRemove = code;
    this.getSolicitudesbyId(this.codeToRemove);
    openConfirmationModal2();
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
  
  openAsignar(id: String){
    this.id_detalles= id;
    this.getSolicitudesbyId(this.id_detalles);
    openAsignarModal();
  }
  

  removeElement(){
    this.solService.deleteSolicitud(this.codeToRemove).subscribe(x => {
      this.getAllSolicitudes();
    });
  }
  
  editElement(x: Number){
    this.solicitud.estado_solicitud = x;
    this.solService.editSolicitud(this.solicitud).subscribe(x => {
      this.getAllSolicitudes();
    });
  }

  editElementt(x: Number){
    let text: String;
    if(x == 3){
      text = "Aceptada";
      
    
      //rechazar todas las solicitudes
      this.sol_to_change = this.sol_to_change.filter(x => x.id_propiedad == this.solicitud.id_propiedad && x.id != this.solicitud.id);
      for (let soli_ch of this.sol_to_change) {
        soli_ch.estado_solicitud = 4;
        this.solService.editSolicitud(soli_ch).subscribe(x => {
        });
       
        this.uUser.findById(soli_ch.id_cliente).subscribe(y => {
        this.usuario = y;
        this.emailService.sendEmail(`¡Hola, lastimosamente tu solicitud fue rechazada!`,"Solicitud - Hogar Colombia",
        this.usuario.email).subscribe(c =>{});
        });
      }
    }
    if(x == 4){
      text = "Rechazada"
    }
    this.solicitud.estado_solicitud = x;
    if(this.comentarios == ""){
      this.comentarios = "No hay comentarios"
    }
      this.solicitud.comentarios = this.comentarios;
    this.solService.editSolicitud(this.solicitud).subscribe(x => {
      this.getAllSolicitudes();
    });
  }
}
