import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LargeTrasherCommentService {

  public base_Url="http://localhost:8080/backend/api";

  constructor(private http:HttpClient) { }

  getLargeComments(){
    return this.http.get(this.base_Url+"/dashboad/comments/smallTrasher");
  }

  getCustomers(){
    return this.http.get(this.base_Url+"/customers");
  }
}
