import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SmallTrasherDialogBoxComponent } from '../small-trasher-dialog-box/small-trasher-dialog-box.component';
import { RattingService } from 'src/app/Services/rattingService/ratting.service';
import {AuthenticationService} from 'src/app/Services/authenticationService/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-small-traser',
  templateUrl: './small-traser.component.html',
  styleUrls: ['./small-traser.component.css']
})
export class SmallTraserComponent implements OnInit {

  public smallTrasherRattings;
  public ratting;
  public isRatedForSmallTrasher;

  constructor(private dialog:MatDialog,
              private service:RattingService,
              private authService:AuthenticationService,
              private _router:Router) { }

  ngOnInit() {
    this.service.getSmallTrasherRattings().subscribe(data=>{
      this.smallTrasherRattings=data;
      console.log(this.smallTrasherRattings);
    })
    this.service.isRatedForSmallTrasher(this.authService.getLocalSorageData().id).subscribe(data=>{
      this.isRatedForSmallTrasher=data;
      console.log("is rated"+this.isRatedForSmallTrasher);
    })
  }

  isRated(){
   return this.isRatedForSmallTrasher;
  }

  checkIsRated(customer_id){
    let ratting = this.service.isRatedForSmallTrasher(customer_id);
    if(ratting != null){
      let isRatedSmallTrasher=JSON.parse('ratting');
     // console.log("small trasher rated -"+ isRatedSmallTrasher);
    // console.log(isRatedSmallTrasher);
    }
    
    return ratting;
  }

  popup(){
    console.log("Popup");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="60%";
    this.dialog.open(SmallTrasherDialogBoxComponent,dialogConfig);
  }


  onSubmit(){
    if(this.service.form.valid){
      const user=this.authService.getLocalSorageData();
      const rattin={
        'customer_id':user.id,
        'rated_value':parseInt(this.service.form.get('ratting').value),
        'trasher_type':1
      }
      //console.log(this.service.form.get('ratting').value);
      this.service.addRatting(rattin).subscribe(data=>{
        this.ratting=data;
        console.log("Rating",this.ratting);
      });
      this._router.navigate(['customer/dashboad']);
    }
  }


}
