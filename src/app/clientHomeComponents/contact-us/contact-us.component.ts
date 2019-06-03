import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  lat: number = 6.9037023;
  lng: number = 79.8576826;
 
  constructor() { }

  ngOnInit() {
  }

  

}
