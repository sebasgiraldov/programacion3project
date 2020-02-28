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


  getProductById(productId: string) : Observable<ProductModel>{
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

  updateProduct(product: ProductModel): Observable<ProductModel>{
    return this.http.put<ProductModel>(`${base_url}Product`, product, 
    {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  deleteProduct(productId: ProductModel): Observable<ProductModel>{
    return this.http.delete<ProductModel>(`${base_url}Product/${productId}`);
  }
}
