import { Component, OnInit, Input } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/products', title: 'Danh sách sản phẩm', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Khách hàng', icon: 'person', class: '' },
  {
    path: '/table-list',
    title: 'Quản lý kho',
    icon: 'house_siding',
    class: '',
  },
  {
    path: '/typography',
    title: 'Nhập hàng',
    icon: 'add_shopping_cart',
    class: '',
  },
  { path: '/icons', title: 'Kiểm hàng', icon: 'shopping_cart', class: '' },
  { path: '/maps', title: 'Chuyển hàng', icon: 'remove_shopping_cart', class: '' },
  {
    path: '/notifications',
    title: 'Điều chỉnh giá vốn',
    icon: 'monetization_on',
    class: '',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  @Input() visibleSidebar: boolean;

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
