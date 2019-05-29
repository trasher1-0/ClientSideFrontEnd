import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-primum-trasher-dialog-box',
  templateUrl: './primum-trasher-dialog-box.component.html',
  styleUrls: ['./primum-trasher-dialog-box.component.css']
})
export class PrimumTrasherDialogBoxComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<PrimumTrasherDialogBoxComponent>
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.dialogRef.close();
  }


}
