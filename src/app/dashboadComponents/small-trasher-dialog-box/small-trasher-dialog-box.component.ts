import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-small-trasher-dialog-box',
  templateUrl: './small-trasher-dialog-box.component.html',
  styleUrls: ['./small-trasher-dialog-box.component.css']
})
export class SmallTrasherDialogBoxComponent implements OnInit {


  constructor(
    public dialogRef : MatDialogRef<SmallTrasherDialogBoxComponent>
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.dialogRef.close();
  }

}
