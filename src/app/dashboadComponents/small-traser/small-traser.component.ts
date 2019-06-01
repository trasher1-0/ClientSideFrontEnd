import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SmallTrasherDialogBoxComponent } from '../small-trasher-dialog-box/small-trasher-dialog-box.component';
import { RattingService } from 'src/app/Services/rattingService/ratting.service';


@Component({
  selector: 'app-small-traser',
  templateUrl: './small-traser.component.html',
  styleUrls: ['./small-traser.component.css']
})
export class SmallTraserComponent implements OnInit {

  public smallTrasherRattings;
  public ratting;

  constructor(private dialog:MatDialog,
              private service:RattingService) { }

  ngOnInit() {
    this.service.getSmallTrasherRattings().subscribe(data=>{
      this.smallTrasherRattings=data;
      console.log(this.smallTrasherRattings);
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
    this.dialog.open(SmallTrasherDialogBoxComponent,dialogConfig);
  }


  onSubmit(){
    if(this.service.form.valid){
      const ratting={
        'customer_id':3,
        'rated_value':parseInt(this.service.form.get('ratting').value),
        'trasher_type':1
      }
      //console.log(this.service.form.get('ratting').value);
      this.service.addRatting(ratting).subscribe(data=>{
        this.ratting=data;
       // console.log(data)
      });;
    }
  }


}
