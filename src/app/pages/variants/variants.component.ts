import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.css']
})
export class VariantsComponent implements OnInit {
  cars = [];

  constructor() { }

  ngOnInit(): void {
  }

}
