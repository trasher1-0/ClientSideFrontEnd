import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {firestore} from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgModel, NgForm } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { InvoiceService} from 'src/app/Services/invoiceService/invoice.service';


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
              private service:InvoiceService) {}

  

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
      const invoice={
        'customer_id':3,
        'customer_name':this.service.form.get('customer_name').value,
        "invoice_type":"Buying Invoice",
        'address':this.service.form.get('address').value,
        "city":this.service.form.get('city').value,
        "date":this.service.form.get('date').value,
        "quantity":parseInt(this.service.form.get('quantity').value)
      }
    //  console.log(invoice);
      this.service.addInvoice(invoice).subscribe(data=>{
        this.invoice=data;
      });
      this.resetForm();

   //  }
  }
  resetForm(){
    this.service.form.reset();
  }

}
