import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';
import { NgModel, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private customer;

  constructor(private service:AuthenticationService,
              private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("cliekd");
  // if(this.service.form.valid){
    // console.log(this.service.form.value);
     const user={
       'user_name':this.service.form.get('user_name').value,
       'email':this.service.form.get('email').value,
       "password":this.service.form.get('password').value,
       "is_loged":1
     }
   //  console.log(invoice);
     this.service.signupUser(user).subscribe(data=>{
         this.customer=data;
         console.log(this.customer.id);
         if(this.customer.id != null){
           console.log("sucsessfully registaed !");
           localStorage.setItem('customer', JSON.stringify(this.customer));
           let item = JSON.parse(localStorage.getItem('customer'));
           console.log(item);
           this._router.navigate(['customer/dashboad']);
         }
         else{
           console.log("registation falil ! user name or password there exists !")
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
