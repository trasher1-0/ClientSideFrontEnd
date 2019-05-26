import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SmallTrasherDialogBoxComponent } from '../small-trasher-dialog-box/small-trasher-dialog-box.component';

@Component({
  selector: 'app-small-traser',
  templateUrl: './small-traser.component.html',
  styleUrls: ['./small-traser.component.css']
})
export class SmallTraserComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="60%";
    this.dialog.open(SmallTrasherDialogBoxComponent,dialogConfig);
  }

}
