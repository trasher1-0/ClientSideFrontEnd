import { Component, AfterViewInit, OnInit } from '@angular/core';
import { EmailValidator, NgForm, FormsModule } from '@angular/forms';
import { MapLoaderService } from 'src/app/map.loader';
import { AngularFirestore } from '@angular/fire/firestore';
declare var google: any;
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PickupLocationComponent } from 'src/app/getServiceFromRobot/pickup-location/pickup-location.component';
import { InvoiceService} from 'src/app/Services/invoiceService/invoice.service';

import { keyframes } from '@angular/animations';
import { firestore } from 'firebase';


@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit,AfterViewInit {

  public availableSlots=["8.00 AM -9.00 AM","10.00 AM - 11 .00 AM","12.00 PM -2 .00 PM","3.00 PM - 4.00 PM"];
  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=false;
  public selectedSlots=[];
  public polygonCoords:any;
  public invoice;

  map: any;
  drawingManager: any;
  timeSlots: any[] =[];


  ngOnInit() {
    //this.resetForm();
  }

  constructor(private dialog:MatDialog,
              private fireStore:AngularFirestore,
              private service:InvoiceService) {

  }

  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="70%";
    this.dialog.open(PickupLocationComponent,dialogConfig);
  }

   ngAfterViewInit() {
    MapLoaderService.load().then(() => {
      this.drawPolygon();
    })
  }

  // checking available time slots 
  onCheckboxChange(event){
    if(event.target.checked) {
        this.selectedSlots.push(event.target.value);
    }
     console.log(this.selectedSlots);
  }

  // search available time slots

  k=0;

  isClick(){
   // console.log(this.getService.getServiceModel.date)
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

  // pickup location map intergrated

  onClickChooseLocation(event){
    this.lat=event.coords.lat
    this.lng=event.coords.lng
    this.locationChoosen=true
    console.log(this.lat);
    console.log(this.lng);
  }


  // polygon map intergrated

  drawPolygon() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: this.lat, lng: this.lng },
      zoom: 8
    });

    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
      }
    });

    this.drawingManager.setMap(this.map);
    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {
      // Polygon drawn
      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        //this is the coordinate, you can assign it to a variable or pass into another function.
       // this.polygonCoords.push((event.overlay.getPath().getArray()));
       //alert(this.polygonCoords);
       this.polygonCoords=event.overlay.getPath().getArray();
       console.log(this.polygonCoords);
       //console.log(event);
      }
    });
  }

  // backend codes

  onSubmit(){
    console.log("cliekd");
  // if(this.service.form.valid){
    // console.log(this.service.form.value);
     const invoice={
       'customer_id':3,
       'customer_name':this.service.serviceForm.get('customer_name').value,
       "invoice_type":"Service Invoice",
       'address':this.service.serviceForm.get('address').value,
       "city":this.service.serviceForm.get('city').value,
       "date":this.service.serviceForm.get('date').value,
       "time_slots":this.selectedSlots
     }
   //  console.log(invoice);
     this.service.addInvoice(invoice).subscribe(data=>{
       this.invoice=data;
      // console.log(data)
     });
     this.resetForm();

  //  }
 }
 resetForm(){
   this.service.serviceForm.reset();
 }


}
