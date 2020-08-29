import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimengModule } from 'app/primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  declarations: [
    SidebarComponent,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class ComponentsModule { }
