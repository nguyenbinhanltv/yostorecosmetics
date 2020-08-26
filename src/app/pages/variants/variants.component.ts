import { Component, OnInit } from '@angular/core';
import { ProductsListService } from 'app/services/products-list.service';
import { Product } from 'app/models/products.model';
import { of, forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.css']
})
export class VariantsComponent implements OnInit {
  products: Product[];

  isLoading: boolean;

  constructor(
    private productsService: ProductsListService
  ) {
    forkJoin(
      of(true).pipe(delay(1000)),
      this.productsService.getProducts(),
    ).subscribe(data => {
      this.isLoading = data[0];
      this.products = data[1];
    });
  }

  ngOnInit(): void {
    of(false).subscribe(val => this.isLoading = val);
  }

}
