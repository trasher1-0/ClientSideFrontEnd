import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class HelpServiceService {

  constructor(public db:AngularFireDatabase) { }

  invoices:AngularFireList<any>;

  getInvoices(){
    this.invoices=this.db.list('getServiceInvoice');
    return this.invoices.snapshotChanges();
  }
}
