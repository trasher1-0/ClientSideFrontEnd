import { Injectable } from '@angular/core';
import {GetServiceModel} from 'src/app/Services/justGetServices/get-service-model';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GettingInvoiceService {

  public getServiceModel : GetServiceModel;

  constructor(private fireStore:AngularFirestore) { }

  getAllServiceInvoices(){
    console.log(this.fireStore.collection<any>("getServiceInvoices").snapshotChanges());
    return this.fireStore.collection<any>("getServiceInvoices").snapshotChanges();
  }
}
