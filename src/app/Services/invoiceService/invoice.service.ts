import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  public base_Url="http://localhost:8080/backend/api";
  public invoiceData=[] ;
 

  constructor(private http:HttpClient) { }

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
    time_slots:new FormControl('',[Validators.required]),
  });

  socialEventForm:FormGroup=new FormGroup({
    customer_id:new FormControl('',[Validators.required]),
    customer_name:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    time_slots:new FormControl('',[Validators.required]),
    poligon:new FormControl('',[Validators.required])
  });

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
   //  console.log(this.invoiceData);
  }

  getPoligonCoords(polygonCoords:any){
    this.invoiceData.push(polygonCoords);
  }

  getDelivaryLocation(location:any){
   // console.log(location);
   this.invoiceData.push(location);
  // console.log(this.invoiceData);
   this.insertInvoicesData();
  }

  insertInvoicesData(){
    this.addInvoice(this.invoiceData[0]).subscribe(data=>{
      this.invoiceData[0] = data ;
    })
    this.insertMapData();
  }

  insertMapData(){
    const InvoiceDocument={
      "invoice_id":1,
      "polygon_Coords":this.invoiceData[1],
      "pickup_location":this.invoiceData[2]
    }
    this.addMapInfo(InvoiceDocument);
  }


  addInvoice(invoice:any){
    console.log(invoice);
    
    return this.http.post(this.base_Url+"/customer/invoice/send",invoice);
  }

  addMapInfo(MapInfo:any){
    console.log(MapInfo);
    //return this.http.post(<firebase url>,MapInfo);
  }

}
