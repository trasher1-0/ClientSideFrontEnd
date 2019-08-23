import { Component, AfterViewInit, OnInit } from '@angular/core';
import { EmailValidator, NgForm, FormsModule } from '@angular/forms';
import { MapLoaderService } from 'src/app/map.loader';
import { AngularFirestore } from '@angular/fire/firestore';
declare var google: any;
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PickupLocationComponent } from 'src/app/getServiceFromRobot/pickup-location/pickup-location.component';
import { InvoiceService} from 'src/app/Services/invoiceService/invoice.service';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';

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
  public polygonCoords=[];
  public invoice;
  public gardenCoords:any;
  public selectedDate=this.service.serviceForm.get('date').value;

  public timeSlotsInfo;
  public timeSlotsForParticularDate:any;
  public amount:any;

  map: any;
  drawingManager: any;
  timeSlots: any[] =[];
  public avilableTimeSlot=false;

  public paymentInfo:any;

  public bookingSlots=[];
  public numOfFirstTimeSlotBookings;

  constructor(private dialog:MatDialog,
              private fireStore:AngularFirestore,
              private service:InvoiceService,
              private authService:AuthenticationService) {

  }

  ngOnInit() {
    //this.resetForm();
   // console.log(this.bookingSlots[0]);
  }

  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="60%";
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

  async isClick(){
    // console.log(this.getService.getServiceModel.date)
      if(this.k ==0){
        this.k=(this.k+1);
        this.avilableTimeSlot=await this.availableTimeSlots();
      //  this.numOfFirstTimeSlotBookings=this.timeSlots[0];
      //  console.log("test");
      //  console.log(this.timeSlots[0]);
        return this.k;
      }
      if(this.k ==1){
        this.k=(this.k -1);
        return this.k;
      }
    }
  
    
  availableTimeSlots():any{
    if(this.k ==1){
    console.log("ok");
    this.service.checkTimeSlotsAvalilable(this.service.serviceForm.get('date').value).subscribe(data=>{
        this.timeSlotsForParticularDate=data;
        
    });
   
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
      zoom: 15
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

  // backend codes

  onSubmit(event: Event){
    event.preventDefault();
    console.log("cliekd");
  // if(this.service.form.valid){
      const user=this.authService.getLocalSorageData();
      console.log(user.id);
   // console.log("user is  :"+user);
     const invoice={
       'customer_id':user.id,
       'customer_name':this.service.serviceForm.get('customer_name').value,
       "invoice_type":"Service Invoice",
       'address':this.service.serviceForm.get('address').value,
       "city":this.service.serviceForm.get('city').value,
       "date":this.service.serviceForm.get('date').value,
     }

   //  console.log(invoice);
     this.service.getInvoiceInfo(invoice);
     this.service.getTimeSlots(this.selectedSlots);
     this.service.getDate(this.service.serviceForm.get('date').value);
     this.service.getPoligonCoords(this.polygonCoords);


     this.paymentInfo[0]=this.service.payment.get('address').value,
     this.paymentInfo[1]=this.service.payment.get('city').value,
     this.paymentInfo[2]=this.service.payment.get('amount').value

     this.service.getPaymentData(this.paymentInfo);


     
     
      // console.log(data)
     
     this.resetForm();

  //  }
  }

  resetForm(){
    this.service.serviceForm.reset();
  }

 
}
