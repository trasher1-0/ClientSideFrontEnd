import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pickup-point',
  templateUrl: './pickup-point.component.html',
  styleUrls: ['./pickup-point.component.css']
})
export class PickupPointComponent implements OnInit {

  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=false;

  constructor(public dialogRef : MatDialogRef<PickupPointComponent>) { 

  }

  ngOnInit() {
  }

  onClickChooseLocation(event){
    this.lat=event.coords.lat
    this.lng=event.coords.lng
    this.locationChoosen=true
    console.log(event.coords.lat)
    console.log(event.coords.lng)
   }

   onClose(){
    this.dialogRef.close();
  }

}
