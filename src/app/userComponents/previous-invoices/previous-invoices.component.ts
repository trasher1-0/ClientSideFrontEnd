import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { Router} from '@angular/router';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';
import {InvoiceService} from 'src/app/Services/invoiceService/invoice.service';

@Component({
  selector: 'app-previous-invoices',
  templateUrl: './previous-invoices.component.html',
  styleUrls: ['./previous-invoices.component.css']
})
export class PreviousInvoicesComponent implements OnInit {

 // AllServiceInvoices : GetServiceModel[];
 
/*
  constructor(private serviceInvoice:GettingInvoiceService,
              private router: Router) { 
      this.serviceInvoice.getAllServiceInvoices().subscribe(actionArray =>{
        this.AllServiceInvoices=actionArray.map(item=>{
          return {
            id : item.payload.doc.id,
            ...item.payload.doc.data() } as GetServiceModel ;
        })
      });

  }*/

  customer_id;
  public invoices;

  constructor(
    private router: Router,
    private authService:AuthenticationService,
    private service:InvoiceService
  ){}

  ngOnInit() {
      const user=this.authService.getLocalSorageData();
      console.log(user.id);
      this.customer_id=user.id;
      this.service.getInvoices(this.customer_id).subscribe(data=>{
        this.invoices=data;
        console.log(this.invoices);
      })
      
  }

  onSelect(serviceInvoice){
    this.router.navigate(['/customer/serviceInvoice/view',serviceInvoice.invoice_id]);
  }

  i=0;

  isNull(){
    if(this.i == 0 ){
      return true;
    }
  }

  isGet(){
      this.i=(this.i+1);
      return true;
  }



}
