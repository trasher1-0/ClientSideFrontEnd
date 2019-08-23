import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-large-trasher-dialog-box',
  templateUrl: './large-trasher-dialog-box.component.html',
  styleUrls: ['./large-trasher-dialog-box.component.css']
})
export class LargeTrasherDialogBoxComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<LargeTrasherDialogBoxComponent>
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.dialogRef.close();
  }



}
