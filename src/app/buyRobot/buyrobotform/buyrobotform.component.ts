import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {PickupLocationMapComponent} from 'src/app/buyRobot/pickup-location-map/pickup-location-map.component';

@Component({
  selector: 'app-buyrobotform',
  templateUrl: './buyrobotform.component.html',
  styleUrls: ['./buyrobotform.component.css']
})
export class BuyrobotformComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(PickupLocationMapComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
