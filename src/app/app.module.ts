import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment} from 'src/environments/environment';
import { RouterModule} from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
import { SmallTrasherDialogBoxComponent } from './dashboadComponents/small-trasher-dialog-box/small-trasher-dialog-box.component';
import { BookingFormComponent } from './bookingComponents/booking-form/booking-form.component';
import { CalenderComponent } from './bookingComponents/calender/calender.component';
import { SocialEventPageComponent } from './social-event-page/social-event-page.component';
import { SocialServiceBookingFormComponent } from './socialEventComponents/bookForEvent/social-service-booking-form/social-service-booking-form.component';
import { JustGetServiceFormComponent } from './socialEventComponents/justGetService/just-get-service-form/just-get-service-form.component';
import {SocialEventsComponent} from './menu/social-events/social-events.component';
import { PreviousInvoicesComponent } from './userComponents/previous-invoices/previous-invoices.component';
import { OtherActiviesComponent } from './userComponents/other-activies/other-activies.component';
import { BookingFormViewComponent } from './bookingComponents/booking-form-view/booking-form-view.component';
import { SocialEventFromViewComponent } from './socialEventComponents/social-event-from-view/social-event-from-view.component';

// services 


import { ServiceInvoiceViewComponent } from './userComponents/service-invoice-view/service-invoice-view.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimumTrasherCommentBoxComponent } from './dashboadComponents/primum-trasher-comment-box/primum-trasher-comment-box.component';
import { LargeTrasherCommentBoxComponent } from './dashboadComponents/large-trasher-comment-box/large-trasher-comment-box.component';
import {CommentService} from 'src/app/Services/commentService/comment.service';
import {CustomerService} from  'src/app/Services/customerService/customer.service';
import { RattingService } from './Services/rattingService/ratting.service';
import { PrimumTrasherDialogBoxComponent } from './dashboadComponents/primum-trasher-dialog-box/primum-trasher-dialog-box.component';
import { LargeTrasherDialogBoxComponent } from './dashboadComponents/large-trasher-dialog-box/large-trasher-dialog-box.component';
import {InvoiceService} from 'src/app/Services/invoiceService/invoice.service';
import { PickupLocationComponent } from './getServiceFromRobot/pickup-location/pickup-location.component';
import { LocationComponent } from 'src/app/bookingComponents/location/location.component';
import { PickupPointComponent } from './socialEventComponents/pickup-point/pickup-point.component';
import { PickupPointForBookingComponent } from './socialEventComponents/pickup-point-for-booking/pickup-point-for-booking.component';
import { AboutUsComponent } from './clientHomeComponents/about-us/about-us.component';
import { ContactUsComponent } from './clientHomeComponents/contact-us/contact-us.component';
import { HeadBannerComponent } from './clientHomeComponents/head-banner/head-banner.component';
import { MailUsComponent } from './clientHomeComponents/mail-us/mail-us.component';
import { OurServicesComponent } from './clientHomeComponents/our-services/our-services.component';
import { PhotoGallaryComponent } from './clientHomeComponents/photo-gallary/photo-gallary.component';



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
    SmallTrasherDialogBoxComponent,
    BookingFormComponent,
    CalenderComponent,
    SocialEventPageComponent,
    SocialServiceBookingFormComponent,
    JustGetServiceFormComponent,
    SocialEventsComponent,
    PreviousInvoicesComponent,
    OtherActiviesComponent,
    BookingFormViewComponent,
    SocialEventFromViewComponent,
    ServiceInvoiceViewComponent,
    PrimumTrasherCommentBoxComponent,
    LargeTrasherCommentBoxComponent,
    PrimumTrasherDialogBoxComponent,
    LargeTrasherDialogBoxComponent,
    PickupLocationComponent,
    LocationComponent,
    PickupPointComponent,
    PickupPointForBookingComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeadBannerComponent,
    MailUsComponent,
    OurServicesComponent,
    PhotoGallaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,   
    MatDatepickerModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdFL8YVqFUcdLcMYJwEtKrCcgR6sEeaDE',
      libraries: ['drawing']
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot()

  ],
  providers: [
    CommentService,
    CustomerService,
    RattingService,
    InvoiceService

  ],
  bootstrap: [AppComponent],
  entryComponents:[SmallTrasherDialogBoxComponent,
                   PrimumTrasherDialogBoxComponent,
                   LargeTrasherDialogBoxComponent,
                   PickupLocationComponent,
                   LocationComponent,
                   PickupPointComponent,
                   PickupPointForBookingComponent,
                   LoginComponent,
                   SignupComponent
                  ]
})
export class AppModule { }
