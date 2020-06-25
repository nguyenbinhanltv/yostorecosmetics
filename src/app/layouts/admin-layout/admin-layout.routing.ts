import { Routes } from '@angular/router';
import { ProductsComponent } from 'app/pages/products/products.component';
import { CreateComponent as ProductsCreateComponent } from 'app/pages/products/create/create.component';
import { CreateComponent as PurchaseOrdersCreateComponent } from 'app/pages/purchase-orders/create/create.component';
import { VariantsComponent } from 'app/pages/variants/variants.component';
import { PurchaseOrdersComponent } from 'app/pages/purchase-orders/purchase-orders.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/create', component: ProductsCreateComponent },
  { path: 'variants', component: VariantsComponent },
  { path: 'purchase-orders', component: PurchaseOrdersComponent },
  { path: 'purchase-orders/create', component: PurchaseOrdersCreateComponent }
];
