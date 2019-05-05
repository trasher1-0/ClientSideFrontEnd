import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-just-get-service-form',
  templateUrl: './just-get-service-form.component.html',
  styleUrls: ['./just-get-service-form.component.css']
})
export class JustGetServiceFormComponent implements OnInit {
  public availableSlots=["8.00 AM -9.00 AM","9.00 AM - 10 .00 AM","10.00 AM -11 .00 AM"];

  constructor() { }

  ngOnInit() {
  }

  k=0;

  isClick(){
    if(this.k ==0){
      this.k=(this.k+1);
      return this.k;
    }
    if(this.k ==1){
      this.k=(this.k -1);
      return this.k;
    }
  }

  availableTimeSlots(){
    if(this.k ==1){
      return true;
    }
  }
}
