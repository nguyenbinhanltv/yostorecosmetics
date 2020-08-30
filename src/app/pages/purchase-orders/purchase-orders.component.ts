import { Component, OnInit } from '@angular/core';
import { of, forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PurchaseOrdersService } from 'app/services/purchase-orders.service';
import { Product } from 'app/models/products.model';
import { PurchaseOrders } from 'app/models/purchase-orders.model';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css'],
})
export class PurchaseOrdersComponent implements OnInit {
  purchaseOrders: PurchaseOrders[];

  isLoading: boolean;

  // Products dialog
  productDialog: boolean;
  products: Product[];

  // PurchaseOrders dialog
  purchaseOrdersDialog: boolean;
  submitted: boolean;
  purchaseOrder: any;

  // Options
  purchaseOrdersStatusOptions;
  purchaseOrdersPaymentStatusOptions;


  constructor(
    private purchaseOrdersService: PurchaseOrdersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
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

    this.purchaseOrdersStatusOptions = [
      { name: 'Waiting' },
      { name: 'Recieved' },
    ];
    this.purchaseOrdersPaymentStatusOptions = [
      { name: 'Paid' },
      { name: 'Unpaid' },
    ];
  }

  editProducts(products: Product[]): void {
    this.products = [ ...products];
    this.productDialog = true;
  }

  hideDialog(): void {
    this.purchaseOrdersDialog = false;
    this.submitted = false;
  }

  deletePurchaseOrders(purchaseOrders: PurchaseOrders): void {
    this.confirmationService.confirm({
      message: 'Bạn chắc có muốn xóa đơn hàng ' + purchaseOrders.purchaseOrdersId + '?',
      header: 'Cảnh báo',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.purchaseOrdersService.deletePurchaseOrders(purchaseOrders.purchaseOrdersId).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'OK',
          detail: 'Đã xóa đơn hàng',
          life: 3000,
        });
      }
    });

    this.purchaseOrder = null;
  }

  editPurchaseOrders(purchaseOrders: PurchaseOrders): void {
    this.purchaseOrder = {
      purchaseOrdersId: purchaseOrders.purchaseOrdersId,
      purchaseOrdersStatus: [{
        'name': purchaseOrders.purchaseOrdersStatus
      }],
      purchaseOrdersPaymentStatus: [{
        'name': purchaseOrders.purchaseOrdersPaymentStatus
      }],
    };
    console.log(this.purchaseOrder);
    this.purchaseOrdersDialog = true;
  }

  savePurchaseOrders(pruchaseOrders: PurchaseOrders): void {
    this.submitted = true;

    if (pruchaseOrders.purchaseOrdersId) {
      this.purchaseOrdersService.updatePurchaseOrders(pruchaseOrders.purchaseOrdersId, pruchaseOrders).subscribe();
    }

    this.messageService.add({
      severity: 'success',
      summary: 'OK',
      detail: 'Cật nhật đơn hàng thành công.',
      life: 3000,
    });
    this.purchaseOrdersDialog = false;
    this.purchaseOrder = null;
  }

}
