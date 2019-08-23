import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapLoaderService } from 'src/app/map.loader';
import { AngularFirestore } from '@angular/fire/firestore';
declare var google: any;
import { MatDialog, MatDialogConfig } from '@angular/material';
import {InvoiceService} from 'src/app/Services/invoiceService/invoice.service';
import { PickupPointComponent} from 'src/app/socialEventComponents/pickup-point/pickup-point.component';
import { EmailValidator, NgForm, FormsModule } from '@angular/forms';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';
import { keyframes } from '@angular/animations';
import { firestore } from 'firebase';


@Component({
  selector: 'app-just-get-service-form',
  templateUrl: './just-get-service-form.component.html',
  styleUrls: ['./just-get-service-form.component.css']
})
export class JustGetServiceFormComponent implements OnInit,AfterViewInit {
 
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
              private service:InvoiceService,
              private fireStore:AngularFirestore,
              private authService:AuthenticationService) {

  }

  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="70%";
    this.dialog.open(PickupPointComponent,dialogConfig);
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

  ngOnInit() {
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
  
  onSubmit(){
    console.log("cliekd");
    // if(this.service.form.valid){
        const user=this.authService.getLocalSorageData();
        console.log(user.id);
     // console.log("user is  :"+user);
     const invoice={
       'customer_id':user.id,
       'customer_name':this.service.socialEventForm.get('customer_name').value,
       "invoice_type":"Social Event Invoice",
       'address':this.service.socialEventForm.get('address').value,
       "city":this.service.socialEventForm.get('city').value,
       "date":this.service.socialEventForm.get('date').value,
     }
  
   //  console.log(invoice);
   this.service.getInvoiceInfo(invoice);
   this.service.getTimeSlots(this.selectedSlots);
   this.service.getDate(this.service.socialEventForm.get('date').value);
   this.service.getPoligonCoords(this.polygonCoords);
   
    // console.log(data)
   
     this.resetForm();

  //  }
 }
 resetForm(){
   this.service.socialEventForm.reset();
 }

}
