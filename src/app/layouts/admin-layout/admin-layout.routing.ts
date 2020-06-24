import { Routes } from '@angular/router';
import { ProductsComponent } from 'app/pages/products/products.component';
import { CreateComponent } from 'app/pages/products/create/create.component';
import { VariantsComponent } from 'app/pages/variants/variants.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'variants', component: VariantsComponent },
];
