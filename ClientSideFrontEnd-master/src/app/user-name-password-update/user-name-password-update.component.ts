import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user-name-password-update',
  templateUrl: './user-name-password-update.component.html',
  styleUrls: ['./user-name-password-update.component.css']
})
export class UserNamePasswordUpdateComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<UserNamePasswordUpdateComponent>) { }

  ngOnInit() {
  }

  onClose(){
    this.dialogRef.close();
  }

}
