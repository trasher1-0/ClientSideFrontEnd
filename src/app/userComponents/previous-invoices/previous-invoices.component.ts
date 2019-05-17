import { Component, OnInit } from '@angular/core';
import {GetServiceModel} from 'src/app/Services/justGetServices/get-service-model';
import {GettingInvoiceService} from 'src/app/Services/justGetServices/getting-invoice.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-previous-invoices',
  templateUrl: './previous-invoices.component.html',
  styleUrls: ['./previous-invoices.component.css']
})
export class PreviousInvoicesComponent implements OnInit {

  AllServiceInvoices : GetServiceModel[];

  constructor(private serviceInvoice:GettingInvoiceService) { 
    this.serviceInvoice.getAllServiceInvoices().subscribe(actionArray =>{
      this.AllServiceInvoices=actionArray.map(item=>{
        return {
          id : item.payload.doc.id,
          ...item.payload.doc.data() } as GetServiceModel ;
      })
    });
   // console.log(this.AllServiceInvoices);
  }

  ngOnInit() {
  }

}
