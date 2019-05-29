import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LargeTrasherDialogBoxComponent } from 'src/app/dashboadComponents/large-trasher-dialog-box/large-trasher-dialog-box.component';

@Component({
  selector: 'app-large-trasher',
  templateUrl: './large-trasher.component.html',
  styleUrls: ['./large-trasher.component.css']
})
export class LargeTrasherComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="60%";
    this.dialog.open(LargeTrasherDialogBoxComponent,dialogConfig);
  }


}
