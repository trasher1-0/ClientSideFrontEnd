import { Component, OnInit } from '@angular/core';
import {LargeTrasherCommentService} from 'src/app/Services/dashboadServices/large-trasher-comment.service';
import {SmallTrasherCommentService} from 'src/app/Services/dashboadServices/small-trasher-comment.service';


@Component({
  selector: 'app-large-trasher-comment-box',
  templateUrl: './large-trasher-comment-box.component.html',
  styleUrls: ['./large-trasher-comment-box.component.css']
})
export class LargeTrasherCommentBoxComponent implements OnInit {

  constructor(private service : SmallTrasherCommentService,
              private largeService:LargeTrasherCommentService) { }

  public largeComments;
  public customers;
  

  ngOnInit() {
    this.largeService.getLargeComments().subscribe(data=>{
      this.largeComments=data;
      console.log(this.largeComments);
    })
    this.service.getCustomers().subscribe(data =>{
      this.customers=data;
      console.log(this.customers);
    })
  }


}
