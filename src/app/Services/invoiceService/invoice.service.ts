import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  public base_Url="http://localhost:8080/backend/api";

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
      "invoice_type":"buy invoice",
      'address':'',
      "city":'',
      "date":'',
      "time_slots":null
    })
  }

  
  populateForm(invoice:any){
    this.form.setValue(invoice);
  }

  addInvoice(invoice:any){
   // console.log(invoice);
    
    return this.http.post(this.base_Url+"/customer/invoice/send",invoice);
  }

}
