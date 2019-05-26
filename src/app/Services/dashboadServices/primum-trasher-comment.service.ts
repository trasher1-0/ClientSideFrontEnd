import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrimumTrasherCommentService {

  public base_Url="http://localhost:8080/backend/api";

  constructor(private http:HttpClient) { }

  getPrimumComments(){
    return this.http.get(this.base_Url+"/dashboad/comments/primumTrasher");
  }

}
