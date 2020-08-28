import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { PurchaseOrdersService } from 'app/services/purchase-orders.service';
import { ProductsListService } from 'app/services/products-list.service';
import { forkJoin, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from 'app/models/products.model';

import {DialogService} from 'primeng/dynamicdialog';
import { WareHouse } from '../../../dialog/warehouse/warehouse.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [DialogService]
})
export class CreateComponent implements OnInit {
  purchaseOrdersForm: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  // options
  purchaseOrdersStatusOptions;
  purchaseOrdersWareHouseOptions;
  purchaseOrdersPaymentStatusOptions;

  // flag
  isLoading: boolean;

  wareHouse: Product[];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private purchaserOrdersService: PurchaseOrdersService,
    private productsService: ProductsListService,
    public dialogService: DialogService
  ) {
    forkJoin(
      of(true).pipe(delay(1000)),
      productsService.getProducts(),
    )
    .subscribe((data) => {
      this.isLoading = data[0];
      this.purchaseOrdersWareHouseOptions = data[1];
    });
  }

  ngOnInit(): void {
    this.initPurchaseOrdersForm();
    of(false).subscribe(val => this.isLoading = val);

    this.purchaseOrdersStatusOptions = [
      { name: 'Waiting' },
      { name: 'Recieved' }
    ];
    this.purchaseOrdersPaymentStatusOptions = [
      { name: 'Paid' },
      { name: 'Unpaid' }
    ];
  }

  editWareHouse(data: Product[]): void {
    this.dialogService.open(WareHouse, {
      header: 'Choose Products',
      width: '70%',
      data: data,
    });
  }

  initPurchaseOrdersForm(): void {
    this.purchaseOrdersForm = this.fb.group({
      purchaseOrdersId: new FormControl('', Validators.required),
      purchaseOrdersSupplier: new FormControl('', Validators.required),
      purchaseOrdersStatus: new FormControl('', Validators.required),
      purchaseOrdersStaff: new FormControl('', Validators.required),
      purchaseOrdersWareHouse: new FormControl('', Validators.required),
      purchaseOrdersPaymentStatus: new FormControl('', Validators.required),
      purchaseOrdersTotalPrice: new FormControl('', Validators.required),
    });
  }

  onSubmit(data: any): void {
    this.submitted = true;
    this.purchaserOrdersService.createPurchaseOrders(this.purchaseOrdersForm.value).subscribe();
    this.messageService.add({
      severity: 'success',
      summary: 'OK',
      detail: 'Lưu thông tin đơn hàng thành công.',
      life: 3000
    });
    this.initPurchaseOrdersForm();
  }

}
