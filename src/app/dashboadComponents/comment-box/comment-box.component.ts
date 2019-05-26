import { Component, OnInit } from '@angular/core';
import { SmallTrasherCommentService } from 'src/app/Services/dashboadServices/small-trasher-comment.service';
import { HelpServiceService } from 'src/app/help-service.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

  constructor(private service : SmallTrasherCommentService,
    private helpService:HelpServiceService) { }

  public smallComments;
  public customers;
  

  ngOnInit() {
    this.service.getSmallComments().subscribe(data=>{
      this.smallComments=data;
      console.log(this.smallComments);
    })
    this.service.getCustomers().subscribe(data =>{
      this.customers=data;
      console.log(this.customers);
    })

    this.getInvoices();
  }

  onSubmit(){
    if(this.service.form.valid){
      const comment={
        'customer_id':1,
        'comment':this.service.form.get('comment').value
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
