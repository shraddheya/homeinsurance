import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
// import { GoogleMapsModule } from '@angular/google-maps';
// import { AgmCoreModule } from '@agm/core';
// import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
// import { StripeModule } from 'stripe-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { C00planComponent } from './c00plan/c00plan.component';
import { C01nameComponent } from './c01name/c01name.component';
import { C02adderssComponent } from './c02adderss/c02adderss.component';
import { ButtBackComponent } from './butt-back/butt-back.component';
import { C03typeHomeComponent } from './c03type-home/c03type-home.component';
import { C04sizeHomeComponent } from './c04size-home/c04size-home.component';
import { C05securityComponent } from './c05security/c05security.component';
import { C06membersComponent } from './c06members/c06members.component';
import { C07insuranceClaimCountComponent } from './c07insurance-claim-count/c07insurance-claim-count.component';
import { C08assetsComponent } from './c08assets/c08assets.component';
import { C09getQuoteComponent } from './c09get-quote/c09get-quote.component';
import { C10quoteDetailComponent } from './c10quote-detail/c10quote-detail.component';
import { Q00insuranceComponent } from './c10quote-detail/q00insurance/q00insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    C00planComponent,
    C01nameComponent,
    C02adderssComponent,
    ButtBackComponent,
    C03typeHomeComponent,
    C04sizeHomeComponent,
    C05securityComponent,
    C06membersComponent,
    C07insuranceClaimCountComponent,
    C08assetsComponent,
    C09getQuoteComponent,
    C10quoteDetailComponent,
    Q00insuranceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    // GoogleMapsModule,
    // GooglePlaceModule,
    // StripeModule.forRoot(),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDt1YJIwwZRjt3wI1xyH8bdY3sBf7PbR8s',
    //   libraries:["places"]
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
