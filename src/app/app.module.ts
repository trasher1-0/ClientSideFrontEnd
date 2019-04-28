import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';




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
import { AvailableSlotsComponent } from './bookingComponents/available-slots/available-slots.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { OneHourslotComponent } from './bookingComponents/one-hourslot/one-hourslot.component';
import { TwoHourslotComponent } from './bookingComponents/two-hourslot/two-hourslot.component';
import { CustomizeTimeComponent } from './bookingComponents/customize-time/customize-time.component';
import { FeedbackBoxComponent } from './feedbackCompoents/feedback-box/feedback-box.component';
import { ReplyBoxComponent } from './feedbackCompoents/reply-box/reply-box.component';
import { MyfeedbackBoxComponent } from './feedbackCompoents/myfeedback-box/myfeedback-box.component';
import { FeedbacksComponent } from './feedbackPage/feedbacks/feedbacks.component';
import { HelpMenuComponent } from './helpPageComponents/help-menu/help-menu.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { SystermIssueComponent } from './helpPageComponents/systerm-issue/systerm-issue.component';
import { DilevaryIssueComponent } from './helpPageComponents/dilevary-issue/dilevary-issue.component';
import { PaymentIssueComponent } from './helpPageComponents/payment-issue/payment-issue.component';
import { UserGuideComponent } from './helpPageComponents/user-guide/user-guide.component';
import { BookingIssueComponent } from './helpPageComponents/booking-issue/booking-issue.component';
import { OtherIssueComponent } from './helpPageComponents/other-issue/other-issue.component';
import { ServiceFormComponent } from './getServiceFromRobot/service-form/service-form.component';
import { PoligonMapComponent } from './getServiceFromRobot/poligon-map/poligon-map.component';
import { SmallTrasherDialogBoxComponent } from './dashboadComponents/small-trasher-dialog-box/small-trasher-dialog-box.component';
import { PickupLocationMapComponent } from './buyRobot/pickup-location-map/pickup-location-map.component';
import { BookingFormComponent } from './bookingComponents/booking-form/booking-form.component';
import { CalenderComponent } from './bookingComponents/calender/calender.component';
import { SocialEventPageComponent } from './social-event-page/social-event-page.component';
import { SocialServiceBookingFormComponent } from './socialEventComponents/bookForEvent/social-service-booking-form/social-service-booking-form.component';
import { JustGetServiceFormComponent } from './socialEventComponents/justGetService/just-get-service-form/just-get-service-form.component';
import {SocialEventsComponent} from './menu/social-events/social-events.component';
import { PreviousInvoicesComponent } from './userComponents/previous-invoices/previous-invoices.component';
import { OtherActiviesComponent } from './userComponents/other-activies/other-activies.component';

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
    AvailableSlotsComponent,
    BookingPageComponent,
    OneHourslotComponent,
    TwoHourslotComponent,
    CustomizeTimeComponent,
    FeedbackBoxComponent,
    ReplyBoxComponent,
    MyfeedbackBoxComponent,
    FeedbacksComponent,
    HelpMenuComponent,
    HelpPageComponent,
    SystermIssueComponent,
    DilevaryIssueComponent,
    PaymentIssueComponent,
    UserGuideComponent,
    BookingIssueComponent,
    OtherIssueComponent,
    ServiceFormComponent,
    PoligonMapComponent,
    SmallTrasherDialogBoxComponent,
    PickupLocationMapComponent,
    BookingFormComponent,
    CalenderComponent,
    SocialEventPageComponent,
    SocialServiceBookingFormComponent,
    JustGetServiceFormComponent,
    SocialEventsComponent,
    PreviousInvoicesComponent,
    OtherActiviesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,   
    MatDatepickerModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
