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
import {FeedbacksComponent} from 'src/app/feedbackPage/feedbacks/feedbacks.component';
import {HelpPageComponent} from 'src/app/help-page/help-page.component';
import {SocialEventsComponent} from 'src/app/menu/social-events/social-events.component';

// help page components

import {HelpMenuComponent} from 'src/app/helpPageComponents/help-menu/help-menu.component';
import {BookingIssueComponent} from 'src/app/helpPageComponents/booking-issue/booking-issue.component';
import {OtherIssueComponent} from 'src/app/helpPageComponents/other-issue/other-issue.component';
import {DilevaryIssueComponent} from 'src/app/helpPageComponents/dilevary-issue/dilevary-issue.component';
import {PaymentIssueComponent} from 'src/app/helpPageComponents/payment-issue/payment-issue.component';
import {SystermIssueComponent} from 'src/app/helpPageComponents/systerm-issue/systerm-issue.component';
import {UserGuideComponent} from 'src/app/helpPageComponents/user-guide/user-guide.component';
import {SocialEventPageComponent} from 'src/app/social-event-page/social-event-page.component';
import {SocialServiceBookingFormComponent} from 'src/app/socialEventComponents/bookForEvent/social-service-booking-form/social-service-booking-form.component';

import {PrimumTrasherPanelComponent} from 'src/app/dashboadComponents/primum-trasher-panel/primum-trasher-panel.component';
import {LargeTrasherPanelComponent} from 'src/app/dashboadComponents/large-trasher-panel/large-trasher-panel.component'
import {BookingFormComponent} from 'src/app/bookingComponents/booking-form/booking-form.component';
import {BookingFormViewComponent} from 'src/app/bookingComponents/booking-form-view/booking-form-view.component';
import {SocialEventFromViewComponent} from 'src/app/socialEventComponents/social-event-from-view/social-event-from-view.component';

// import invoices view page components
import { ServiceInvoiceViewComponent} from 'src/app/userComponents/service-invoice-view/service-invoice-view.component';
import {AuthComponent} from  'src/app/auth/auth.component';
import{ BackgroundComponent} from 'src/app/background/background.component';
import {PaymentComponent} from 'src/app/payment/payment.component';

const routes: Routes = [
  {path:'',component:ClientHomeComponent},
  {path:'customer/auth',component:BackgroundComponent},
  {path:'customer/login',component:LoginComponent},
  {path:'customer/signup',component:SignupComponent},
  {path:'customer/dashboad',component:ClientDashComponent},
  {path:'customer/profile',component:UserPageComponent},
  {path:'customer/buyTrasher',component:BuyRobotPageComponent},
  {path:'customer/feedback',component:FeedbacksComponent},
  {path:'customer/SocialEvents',component:SocialEventPageComponent},
  {path:'customer/socialEvents/bookingForm',component:SocialEventFromViewComponent},
  {path:'customer/help',component:HelpPageComponent},
  {path:'customer/help/systemIssue',component:SystermIssueComponent},
  {path:'customer/help/delivaryIssue',component:DilevaryIssueComponent},
  {path:'customer/help/paymentIssue',component:PaymentIssueComponent},
  {path:'customer/help/userGuide',component:UserGuideComponent},
  {path:'customer/help/bookingIssue',component:BookingIssueComponent},
  {path:'customer/help/otherIssue',component:OtherIssueComponent},
  {path:'customer/getService',component:GetServicePageComponent},
  {path:'customer/booking',component:BookingPageComponent},
  {path:'customer/booking/bookingForm',component:BookingFormViewComponent},
  {path:'customer/serviceInvoice/view/:id' , component:ServiceInvoiceViewComponent},
  {path:'customer/invoice/payement',component:PaymentComponent},
  {path:'nav',component:NavigationbarComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes ,{ enableTracing: true }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
