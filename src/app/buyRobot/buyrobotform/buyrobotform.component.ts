import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {firestore} from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgModel, NgForm } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { InvoiceService} from 'src/app/Services/invoiceService/invoice.service';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buyrobotform',
  templateUrl: './buyrobotform.component.html',
  styleUrls: ['./buyrobotform.component.css']
})
export class BuyrobotformComponent implements OnInit {

  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=false;
  public invoice;

  constructor(
              private fireStore: AngularFirestore,
              private toster:ToastrService ,
              private service:InvoiceService,
              private authService:AuthenticationService,
              private _router:Router,
            ) {}

  

  ngOnInit() {
  }
 
  onClickChooseLocation(event){
    this.lat=event.coords.lat
    this.lng=event.coords.lng
    this.locationChoosen=true
    console.log(event.coords.lat)
    console.log(event.coords.lng)
   }

   onSubmit(){
     console.log("cliekd");
   // if(this.service.form.valid){
     // console.log(this.service.form.value);
     // if(this.service.form.valid){
      const user=this.authService.getLocalSorageData();
      console.log(user.id);
   // console.log("user is  :"+user);
      const invoice={
        'customer_id':user.id,
        'customer_name':this.service.form.get('customer_name').value,
        "invoice_type":"Buying Invoice",
        'address':this.service.form.get('address').value,
        "city":this.service.form.get('city').value,
        "date":this.service.form.get('date').value,
        "quantity":parseInt(this.service.form.get('quantity').value)
      }
      const location={
        "lat":this.lat,
        "lng":this.lng
      }
    //  console.log(invoice);
      this.service.getInvoiceInfo(invoice);
      this.service.getPickupLocation(location)
      this.resetForm();

   //  }
  }
  resetForm(){
    this.service.form.reset();
   // window.location.reload();
    this.toster.success("","Successfully Submited !");
    this._router.navigate(['customer/dashboad']);
  }

}
