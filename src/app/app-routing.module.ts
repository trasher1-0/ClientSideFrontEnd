import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import {formModule} from '@angular/forms';

import {LoginComponent} from 'src/app/login/login.component';
import {ClientHomeComponent} from 'src/app/client-home/client-home.component';
import {SignupComponent} from 'src/app/signup/signup.component';
import {ClientDashComponent} from 'src/app/client-dash/client-dash.component';

// menu componets
import {BookingsComponent} from 'src/app/menu/bookings/bookings.component';
import {BuyComponent} from 'src/app/menu/buy/buy.component';
import {DashboardComponent} from 'src/app/menu/dashboard/dashboard.component';
import {FeedbackComponent} from 'src/app/menu/feedback/feedback.component';
import {HelpComponent} from 'src/app/menu/help/help.component';
import {ServiceComponent} from 'src/app/menu/service/service.component';
import {UserComponent} from 'src/app/menu/user/user.component';
import {NavigationbarComponent} from 'src/app/menu/navigationbar/navigationbar.component';

// main page components
import {UserPageComponent} from 'src/app/user-page/user-page.component';
import {BuyRobotPageComponent} from 'src/app/buy-robot-page/buy-robot-page.component';
import {GetServicePageComponent} from 'src/app/get-service-page/get-service-page.component';
import {BookingPageComponent} from 'src/app/booking-page/booking-page.component';

import {PrimumTrasherPanelComponent} from 'src/app/dashboadComponents/primum-trasher-panel/primum-trasher-panel.component';
import {LargeTrasherPanelComponent} from 'src/app/dashboadComponents/large-trasher-panel/large-trasher-panel.component'


const routes: Routes = [

  {path:'',component:ClientHomeComponent},
  {path:'customer/login',component:LoginComponent},
  {path:'customer/signup',component:SignupComponent},
  {path:'customer/dashboad',component:ClientDashComponent},
  {path:'customer/profile',component:UserPageComponent},
  {path:'customer/buyTrasher',component:BuyRobotPageComponent},
  {path:'customer/feedback',component:FeedbackComponent},
  {path:'customer/help',component:HelpComponent},
  {path:'customer/getService',component:GetServicePageComponent},
  {path:'customer/booking',component:BookingPageComponent},
  {path:'nav',component:NavigationbarComponent}


];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
