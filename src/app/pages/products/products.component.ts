import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsListService } from 'app/services/products-list.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Product } from 'app/models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  product: Product;
  productDialog: boolean;
  submitted: boolean;

  constructor(
    private productsService: ProductsListService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.productsService.getProducts().subscribe(data => this.products = data);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  hideDialog(): void {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct(product: Product): void {
    this.submitted = true;

    if (product.productId) {
      this.productsService.updateProduct(product.productId, product).subscribe();
    }

    this.messageService.add({
      severity: 'success',
      summary: 'OK',
      detail: 'Cật nhật sản phẩm thành công.',
      life: 3000,
    });
    this.productDialog = false;
    this.product = null;
  }

  editProduct(product: Product): void {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product): void {
    this.confirmationService.confirm({
      message: 'Bạn chắc có muốn xóa sản phẩm ' + product.productName + '?',
      header: 'Cảnh báo',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsService.deleteProduct(product.productId).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'OK',
          detail: 'Đã xóa sản phẩm',
          life: 3000,
        });
      }
    });
    this.product = null;
  }
}
