import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { C01nameComponent } from './c01name/c01name.component';
import { C02adderssComponent } from './c02adderss/c02adderss.component';
import { ButtBackComponent } from './butt-back/butt-back.component';
import { C03typeHomeComponent } from './c03type-home/c03type-home.component';
import { C08assetsComponent } from './c08assets/c08assets.component';
import { C09getQuoteComponent } from './c09get-quote/c09get-quote.component';
import { Q00insuranceComponent } from './c13quote-detail/q00insurance/q00insurance.component';
import { Q01coverageamountComponent } from './c13quote-detail/q01coverageamount/q01coverageamount.component';
import { Q02highvalueitemsComponent } from './c13quote-detail/q02highvalueitems/q02highvalueitems.component';
import { Q03superpowersComponent } from './c13quote-detail/q03superpowers/q03superpowers.component';
import { Q04listcoveredComponent } from './c13quote-detail/q04listcovered/q04listcovered.component';
import { Q05deductiblesComponent } from './c13quote-detail/q05deductibles/q05deductibles.component';
import { Q06notcoveredComponent } from './c13quote-detail/q06notcovered/q06notcovered.component';
import { Q07linkpolicyComponent } from './c13quote-detail/q07linkpolicy/q07linkpolicy.component';
import { Q08activeinsuranceComponent } from './c13quote-detail/q08activeinsurance/q08activeinsurance.component';
import { PaymentComponent } from './payment/payment.component';
import { C13quoteDetailComponent } from './c13quote-detail/c13quote-detail.component';
import { C12insuranceClaimCountComponent } from './c12insurance-claim-count/c12insurance-claim-count.component';
import { C14pdfComponent } from './c14pdf/c14pdf.component';
import { C07membersComponent } from './c07members/c07members.component';
import { C06securityComponent } from './c06security/c06security.component';
import { C05sizeHomeComponent } from './c05size-home/c05size-home.component';
import { C04primaryresidenceComponent } from './c04primaryresidence/c04primaryresidence.component';
import { C11builthomeYearComponent } from './c11builthome-year/c11builthome-year.component';
import { H01BannerComponent } from './home/h01-banner/h01-banner.component';
import { H02ClientsComponent } from './home/h02-clients/h02-clients.component';
import { H03RattinggreelComponent } from './home/h03-rattinggreel/h03-rattinggreel.component';
import { H04CoverageprotectsComponent } from './home/h04-coverageprotects/h04-coverageprotects.component';
import { H05InstanteverythingComponent } from './home/h05-instanteverything/h05-instanteverything.component';
import { H06PlansubscribeComponent } from './home/h06-plansubscribe/h06-plansubscribe.component';
import { H07AlreadyinsuredComponent } from './home/h07-alreadyinsured/h07-alreadyinsured.component';
import { H08HowworkComponent } from './home/h08-howwork/h08-howwork.component';
import { H09LicensedcertificationComponent } from './home/h09-licensedcertification/h09-licensedcertification.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { C10loadingpageComponent } from './c10loadingpage/c10loadingpage.component';
import { H10ProductoncheckpriceComponent } from './home/h10-productoncheckprice/h10-productoncheckprice.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { H00TopbarComponent } from './home/h00-topbar/h00-topbar.component';
import { SafePipe } from './safe.pipe';

// Google autocomplete api
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    C01nameComponent,
    C02adderssComponent,
    ButtBackComponent,
    C03typeHomeComponent,
    C08assetsComponent,
    C09getQuoteComponent,
    Q00insuranceComponent,
    Q01coverageamountComponent,
    Q02highvalueitemsComponent,
    Q03superpowersComponent,
    Q04listcoveredComponent,
    Q05deductiblesComponent,
    Q06notcoveredComponent,
    Q07linkpolicyComponent,
    Q08activeinsuranceComponent,
    PaymentComponent,
    C13quoteDetailComponent,
    C12insuranceClaimCountComponent,
    C14pdfComponent,
    C07membersComponent,
    C06securityComponent,
    C05sizeHomeComponent,
    C04primaryresidenceComponent,
    C11builthomeYearComponent,
    H01BannerComponent,
    H02ClientsComponent,
    H03RattinggreelComponent,
    H04CoverageprotectsComponent,
    H05InstanteverythingComponent,
    H06PlansubscribeComponent,
    H07AlreadyinsuredComponent,
    H08HowworkComponent,
    H09LicensedcertificationComponent,
    HomeComponent,
    FooterComponent,
    SidenavComponent,
    C10loadingpageComponent,
    H10ProductoncheckpriceComponent,
    HelpdeskComponent,
    H00TopbarComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyAj7nE9qIBJ2uObQR662W_XVcObTIsUx4Y',
      // libraries: ['']
    }),

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
