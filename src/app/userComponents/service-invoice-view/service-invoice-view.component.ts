import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,RouterStateSnapshot, Router} from '@angular/router';
import { GettingInvoiceService} from 'src/app/Services/justGetServices/getting-invoice.service';
import { GetServiceModel} from 'src/app/Services/justGetServices/get-service-model';


@Component({
  selector: 'app-service-invoice-view',
  templateUrl: './service-invoice-view.component.html',
  styleUrls: ['./service-invoice-view.component.css']
})
export class ServiceInvoiceViewComponent implements OnInit {

  lat: number = 6.9037023;
  lng: number = 79.8576826;
  locationChoosen=true;
  invoice_id;

  ServiceInvoices : GetServiceModel[];
  invoiceInfo: GetServiceModel;

  constructor(private route:ActivatedRoute ,
              private serviceInvoice:GettingInvoiceService,
              private router: Router) { 

          this.serviceInvoice.getAllServiceInvoices().subscribe(actionArray =>{
            this.ServiceInvoices=actionArray.map(item=>{
                return {
                  id : item.payload.doc.id,
                  ...item.payload.doc.data() } as GetServiceModel ;
                })
          });
  }

  ngOnInit() {
    this.invoice_id=this.route.snapshot.params.id;
   // console.log(this.invoice_id);
  // this.getInvoiceInfo(this.invoice_id);
  }

  onEdit(invoice : GetServiceModel){
    this.serviceInvoice.getServiceModel=Object.assign({},invoice);
  }


}
