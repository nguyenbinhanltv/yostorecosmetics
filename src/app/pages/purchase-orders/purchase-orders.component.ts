import { Component, OnInit } from '@angular/core';
import { of, forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css']
})
export class PurchaseOrdersComponent implements OnInit {
  cars = [];

  isLoading: boolean;

  constructor() {
    forkJoin(
      of(true).pipe(delay(1000)),
    ).subscribe(data => {
      this.isLoading = data[0];
    });
  }

  ngOnInit(): void {
    of(false).subscribe(val => this.isLoading = val);
  }

}
