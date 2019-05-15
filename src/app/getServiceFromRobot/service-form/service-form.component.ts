import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MapLoaderService } from './map.loader'
declare var google: any;


import { keyframes } from '@angular/animations';
import {GettingInvoiceService} from 'src/app/Services/justGetServices/getting-invoice.service';


@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  public availableSlots=["8.00 AM -9.00 AM","10.00 AM - 11 .00 AM","12.00 PM -2 .00 PM","3.00 PM - 4.00 PM"];
  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=false;

  public selectedTimeSlots=[];
  public firstTimeSlot=false;
  public scecondTimeSlot=false;
  public thirdTimeSlot=false;
  public forthTimeSlot=false;


  ngOnInit() {
  }

  constructor(private getService:GettingInvoiceService) {

  }

  // checking available time slots 

  k=0;

  isClick(){
    if(this.k ==0){
      this.k=(this.k+1);
      return this.k;
    }
    if(this.k ==1){
      this.k=(this.k -1);
      return this.k;
    }
  }

  availableTimeSlots(){
    if(this.k ==1){
      return true;
    }
  }

  // polygon map intergrated

  map: any;
  drawingManager: any;

  center: any = {
    lat:this.lat,
    lng: this.lng
  };

  onMapReady(map) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"]
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);
  }

  reload(){
    window.location.reload();
  }

  // pickup locaion map intergrated

  onClickChooseLocation(event){
    this.lat=event.coords.lat
    this.lng=event.coords.lng
    this.locationChoosen=true
    console.log(this.lat);
    console.log(this.lng);
  }

  // backend codes

}
