import { Component, OnInit } from '@angular/core';
import {PrimumTrasherCommentService} from 'src/app/Services/dashboadServices/primum-trasher-comment.service';
import { SmallTrasherCommentService} from 'src/app/Services/dashboadServices/small-trasher-comment.service';

@Component({
  selector: 'app-primum-trasher-comment-box',
  templateUrl: './primum-trasher-comment-box.component.html',
  styleUrls: ['./primum-trasher-comment-box.component.css']
})
export class PrimumTrasherCommentBoxComponent implements OnInit {

  constructor(private primumTrasherSavice : PrimumTrasherCommentService,
              private service:SmallTrasherCommentService) { }

  public primumComments;
  public customers;
  

  ngOnInit() {
    this.primumTrasherSavice.getPrimumComments().subscribe(data=>{
      this.primumComments=data;
      console.log(this.primumComments);
    })
    this.service.getCustomers().subscribe(data =>{
      this.customers=data;
      console.log(this.customers);
    })
  }

}
