import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AssetspurchaseComponent } from './assetspurchase/assetspurchase.component';
import { GetquoteComponent } from './getquote/getquote.component';
import { HomeComponent } from './home/home.component';
import { HomesizeComponent } from './homesize/homesize.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MemberinhomeComponent } from './memberinhome/memberinhome.component';
import { NameComponent } from './name/name.component';
import { QuatationpdfComponent } from './quatationpdf/quatationpdf.component';
import { QuotesdetailComponent } from './quotesdetail/quotesdetail.component';
import { SequrityComponent } from './sequrity/sequrity.component';
import { SubscribepricesComponent } from './subscribeprices/subscribeprices.component';
import { TypehomeComponent } from './typehome/typehome.component';

const routes: Routes = [
  {path: '',component:SubscribepricesComponent},
  { path: 'name', component : NameComponent},
  { path: 'address', component : AddressComponent},
  { path: 'describehome', component : TypehomeComponent},
  { path: 'homesize', component : HomesizeComponent},
  { path: 'sequrity', component : SequrityComponent},
  { path: 'memberinhome', component : MemberinhomeComponent},
  { path: 'insurance', component : InsuranceComponent},
  { path: 'assetspurchase', component : AssetspurchaseComponent},
   {path: 'getquotsview', component :GetquoteComponent},
  { path: 'quotesview', component : QuotesdetailComponent},
  { path: "pdf", component:QuatationpdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
