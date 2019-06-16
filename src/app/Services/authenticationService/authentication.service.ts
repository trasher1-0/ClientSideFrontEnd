import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  public base_Url="http://localhost:8080/backend/api";

  constructor(private http:HttpClient) { }

  form:FormGroup=new FormGroup({
    user_name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    is_loged:new FormControl('',[Validators.required])
  });

  loginForm:FormGroup=new FormGroup({
    user_name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    is_loged:new FormControl('',[Validators.required])
  });

  initializeFormGroup(){
    this.form.setValue({
      'user_name':'',
      'email':'',
      "password":'',
      "is_loged":null,
    }),
    this.loginForm.setValue({
      'user_name':'',
      "password":'',
      "is_loged":null,
    })
  }

  signupUser(user:any){
   // console.log(user);
    
    return this.http.post(this.base_Url+"/signUp/Authentication",user);
  }

  loginUser(user:any){
 //   console.log(user);
    return this.http.post(this.base_Url+"/login/Authentication",user);
  }

  setLocalStorageData(user:any){
    localStorage.setItem('customer', JSON.stringify(user));
  }

  getLocalSorageData(){
    const x= JSON.parse(localStorage.getItem('customer'));
 //   console.log(x);
    return x;
  }
}
