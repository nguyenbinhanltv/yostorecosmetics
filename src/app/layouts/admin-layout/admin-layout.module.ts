import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes, AdminLayoutRoutingModule } from './admin-layout.routing';

import { ProductsComponent } from 'app/pages/products/products.component';
import { CreateComponent as ProductsCreateComponent } from 'app/pages/products/create/create.component';
import { CreateComponent as PurchaseOrdersCreateComponent } from 'app/pages/purchase-orders/create/create.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { VariantsComponent } from 'app/pages/variants/variants.component';
import { PurchaseOrdersComponent } from 'app/pages/purchase-orders/purchase-orders.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { PrimengModule } from 'app/primeng/primeng.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    AdminLayoutRoutingModule,
    PrimengModule
  ],
  declarations: [
    ProductsComponent,
    ProductsCreateComponent,
    VariantsComponent,
    PurchaseOrdersComponent,
    PurchaseOrdersCreateComponent,
    LoginComponent
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})

export class AdminLayoutModule {}
