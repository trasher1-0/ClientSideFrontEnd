import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {LoginComponent} from 'src/app/login/login.component';

@Component({
  selector: 'app-head-banner',
  templateUrl: './head-banner.component.html',
  styleUrls: ['./head-banner.component.css']
})
export class HeadBannerComponent implements OnInit {

  constructor(private signInDialog:MatDialog,) { }

  ngOnInit() {
  }

 
}
