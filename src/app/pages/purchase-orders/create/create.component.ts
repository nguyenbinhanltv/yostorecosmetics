import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

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
  ) { }

  ngOnInit(): void {
    this.initProductForm();

    this.purchaseOrdersStatusOptions = [
      { name: 'Waiting' },
      { name: 'Recieved' }
    ];
    this.purchaseOrdersPaymentStatusOptions = [
      { name: 'Paid' },
      { name: 'Unpaid' }
    ];
  }

  initProductForm(): void {
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
    this.messageService.add({
      severity: 'success',
      summary: 'OK',
      detail: 'Lưu thông tin sản phẩm thành công.',
      life: 3000
    });
    this.initProductForm();
  }

}
