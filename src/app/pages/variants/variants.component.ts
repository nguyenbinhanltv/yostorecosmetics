import { Component, OnInit } from '@angular/core';
import { ProductsListService } from 'app/services/products-list.service';
import { Product } from 'app/models/products.model';

@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.css']
})
export class VariantsComponent implements OnInit {
  products: Product[];

  constructor(
    private productsService: ProductsListService
  ) {
    this.productsService.getProducts().subscribe(data => this.products = data);
  }

  ngOnInit(): void {
  }

}
