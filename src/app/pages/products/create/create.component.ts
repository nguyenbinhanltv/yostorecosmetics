import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ProductsListService } from 'app/services/products-list.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  productFrom: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private productsService: ProductsListService
  ) {}

  ngOnInit() {
    this.productFrom = this.fb.group({
      productName: new FormControl('', Validators.required),
      productId: new FormControl('', Validators.required),
      productBarCode: new FormControl('', Validators.required),
      productRetailPrice: new FormControl('', Validators.required),
      productWholesalePrice: new FormControl('', Validators.required),
      productStockPrice: new FormControl('', Validators.required),
      productType: new FormControl('', Validators.required),
      productMark: new FormControl('', Validators.required),
      productWeight: new FormControl('', Validators.required),
      productUnit: new FormControl('', Validators.required),
      productOrigin: new FormControl('', Validators.required),
    });
  }

  onSubmit(data: any) {
    this.submitted = true;
    this.productsService.createProduct(this.productFrom.value).subscribe();
    this.messageService.add({
      severity: 'success',
      summary: 'OK',
      detail: 'Lưu thông tin sản phẩm thành công.',
      life: 3000
    });
  }

  calPrices() {}
}
