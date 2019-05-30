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
    console.log(ratting);
    return this.http.post(this.base_Url+"/customer/trasher/rattings/send",ratting);
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
