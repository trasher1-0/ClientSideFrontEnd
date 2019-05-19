import { Injectable } from '@angular/core';
import { BuyServiceModel} from 'src/app/Services/BuyingServices/buy-service-model';

@Injectable({
  providedIn: 'root'
})
export class BuyInvoiceService {

  public BuyingInvoice : BuyServiceModel;

  constructor() { }
}
