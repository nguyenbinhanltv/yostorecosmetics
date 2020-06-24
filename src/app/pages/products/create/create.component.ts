import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit() {
      this.userform = this.fb.group({
          'firstname': new FormControl('', Validators.required),
          'lastname': new FormControl('', Validators.required),
          'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
          'description': new FormControl('')
      });
  }

  onSubmit(value: string) {
      this.submitted = true;
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'Form Submitted'});
  }

}
