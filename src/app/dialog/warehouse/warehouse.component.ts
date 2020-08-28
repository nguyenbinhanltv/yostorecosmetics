import {Component, Input} from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { Product } from 'app/models/products.model';

@Component({
    templateUrl: './warehouse.component.html',
})

export class WareHouse {
    @Input() warehouse: Product[];

    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ) {}
}
