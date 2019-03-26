import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { SignupComponent } from './signup/signup.component';
import { ClientDashComponent } from './client-dash/client-dash.component';
import { UserComponent } from './menu/user/user.component';
import { BuyComponent } from './menu/buy/buy.component';
import { ServiceComponent } from './menu/service/service.component';
import { BookingsComponent } from './menu/bookings/bookings.component';
import { HelpComponent } from './menu/help/help.component';
import { FeedbackComponent } from './menu/feedback/feedback.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { NavigationbarComponent } from './menu/navigationbar/navigationbar.component';
import { VideoComponent } from './dashboadComponents/video/video.component';
import { SmallTraserComponent } from './dashboadComponents/small-traser/small-traser.component';
import { PrimumTrasherComponent } from './dashboadComponents/primum-trasher/primum-trasher.component';
import { LargeTrasherComponent } from './dashboadComponents/large-trasher/large-trasher.component';
import { DashboadpanelComponent } from './dashboadComponents/dashboadpanel/dashboadpanel.component';
import { ProfileEditComponent } from './userComponents/profile-edit/profile-edit.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ChangeImageComponent } from './userComponents/change-image/change-image.component';
import { BuyrobotformComponent } from './buyRobot/buyrobotform/buyrobotform.component';
import { BuyRobotPageComponent } from './buy-robot-page/buy-robot-page.component';
import { GetServicePageComponent } from './get-service-page/get-service-page.component';
import { PrimumTrasherVideoComponent } from './dashboadComponents/primum-trasher-video/primum-trasher-video.component';
import { LargeTrasherVideoComponent } from './dashboadComponents/large-trasher-video/large-trasher-video.component';
import { LargeTrasherPanelComponent } from './dashboadComponents/large-trasher-panel/large-trasher-panel.component';
import { PrimumTrasherPanelComponent } from './dashboadComponents/primum-trasher-panel/primum-trasher-panel.component';
import { CommentBoxComponent } from './dashboadComponents/comment-box/comment-box.component';
import { PligonMapComponent } from './getServiceFromRobot/pligon-map/pligon-map.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientHomeComponent,
    SignupComponent,
    ClientDashComponent,
    UserComponent,
    BuyComponent,
    ServiceComponent,
    BookingsComponent,
    HelpComponent,
    FeedbackComponent,
    DashboardComponent,
    NavigationbarComponent,
    VideoComponent,
    SmallTraserComponent,
    PrimumTrasherComponent,
    LargeTrasherComponent,
    DashboadpanelComponent,
    ProfileEditComponent,
    UserPageComponent,
    ChangeImageComponent,
    BuyrobotformComponent,
    BuyRobotPageComponent,
    GetServicePageComponent,
    PrimumTrasherVideoComponent,
    LargeTrasherVideoComponent,
    LargeTrasherPanelComponent,
    PrimumTrasherPanelComponent,
    CommentBoxComponent,
    PligonMapComponent,
    
   
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
