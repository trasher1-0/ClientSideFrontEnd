import { Component, OnInit } from '@angular/core';
import {GetServiceModel} from 'src/app/Services/justGetServices/get-service-model';
import {GettingInvoiceService} from 'src/app/Services/justGetServices/getting-invoice.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Router} from '@angular/router';

@Component({
  selector: 'app-previous-invoices',
  templateUrl: './previous-invoices.component.html',
  styleUrls: ['./previous-invoices.component.css']
})
export class PreviousInvoicesComponent implements OnInit {

  AllServiceInvoices : GetServiceModel[];
 

  constructor(private serviceInvoice:GettingInvoiceService,
              private router: Router) { 
      this.serviceInvoice.getAllServiceInvoices().subscribe(actionArray =>{
        this.AllServiceInvoices=actionArray.map(item=>{
          return {
            id : item.payload.doc.id,
            ...item.payload.doc.data() } as GetServiceModel ;
        })
      });

  }

  ngOnInit() {
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
