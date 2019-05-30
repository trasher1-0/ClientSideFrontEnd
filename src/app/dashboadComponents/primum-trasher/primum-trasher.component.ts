import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PrimumTrasherDialogBoxComponent } from 'src/app/dashboadComponents/primum-trasher-dialog-box/primum-trasher-dialog-box.component';
import { RattingService } from 'src/app/Services/rattingService/ratting.service';

@Component({
  selector: 'app-primum-trasher',
  templateUrl: './primum-trasher.component.html',
  styleUrls: ['./primum-trasher.component.css']
})
export class PrimumTrasherComponent implements OnInit {


  public primumTrasherRattings;

  constructor(private dialog:MatDialog,
              private service:RattingService) { }

  ngOnInit() {
    this.service.getPrimumTrasherRattings().subscribe(data=>{
      this.primumTrasherRattings=data;
      console.log(this.primumTrasherRattings);
    })
  }

  isRated(){
    return true;
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
      const ratting={
        'customer_id':3,
        'rated_value':parseInt(this.service.form.get('ratting').value),
        'trasher_type':2
      }
      //console.log(this.service.form.get('ratting').value);
      this.service.addRatting(ratting);
    }
  }

}
