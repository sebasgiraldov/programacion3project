import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

const base_url: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(`${base_url}Products`);
    //return this.http.get<ProductModel[]>(`${base_url}Products?filter[where][category]=${tipo}`);
  }


  getProductById(productId: String) : Observable<ProductModel>{
    return this.http.get<ProductModel>(`${base_url}Products/${productId}`);
  }

  saveNewProduct(product: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>(`${base_url}Product`, product, 
    {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }
  getProductosById(id: String) : Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(`${base_url}Products/findOne/?filter{where}{id}=${id}`);
    
  }

  updateProduct(id: String, telefono:String, name: String, aggregadoby:String, category:String, 
    price:Number, tipo:String, ciudad:String, direccion:String, image:String): Observable<ProductModel>{
    return this.http.put<ProductModel>(`${base_url}Products`, {
      id : id,
      telefono :telefono,
      name : name,
      aggregadoby :aggregadoby,
      category:category,
      price:price,
      tipo:tipo,
      ciudad:ciudad,
      direccion:direccion,
      image:image,
      disponible:true
    }, 
    {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  editarProducto(id: String,telefono:String, name: String, aggregadoby:String, category:String, 
    price:Number, tipo:String, ciudad:String, direccion:String, image:String ):Observable<ProductModel> {
    return this.http.put<ProductModel>(`http://localhost:3000/api/Products`, {
      id: id,
      telefono :telefono,
      name : name,
      aggregadoby :aggregadoby,
      category:category,
      price:price,
      tipo:tipo,
      ciudad:ciudad,
      direccion:direccion,
      image:image,
      disponible:true

    }, {headers: new HttpHeaders ({
      "content-type": "application/json"
    })
     })
  }

  deleteProduct(productId: ProductModel): Observable<ProductModel>{
    return this.http.delete<ProductModel>(`${base_url}Product/${productId}`);
  }

  deleteProducto(id: String) :Observable<ProductModel>{
    return this.http.delete<ProductModel>(`http://localhost:3000/api/products/${id}`)
  }
}
