import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserNamePasswordUpdateComponent } from 'src/app/user-name-password-update/user-name-password-update.component';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  private currentUser:any;

  constructor(private dialog:MatDialog,
              private service:AuthenticationService) { }

  ngOnInit() {
    const user=this.service.getLocalSorageData();
   // this.userEmail=user.email;
   this.currentUser=user;
   console.log("test")
    console.log(this.currentUser);
  }

  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="70%";
    this.dialog.open(UserNamePasswordUpdateComponent,dialogConfig);
  }


}
