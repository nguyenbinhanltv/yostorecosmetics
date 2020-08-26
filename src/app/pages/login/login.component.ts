import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'app/services/options.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  images: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(
    private optionsService: OptionsService
  ) {}

  ngOnInit(): void {
    this.optionsService.getImages().then(images => this.images = images);
  }
}
