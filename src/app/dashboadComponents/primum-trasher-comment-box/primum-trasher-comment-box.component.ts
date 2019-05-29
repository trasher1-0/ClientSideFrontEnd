import { Component, OnInit } from '@angular/core';
import {CommentService} from 'src/app/Services/commentService/comment.service';
import {CustomerService} from 'src/app/Services/customerService/customer.service';

@Component({
  selector: 'app-primum-trasher-comment-box',
  templateUrl: './primum-trasher-comment-box.component.html',
  styleUrls: ['./primum-trasher-comment-box.component.css']
})
export class PrimumTrasherCommentBoxComponent implements OnInit {

  constructor(private service:CommentService,
              private customerService:CustomerService) { }

  public primumComments;
  public customers;
  

  ngOnInit() {
    this.service.getPrimumComments().subscribe(data=>{
      this.primumComments=data;
      console.log(this.primumComments);
    })
    this.customerService.getCustomers().subscribe(data =>{
      this.customers=data;
      console.log(this.customers);
    })
  }

  onSubmit(){
    if(this.service.form.valid){
      const comment={
        'customer_id':3,
        'comment':this.service.form.get('comment').value,
        'trasher_type':2
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
