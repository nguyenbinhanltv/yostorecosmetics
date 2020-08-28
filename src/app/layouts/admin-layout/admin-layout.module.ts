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
import { PrimengModule } from 'app/primeng/primeng.module';
import { OptionsService } from 'app/services/options.service';
import { ProductsListService } from 'app/services/products-list.service';
import { WareHouse } from 'app/dialog/warehouse/warehouse.component';


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
    WareHouse
  ],
  providers: [
    MessageService,
    ConfirmationService,
    OptionsService,
    ProductsListService,
  ],
  entryComponents: [WareHouse]
})

export class AdminLayoutModule {}
