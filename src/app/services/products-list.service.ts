import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Product } from 'app/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  constructor(
    public http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>(environment.apiEndPoint + 'products');
  }

  createProduct(product: any) {
    return this.http.post<any>(environment.apiEndPoint + 'products', product);
  }
}
