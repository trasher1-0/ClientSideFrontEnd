import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

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

  populateForm(comment:any){
    this.form.setValue(comment);
  }


  getSmallComments(){
    return this.http.get(this.base_Url+"/dashboad/comments/smallTrasher");
  }

  getPrimumComments(){
    return this.http.get(this.base_Url+"/dashboad/comments/primumTrasher");
  }

  getLargeComments(){
    return this.http.get(this.base_Url+"/dashboad/comments/largeTrasher");
  }

  addComments(comment:any){
    return this.http.post(this.base_Url+"/customer/trasher/comments/send",comment);
  }
}
