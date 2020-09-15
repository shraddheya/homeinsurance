import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SubscribepricesComponent } from './subscribeprices/subscribeprices.component';
import { NameComponent } from './name/name.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { TypehomeComponent } from './typehome/typehome.component';
import { HomesizeComponent } from './homesize/homesize.component';
import { SequrityComponent } from './sequrity/sequrity.component';
import { MemberinhomeComponent } from './memberinhome/memberinhome.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AssetspurchaseComponent } from './assetspurchase/assetspurchase.component';
import { GetquoteComponent } from './getquote/getquote.component';
import { QuotesdetailComponent } from './quotesdetail/quotesdetail.component';
import { QuotesAinsuranceComponent } from './quotes-ainsurance/quotes-ainsurance.component';
import { QuotesBcoverageamountComponent } from './quotes-bcoverageamount/quotes-bcoverageamount.component';
import { QuotesChighvalueitemComponent } from './quotes-chighvalueitem/quotes-chighvalueitem.component';
import { QuotesDcoveragesuperpowersComponent } from './quotes-dcoveragesuperpowers/quotes-dcoveragesuperpowers.component';
import { QuotesEwhatscoverdComponent } from './quotes-ewhatscoverd/quotes-ewhatscoverd.component';
import { QuotesFdeductibleComponent } from './quotes-fdeductible/quotes-fdeductible.component';
import { QuotesGnotcoveredComponent } from './quotes-gnotcovered/quotes-gnotcovered.component';
import { QuotesHlinkpolicyComponent } from './quotes-hlinkpolicy/quotes-hlinkpolicy.component';
import { QuotesIactiveinsuranceComponent } from './quotes-iactiveinsurance/quotes-iactiveinsurance.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribepricesComponent,
    NameComponent,
    AddressComponent,
    TypehomeComponent,
    HomesizeComponent,
    SequrityComponent,
    MemberinhomeComponent,
    InsuranceComponent,
    AssetspurchaseComponent,
    GetquoteComponent,
    QuotesdetailComponent,
    QuotesAinsuranceComponent,
    QuotesBcoverageamountComponent,
    QuotesChighvalueitemComponent,
    QuotesDcoveragesuperpowersComponent,
    QuotesEwhatscoverdComponent,
    QuotesFdeductibleComponent,
    QuotesGnotcoveredComponent,
    QuotesHlinkpolicyComponent,
    QuotesIactiveinsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
