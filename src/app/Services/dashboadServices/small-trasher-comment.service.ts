import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SmallTrasherCommentService {

  public base_Url="http://localhost:8080/backend/api";

  constructor(private http:HttpClient) { }

  form:FormGroup=new FormGroup({
    comment:new FormControl('',[Validators.required])
  });

  initializeFormGroup(){
    this.form.setValue({
      comment:''
    })
  }

  getSmallComments(){
    return this.http.get(this.base_Url+"/dashboad/comments/smallTrasher");
  }

  getCustomers(){
    return this.http.get(this.base_Url+"/customers");
  }

  addComments(comment:any){
    return this.http.post("http://localhost:8080/backend/api/customer/trasher/comments/send",comment);
  }

  populateForm(comment:any){
    this.form.setValue(comment);
  }
}
