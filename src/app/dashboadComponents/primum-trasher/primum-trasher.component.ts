import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PrimumTrasherDialogBoxComponent } from 'src/app/dashboadComponents/primum-trasher-dialog-box/primum-trasher-dialog-box.component';

@Component({
  selector: 'app-primum-trasher',
  templateUrl: './primum-trasher.component.html',
  styleUrls: ['./primum-trasher.component.css']
})
export class PrimumTrasherComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="60%";
    this.dialog.open(PrimumTrasherDialogBoxComponent,dialogConfig);
  }

}
