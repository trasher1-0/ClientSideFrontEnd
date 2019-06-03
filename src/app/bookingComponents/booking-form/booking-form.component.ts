import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapLoaderService } from 'src/app/map.loader';
import { AngularFirestore } from '@angular/fire/firestore';
declare var google: any;
import { MatDialog, MatDialogConfig } from '@angular/material';
import {LocationComponent} from 'src/app/bookingComponents/location/location.component';
import { InvoiceService} from 'src/app/Services/invoiceService/invoice.service';
 
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit,AfterViewInit {

  public availableSlots=["8.00 AM -9.00 AM","9.00 AM - 10 .00 AM","10.00 AM -11 .00 AM"];

  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=false;
  public selectedSlots=[];
  public polygonCoords=[];
  public invoice;
  public gardenCoords:any;

  map: any;
  drawingManager: any;
  timeSlots: any[] =[];

  constructor(private dialog:MatDialog,
    private service:InvoiceService) {

}

  ngOnInit() {
  }

  ngAfterViewInit() {
    MapLoaderService.load().then(() => {
      this.drawPolygon();
    })
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
       this.gardenCoords=event.overlay.getPath().getArray();
       let i=0;
      while(i<this.gardenCoords.length){
        this.polygonCoords.push({
          'lat':this.gardenCoords[i].lat(),
         'lng':this.gardenCoords[i].lng()
        });
        i=i+1;
      }
     console.log(this.polygonCoords);
      }
    });
  }
  
  // checking available time slots 
  onCheckboxChange(event){
    if(event.target.checked) {
        this.selectedSlots.push(event.target.value);
    }
     console.log(this.selectedSlots);
  }
  

  onClickChooseLocation(event){
    this.lat=event.coords.lat
    this.lng=event.coords.lng
    this.locationChoosen=true
    console.log(this.lat);
    console.log(this.lng);
   }

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


  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="70%";
    this.dialog.open(LocationComponent,dialogConfig);
  }

  onSubmit(){
    console.log("cliekd");
  // if(this.service.form.valid){
    // console.log(this.service.form.value);
    const invoice={
      'customer_id':3,
      'customer_name':this.service.serviceForm.get('customer_name').value,
      "invoice_type":"Booking Invoice",
      'address':this.service.serviceForm.get('address').value,
      "city":this.service.serviceForm.get('city').value,
      "date":this.service.serviceForm.get('date').value,
      "time_slots":this.selectedSlots,
    }

    const polygon={
     "poligon":this.polygonCoords
    }
  //  console.log(invoice);
    this.service.getInvoiceInfo(invoice);
    this.service.getPoligonCoords(polygon);
     // console.log(data)
    
    this.resetForm();

 //  }
}
resetForm(){
  this.service.serviceForm.reset();
}


}
