import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RattingService {

  public base_Url="http://localhost:8080/backend/api";

  constructor(private http:HttpClient) { }

  form:FormGroup=new FormGroup({
    ratting:new FormControl('',[Validators.required])
  });

  initializeFormGroup(){
    this.form.setValue({
      ratting:''
    })
  }

  populateForm(ratting:any){
    this.form.setValue(ratting);
  }


  addRatting(ratting:any){
   // console.log(ratting);
    return this.http.post(this.base_Url+"/customer/trasher/rattings/send",ratting);
  }

  isRatedForSmallTrasher(customer_id){
    console.log("is rated for small trasher !");
    return this.http.get(this.base_Url+"/customer/isRatedSmallTrasher/"+customer_id);
  }

  isRatedForPrimumTrasher(customer_id){
    return this.http.get(this.base_Url+"/customer/isRatedPrimumTrasher/"+customer_id)
  }

  isRatedForLargeTrasher(customer_id){
    return this.http.get(this.base_Url+"/customer/isRatedLargeTrasher/"+customer_id)
  }

  getSmallTrasherRattings(){
    return this.http.get(this.base_Url+"/customer/smallTrasher/Rattings");
  }

  getPrimumTrasherRattings(){
    return this.http.get(this.base_Url+"/customer/primumTrasher/Rattings");
  }

  getLargeTrasherRattings(){
    return this.http.get(this.base_Url+"/customer/largeTrasher/Rattings");
  }
}
