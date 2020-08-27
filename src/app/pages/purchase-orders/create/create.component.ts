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

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
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

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private purchaserOrdersService: PurchaseOrdersService
  ) { }

  ngOnInit(): void {
    this.initPurchaseOrdersForm();

    this.purchaseOrdersStatusOptions = [
      { name: 'Waiting' },
      { name: 'Recieved' }
    ];
    this.purchaseOrdersPaymentStatusOptions = [
      { name: 'Paid' },
      { name: 'Unpaid' }
    ];
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
