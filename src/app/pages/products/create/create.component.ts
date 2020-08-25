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
import { OptionsService } from 'app/services/options.service';

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

  // options
  productMarkOptions: object;
  productOriginOptions: object;
  productUnitOptions: object;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private productsService: ProductsListService,
    private optionsService: OptionsService
  ) {
    this.optionsService.getOption('productMark').subscribe(data => this.productMarkOptions = this.transformOptions(data));
    this.optionsService.getOption('productOrigin').subscribe(data => this.productOriginOptions = this.transformOptions(data));
    this.optionsService.getOption('productUnit').subscribe(data => this.productUnitOptions = this.transformOptions(data));
  }

  ngOnInit(): void {
    this.initProductForm();
  }

  initProductForm(): void {
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

  transformOptions(options): Array<any> {
    const data = [];
    for (const [key, value] of Object.entries(options)) {
      data.push({
        name: key,
        value: key
      });
    }
    console.log(data);
    return data;
  }

  onSubmit(data: any): void {
    this.submitted = true;
    this.productsService.createProduct(this.productFrom.value).subscribe();
    this.messageService.add({
      severity: 'success',
      summary: 'OK',
      detail: 'Lưu thông tin sản phẩm thành công.',
      life: 3000
    });
    this.initProductForm();
  }

  calPrices() {}
}
