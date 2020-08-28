import {Component, OnInit} from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { Product } from 'app/models/products.model';

@Component({
    templateUrl: './warehouse.component.html',
    styleUrls: ['./warehouse.component.scss']
})

export class WareHouse implements OnInit {
    dataWareHouse: Product[];

    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ) {}

    ngOnInit(): void {
        this.dataWareHouse = [...this.config.data];
    }

    submitEditAmount(products: Product[]) {
        this.ref.close(products);
    }
}
