import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {InvoiceService} from 'src/app/Services/invoiceService/invoice.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pickup-point-for-booking',
  templateUrl: './pickup-point-for-booking.component.html',
  styleUrls: ['./pickup-point-for-booking.component.css']
})
export class PickupPointForBookingComponent implements OnInit {

  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=false;

  constructor(public dialogRef : MatDialogRef<PickupPointForBookingComponent>,
              public service:InvoiceService,
              public _router:Router,
              public toster:ToastrService) { 

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

  onSubmit(){
    const location={
      "location":{"lat":this.lat,"lng":this.lng}
    }
    this.service.getDelivaryLocation(location);
    this.dialogRef.close();
    this.toster.success("","Successfully Submited !");
    this._router.navigate(['customer/dashboad']);
  }

}
