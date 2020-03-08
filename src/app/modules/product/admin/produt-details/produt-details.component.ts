import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produt-details',
  templateUrl: './produt-details.component.html',
  styleUrls: ['./produt-details.component.css']
})
export class ProdutDetailsComponent implements OnInit {

  constructor(private pdtService: ProductService, private route: ActivatedRoute) { }

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
    })
  }

}
