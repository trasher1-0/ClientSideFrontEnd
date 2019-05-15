import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-buyrobotform',
  templateUrl: './buyrobotform.component.html',
  styleUrls: ['./buyrobotform.component.css']
})
export class BuyrobotformComponent implements OnInit {

  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=false;

  constructor() {}

  

  ngOnInit() {
  }
 
  onClickChooseLocation(event){
    this.lat=event.coords.lat
    this.lng=event.coords.lng
    this.locationChoosen=true
    console.log(event.coords.lat)
    console.log(event.coords.lng)
   }

   reload(){
    window.location.reload();
   }

}
