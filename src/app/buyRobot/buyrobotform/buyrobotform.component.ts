import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { BuyInvoiceService} from 'src/app/Services/BuyingServices/buy-invoice.service';
import {firestore} from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgModel, NgForm } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-buyrobotform',
  templateUrl: './buyrobotform.component.html',
  styleUrls: ['./buyrobotform.component.css']
})
export class BuyrobotformComponent implements OnInit {

  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=false;

  constructor(private buyInvoice : BuyInvoiceService,
              private fireStore: AngularFirestore,
              private toster:ToastrService ) {}

  

  ngOnInit() {
  }
 
  onClickChooseLocation(event){
    this.lat=event.coords.lat
    this.lng=event.coords.lng
    this.locationChoosen=true
    console.log(event.coords.lat)
    console.log(event.coords.lng)
   }

   reload(){
    window.location.reload();
   }

   resetForm(form ? : NgForm){
     if(form != null ){
       form.resetForm();
     }
     this.buyInvoice.BuyingInvoice={
       id:null,
       customer_id :null,
       invoice_id :null,
       customer_name :'',
       address : '',
       city :'',
       quantity :null,
       date : '',
       pickupLocation:null
     }
   }

   onSubmit(form){
     let data=form.value;
     data["pickupLocation"]={"lat":this.lat , "lng":this.lng};
     this.fireStore.collection("buyingInvoices").add(data);
     this.resetForm(form);
     this.toster.success("Trasher Buying Invoice", "Submited Sucessfully !");
   }

}
