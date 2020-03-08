import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { SecurityService } from 'src/app/services/security.service';


@Component({
  selector: 'app-solicitud-inicio',
  templateUrl: './solicitud-inicio.component.html',
  styleUrls: ['./solicitud-inicio.component.css']
})
export class SolicitudInicioComponent implements OnInit {


  constructor(private pdtService: ProductService, private route: ActivatedRoute, 
    private solService: SolicitudService,  private router: Router, private secService: SecurityService) { }

  cliente = JSON.parse(localStorage.getItem("activeUser"));
  product: ProductModel = {
    id: null,
    telefono: null,
    name: null,
    aggregadoby: null,
    category: null,
    price: null,
    tipo: null,
    ciudad: null,
    direccion: null,
    image: null,
    disponible: null,
  }

  ngOnInit() {
    this.getProductInformation();
  }

  getProductInformation():void{
    let id = this.route.snapshot.params["id"];
    this.pdtService.getProductById(id).subscribe(item =>{
      this.product = item;
      let id_inm = this.product.id;
      let id_cr = this.product.aggregadoby;
      let t = this.product.tipo;
      let c = this.product.category;
      let id_cl = this.cliente.id;
      let d = this.product.direccion;
      let ciu = this.product.ciudad
      let valor = this.product.price;
      let f = "18-03-2020";
      let e = 1;
      let fot = this.product.image;
      let disp = this.product.disponible
      console.log("SOLICITUD",id_cr, t, c, id_cl, d, valor, f,e,fot);
      this.solService.solicitar(id_inm, c, t, id_cr, id_cl, d, ciu, valor, f,e,fot, disp).subscribe(data => {
        if(data != null){
          console.log(data);
          this.router.navigate(['/solicitud-list']);
        }
      });
    })
    
  }






}
