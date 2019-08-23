import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';
import { NgModel, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private customer;
  private user;

  constructor(private service:AuthenticationService,
              private _router: Router,
              private toster:ToastrService) { }

  ngOnInit() {
   
  }

  onSubmit(){
  // if(this.service.form.valid){
    // console.log(this.service.form.value);
     const user={
       'user_name':this.service.loginForm.get('user_name').value,
       "password":this.service.loginForm.get('password').value,
       "is_loged":1,
     }
     this.service.loginUser(user).subscribe(data=>{
         this.customer=data;
         if(this.customer.id != null){
          console.log("login sucessfuly");
          localStorage.setItem('customer', JSON.stringify(this.customer));
          console.log("user is :"+JSON.parse(localStorage.getItem('customer')));
          const x=this.service.getLocalSorageData();
        // console.log(x);
          this._router.navigate(['customer/dashboad']);
          this.toster.success("Login successfully","WelCome To Dashboad !");
         }
         else{
           console.log("login fail !");
           this.toster.warning("User name or Password Incorrect ","Something Went Wrong !",{timeOut: 3000});
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
