import { Routes } from '@angular/router';
import { ProductsComponent } from 'app/pages/products/products.component';
import { CreateComponent } from 'app/pages/products/create/create.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/create', component: CreateComponent },
];
