import { Component, OnInit } from '@angular/core';
import { CommentService} from 'src/app/Services/commentService/comment.service';
import {CustomerService} from 'src/app/Services/customerService/customer.service';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';

@Component({
  selector: 'app-large-trasher-comment-box',
  templateUrl: './large-trasher-comment-box.component.html',
  styleUrls: ['./large-trasher-comment-box.component.css']
})
export class LargeTrasherCommentBoxComponent implements OnInit {

  constructor(private service : CommentService,
              private customerService:CustomerService,
              private authService:AuthenticationService) { }

  public largeComments;
  public customers;
  public user;
  

  ngOnInit() {
    this.service.getLargeComments().subscribe(data=>{
      this.largeComments=data;
      console.log(this.largeComments);
    })
    this.customerService.getCustomers().subscribe(data =>{
      this.customers=data;
      console.log(this.customers);
    })
    this.getCurrentLogedUser();
  }

  getCurrentLogedUser(){
    this.user=this.authService.getLocalSorageData();
    return this.user;
  }

  onSubmit(){
    if(this.service.form.valid){
      const comment={
        'customer_id':this.user.id,
        'comment':this.service.form.get('comment').value,
        'trasher_type':3
      }
      this.service.addComments(comment).subscribe(data=>{
        console.log(data);
      });
      this.resetForm();

    }
  }
  resetForm(){
    this.service.form.reset();
  }

}
