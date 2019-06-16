import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {InvoiceService} from 'src/app/Services/invoiceService/invoice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=false;

  constructor(public dialogRef : MatDialogRef<LocationComponent>,
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
   // window.location.reload();
    this.toster.success("","Successfully Submited !");
    this._router.navigate(['customer/dashboad']);
  }


}
