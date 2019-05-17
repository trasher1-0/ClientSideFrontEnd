import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-invoice-view',
  templateUrl: './service-invoice-view.component.html',
  styleUrls: ['./service-invoice-view.component.css']
})
export class ServiceInvoiceViewComponent implements OnInit {

  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=true;

  constructor() { }

  ngOnInit() {
  }

}
