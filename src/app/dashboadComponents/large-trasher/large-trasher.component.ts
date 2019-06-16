import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LargeTrasherDialogBoxComponent } from 'src/app/dashboadComponents/large-trasher-dialog-box/large-trasher-dialog-box.component';
import { RattingService } from 'src/app/Services/rattingService/ratting.service';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';

@Component({
  selector: 'app-large-trasher',
  templateUrl: './large-trasher.component.html',
  styleUrls: ['./large-trasher.component.css']
})
export class LargeTrasherComponent implements OnInit {

  public largeTrasherRattings;
  public ratting;
  public isRatedForLargeTrasher;

  constructor(private dialog:MatDialog,
              private service:RattingService,
              private authService:AuthenticationService) { }

  ngOnInit() {
    this.service.getLargeTrasherRattings().subscribe(data=>{
      this.largeTrasherRattings=data;
      console.log(this.largeTrasherRattings);
    })
    this.service.isRatedForLargeTrasher(this.authService.getLocalSorageData().id).subscribe(data=>{
      this.isRatedForLargeTrasher=data;
    })
  }

  isRated(){
    return this.isRatedForLargeTrasher;
  }
  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="60%";
    this.dialog.open(LargeTrasherDialogBoxComponent,dialogConfig);
  }

  onSubmit(){
    if(this.service.form.valid){
      const user=this.authService.getLocalSorageData();
      const ratting={
        'customer_id':user.id,
        'rated_value':parseInt(this.service.form.get('ratting').value),
        'trasher_type':3
      }
      //console.log(this.service.form.get('ratting').value);
      this.service.addRatting(ratting).subscribe(data=>{
        this.ratting=data;
       // console.log(data)
      });
    }
  }

}
