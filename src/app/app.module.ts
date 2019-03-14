import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/*import {MatSlideToggleModule} from '@angular/material/slide-toggle';*/

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
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   /* BrowserAnimationsModule,*/
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
