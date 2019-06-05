import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';
import { NgModel, NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private customer;

  constructor(private service:AuthenticationService,
              private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
  //  console.log("cliekd");
  // if(this.service.form.valid){
    // console.log(this.service.form.value);
     const user={
       'user_name':this.service.loginForm.get('user_name').value,
       "password":this.service.loginForm.get('password').value,
       "is_loged":1,
     }
   //  console.log(invoice);
     this.service.loginUser(user).subscribe(data=>{
         this.customer=data;
        // console.log(this.customer.id);
         if(this.customer.id != null){
           console.log("login sucessfuly");
           localStorage.setItem('customer', JSON.stringify(this.customer));
           let item = JSON.parse(localStorage.getItem('customer'));
           console.log(item);
           this._router.navigate(['customer/dashboad']);
         }
         else{
           console.log("login fail !");
           this._router.navigate(['/customer/auth']);
         }
        
     })
     this.resetForm();

    //  }
  }
  resetForm(){
    this.service.form.reset();
  }
}
