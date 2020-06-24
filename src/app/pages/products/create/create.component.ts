import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  productFrom: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.productFrom = this.fb.group({
      productname: new FormControl('', Validators.required),
      productid: new FormControl('', Validators.required),
      barcode: new FormControl('', Validators.required),
      productretailprices: new FormControl('', Validators.required),
      productwholesaleprices: new FormControl('', Validators.required),
      productentryprices: new FormControl('', Validators.required),
      mass: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required),
      producttype: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
    });

  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'Form Submitted',
    });
  }
}
