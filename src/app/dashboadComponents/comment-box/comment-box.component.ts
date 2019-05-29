import { Component, OnInit } from '@angular/core';
import { HelpServiceService } from 'src/app/help-service.service';
import {CommentService} from 'src/app/Services/commentService/comment.service';
import {CustomerService} from 'src/app/Services/customerService/customer.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

  constructor(private service : CommentService,
              private customerService:CustomerService,
              private helpService:HelpServiceService) { }

  public smallComments;
  public customers;
  

  ngOnInit() {
    this.service.getSmallComments().subscribe(data=>{
      this.smallComments=data;
      console.log(this.smallComments);
    })
    this.customerService.getCustomers().subscribe(data =>{
      this.customers=data;
      console.log(this.customers);
    })

    this.getInvoices();
  }

  onSubmit(){
    if(this.service.form.valid){
      const comment={
        'customer_id':3,
        'comment':this.service.form.get('comment').value,
        'trasher_type':1
      }
      this.service.addComments(comment).subscribe(data=>{
        this.smallComments=data;
      });
      this.resetForm();

    }
  }
  resetForm(){
    this.service.form.reset();
  }

  public invoices:any;

  getInvoices(){
    this.helpService.getInvoices().subscribe(data=>{
      this.invoices=data.map(item=>{
        return {
          $key:item.key,
          ...item.payload.val()
        }
      });
      console.log(this.invoices);
    })

  }



}
