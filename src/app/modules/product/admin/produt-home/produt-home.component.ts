import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../../product.module';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-produt-home',
  templateUrl: './produt-home.component.html',
  styleUrls: ['./produt-home.component.css']
})
export class ProdutHomeComponent implements OnInit {

  constructor(private pdtService: ProductService, private spinnerService: NgxSpinnerService) { }

  productList: ProductModel[] = [];
  listaVenta: ProductModel[] = [];
  listaRenta: ProductModel[] = [];
  cliente = JSON.parse(localStorage.getItem("activeUser"));
  sessionCliente = false;

  ngOnInit() {
    this.getAllProducts();
    this.spinner();
  }

  spinner(): void{
    this.spinnerService.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
    }, 1500);
  }

  getAllProducts(): void {
    this.pdtService.getAllProducts().subscribe(p => {
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
}
