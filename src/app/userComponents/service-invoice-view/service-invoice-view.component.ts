import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,RouterStateSnapshot, Router} from '@angular/router';
import { InvoiceService } from 'src/app/Services/invoiceService/invoice.service';


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
  polygonCoords;
  invoice;

 // ServiceInvoices : GetServiceModel[];
 // invoiceInfo: GetServiceModel;
/*
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
  }*/

  constructor(private router:Router,
              private route:ActivatedRoute, private invoiceService: InvoiceService){}

  ngOnInit() {
    this.invoice_id=this.route.snapshot.params.id;
    console.log(this.invoice_id);
    this.invoiceService.getInvoice(this.invoice_id).subscribe(data =>{
      this.invoice=data;
      console.log(this.invoice);
    })
    this.invoiceService.getMapInfo(243).subscribe((Data)=>{
      console.log(Data.payload.val())
      let mapData=Data.payload.val();
      console.log(mapData["pickup_location"]["location"].lat);
      console.log(mapData["pickup_location"]["location"].lng);
      this.polygonCoords=mapData["polygon_Coords"];
      console.log(this.polygonCoords);
      
    })
   // console.log(this.invoice_id);
  // this.getInvoiceInfo(this.invoice_id);
  }

 /* onEdit(invoice : GetServiceModel){
    this.serviceInvoice.getServiceModel=Object.assign({},invoice);
  }
*/

}
