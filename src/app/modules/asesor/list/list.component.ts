import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { Router } from '@angular/router';

declare var openConfirmationModal: any;
declare var openConfirmationModal2: any;
declare var openImagenModal: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private pdtService: ProductService, private router: Router) { }

  asesor = JSON.parse(localStorage.getItem("activeUser"));
  
 
  listaProductos: ProductModel[] = [];
  productos: ProductModel[] = [];
  list: boolean = false;
  codeToRemove: String;
  modal: boolean =false;
  foto: String;

  producto: ProductModel;

  ngOnInit() {
    this.getAllproductos();
  }

  getProductos(): void{
    this.pdtService.getProductosById(this.asesor.id).subscribe(p => {
        this.listaProductos = p; 
      
    });
  }

  getAllproductos(): void{
    this.pdtService.getAllProducts().subscribe(p => {
      this.productos = p.filter(x => x.aggregadoby == this.asesor.id);
      console.log(this.productos);
      if(this.productos.length > 0){
        this.list = true;
      }else {
        this.list = false;
      }
    });
  }

  getproductosbyId(id: string): void{
    this.pdtService.getProductById(id).subscribe(p => {
     this.producto = p });
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
    openConfirmationModal2();
  }

  openImage(foto: String){
    this.foto= foto;
    openImagenModal();
  }

  removeElement(){
    this.pdtService.deleteProducto(this.codeToRemove).subscribe(x => {
      this.getAllproductos();
    });
    
  }}

