import { Component, OnInit } from '@angular/core';
import { of, forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PurchaseOrdersService } from 'app/services/purchase-orders.service';
import { Product } from 'app/models/products.model';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css'],
})
export class PurchaseOrdersComponent implements OnInit {
  purchaseOrders = [];

  isLoading: boolean;

  productDialog: boolean;
  submitted: boolean;
  products: Product[];

  constructor(
    private purchaseOrdersService: PurchaseOrdersService
  ) {
    forkJoin(
      of(true).pipe(delay(1000)),
      this.purchaseOrdersService.getAllPurchaseOrders()
    ).subscribe(data => {
      this.isLoading = data[0];
      this.purchaseOrders = data[1];
    });
  }

  ngOnInit(): void {
    of(false).subscribe(val => this.isLoading = val);
  }

  editProducts(products: Product[]): void {
    this.products = [ ...products];
    this.productDialog = true;
  }

  hideDialog(): void {
    this.productDialog = false;
    this.submitted = false;
  }

}
