import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PrimumTrasherDialogBoxComponent } from 'src/app/dashboadComponents/primum-trasher-dialog-box/primum-trasher-dialog-box.component';
import { RattingService } from 'src/app/Services/rattingService/ratting.service';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';

@Component({
  selector: 'app-primum-trasher',
  templateUrl: './primum-trasher.component.html',
  styleUrls: ['./primum-trasher.component.css']
})
export class PrimumTrasherComponent implements OnInit {


  public primumTrasherRattings;
  public ratting;
  public isRatedPrimumTrasher;

  constructor(private dialog:MatDialog,
              private service:RattingService,
              private authService:AuthenticationService) { }

  ngOnInit() {
    this.service.getPrimumTrasherRattings().subscribe(data=>{
      this.primumTrasherRattings=data;
      console.log(this.primumTrasherRattings);
    })
    this.service.isRatedForPrimumTrasher(this.authService.getLocalSorageData().id).subscribe(data=>{
        this.isRatedPrimumTrasher=data;
    })
  }

  isRated(){
    return this.isRatedPrimumTrasher;
  }

            

  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="60%";
    this.dialog.open(PrimumTrasherDialogBoxComponent,dialogConfig);
  }

  onSubmit(){
    if(this.service.form.valid){
      const user=this.authService.getLocalSorageData();
      const ratting={
        'customer_id':user.id,
        'rated_value':parseInt(this.service.form.get('ratting').value),
        'trasher_type':2
      }
      //console.log(this.service.form.get('ratting').value);
      this.service.addRatting(ratting).subscribe(data=>{
        this.ratting=data;
       // console.log(data)
      });
    }
  }

}
