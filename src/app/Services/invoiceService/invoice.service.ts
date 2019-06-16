import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { database } from 'firebase';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  public base_Url="http://localhost:8080/backend/api";
  public invoiceData=[] ;
  public invoiceInfo;
  public i=1;
  public id;
  public time_slots;
  public buyInvoiceInfo;
  public locationData;
 

  constructor(private http:HttpClient, private firebase: AngularFireDatabase) { }

  form:FormGroup=new FormGroup({
    customer_id:new FormControl('',[Validators.required]),
    customer_name:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    quantity:new FormControl('',[Validators.required])
  });

  serviceForm:FormGroup=new FormGroup({

    customer_id:new FormControl('',[Validators.required]),
    customer_name:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
  });

  socialEventForm:FormGroup=new FormGroup({
    customer_id:new FormControl('',[Validators.required]),
    customer_name:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    poligon:new FormControl('',[Validators.required])
  });

  timeSlotsForm:FormGroup=new FormGroup({
    time_slots:new FormControl('',[Validators.required])
  })

  locationForm:FormGroup=new FormGroup({
    location:new FormControl('',[Validators.required])
  })

  poligonForm:FormGroup=new FormGroup({
    polygonCoords:new FormControl('',[Validators.required])
  })


  initializeFormGroup(){
    this.form.setValue({
      'customer_id':null,
      'customer_name':'',
      "invoice_type":"buy invoice",
      'address':'',
      "city":'',
      "date":'',
      "quantity":null
    }),
    this.serviceForm.setValue({
      'customer_id':null,
      'customer_name':'',
      "invoice_type":'',
      'address':'',
      "city":'',
      "date":'',
      "time_slots":null,
      "poligon":null
    }),
    this.socialEventForm.setValue({
      'customer_id':null,
      'customer_name':'',
      "invoice_type":'',
      'address':'',
      "city":'',
      "date":'',
      "time_slots":null
    }),
    this.timeSlotsForm.setValue({
      "time_slots":null
    })
    this.locationForm.setValue({
      "location":null
    }),
    this.poligonForm.setValue({
      "polygonCoords":null
    })
  }

  
  populateForm(invoice:any){
    this.form.setValue(invoice);
  }

  getInvoiceInfo(invoiceInfo:any){
   //  console.log(invoiceInfo);
     this.invoiceData.push(invoiceInfo);
    // console.log(this.invoiceData);
  }

  getTimeSlots(timeSlots:any){
    this.invoiceData.push(timeSlots);
   // console.log(this.invoiceData);
  }
  getDate(date:any){
    this.invoiceData.push(date);
    console.log(this.invoiceData);
  }

  getPoligonCoords(polygonCoords:any){
    this.invoiceData.push(polygonCoords);
  }

  getPickupLocation(location:any){
    this.invoiceData.push(location);
    this.insertInvoice();
  }

  getDelivaryLocation(location:any){
   // console.log(location);
   this.invoiceData.push(location);
  // console.log(this.invoiceData);
   this.insertInvoicesData();
  }

  insertInvoice(){
    console.log(this.invoiceData);
    this.addInvoice(this.invoiceData[0]).subscribe(data=>{
      this.invoiceData[0]=data;
      this.buyInvoiceInfo=this.invoiceData[0];
      this.invoiceData.push(this.buyInvoiceInfo.invoice_id);

      const locationInfo={
        "invoice_id":this.invoiceData[2],
        "location":this.invoiceData[1]
      }

      this.addMapInfo(locationInfo);
    })
  }
  

  insertInvoicesData(){
    console.log(this.invoiceData);
    this.addInvoice(this.invoiceData[0]).subscribe(data=>{
      this.invoiceData[0] = data ;
      this.invoiceInfo=this.invoiceData[0];
      this.invoiceData.push(this.invoiceInfo.invoice_id);
     // console.log(this.invoiceData[3]);

     const timeSlots={
        "date":this.invoiceData[2],
        "invoice_id":this.invoiceData[5],
        "time_slot":this.invoiceData[1]
      } 

      this.addTimeslots(timeSlots).subscribe(data=>{
        this.time_slots=data;
      });
      
      const InvoiceDocument={
        "invoice_id":this.invoiceData[5],
        "polygon_Coords":this.invoiceData[3],
        "pickup_location":this.invoiceData[4]
      }
      this.addMapInfo(InvoiceDocument);
    })
  }

  addInvoice(invoice:any){
    console.log(invoice);
    
    return this.http.post(this.base_Url+"/customer/invoice/send",invoice);
  }

  addTimeslots(timeSlots:any){
    console.log("add time slots are working ");
    console.log(timeSlots);
    return this.http.post(this.base_Url+"/customer/invoice/timeSlots/send",timeSlots);
  }

  addMapInfo(MapInfo:any){
    console.log(MapInfo);
    this.firebase.object('invoices/'+MapInfo.invoice_id).set(MapInfo);
  }

  getInvoices(customer_id:any){
    console.log(customer_id);
    return this.http.get(this.base_Url+"/customer/get/allInvoices/"+customer_id);

  }

  checkTimeSlotsAvalilable(date:any){
    console.log(date);
    return this.http.get(this.base_Url+"/customer/invoice/selectedTimeSlots/"+date);
  }

  getMapInfo(invoiceId: any){
    return this.firebase.object('invoices/'+invoiceId).snapshotChanges()
  }

  getInvoice(invoice_id:any){
    return this.http.get(this.base_Url+"/customer/get/invoice/"+invoice_id);
  }
}
