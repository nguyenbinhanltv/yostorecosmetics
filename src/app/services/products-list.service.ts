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
    return this.http.get<Product[]>(environment.apiEndPoint + '/products');
  }

  createProduct(product: Product) {
    return this.http.post<Product>(environment.apiEndPoint + '/products', product);
  }

  updateProduct(productId: string, product: Product) {
    return this.http.patch<Product>(environment.apiEndPoint + `/products/${productId}`, product);
  }

  deleteProduct(productId: string) {
    return this.http.delete<Product>(environment.apiEndPoint + `/products/${productId}`);
  }
}
