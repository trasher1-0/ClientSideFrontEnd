import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public base_Url="http://localhost:8080/backend/api";

  constructor(private http:HttpClient) { }

  getCustomers(){
    return this.http.get(this.base_Url+"/customers");
  }
}
