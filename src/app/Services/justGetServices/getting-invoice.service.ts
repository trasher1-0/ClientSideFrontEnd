import { Injectable } from '@angular/core';
import {GetServiceModel} from 'src/app/Services/justGetServices/get-service-model';

@Injectable({
  providedIn: 'root'
})
export class GettingInvoiceService {

  public getServiceModel : GetServiceModel;

  constructor() { }
}
