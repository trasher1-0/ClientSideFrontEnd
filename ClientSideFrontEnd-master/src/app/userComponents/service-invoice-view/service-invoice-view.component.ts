import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,RouterStateSnapshot, Router} from '@angular/router';
import { InvoiceService } from 'src/app/Services/invoiceService/invoice.service';


@Component({
  selector: 'app-service-invoice-view',
  templateUrl: './service-invoice-view.component.html',
  styleUrls: ['./service-invoice-view.component.css']
})
export class ServiceInvoiceViewComponent implements OnInit {

  public lat
  public lng
  locationChoosen=true;
  invoice_id;
  polygonCoords;
  public invoice;
  public timeSlots;
  public mapData;

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
              private route:ActivatedRoute, 
              private invoiceService: InvoiceService){}

  ngOnInit() {
    this.invoice_id=this.route.snapshot.params.id;
    console.log(this.invoice_id);
    this.invoiceService.getInvoice(this.invoice_id).subscribe(data =>{
      this.invoice=data;
      console.log(this.invoice);
    })
    this.invoiceService.getTimeSlotsForInvoiceView(this.invoice_id).subscribe(data=>{
      this.timeSlots=data;
    })

    this.invoiceService.getMapInfo(this.invoice_id).subscribe((Data)=>{
      console.log(Data.payload.val())
      this.mapData=Data.payload.val();
      this.lat=(this.mapData["pickup_location"]["location"].lat);
      this.lng=(this.mapData["pickup_location"]["location"].lng);
      this.polygonCoords=this.mapData["polygon_Coords"];
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
