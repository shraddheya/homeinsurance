import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C01nameComponent } from './c01name/c01name.component';
import { C02adderssComponent } from './c02adderss/c02adderss.component';
import { C03typeHomeComponent } from './c03type-home/c03type-home.component';
import { C04primaryresidenceComponent } from './c04primaryresidence/c04primaryresidence.component';
import { C05sizeHomeComponent } from './c05size-home/c05size-home.component';
import { C06securityComponent } from './c06security/c06security.component';
import { C07membersComponent } from './c07members/c07members.component';
import { C08assetsComponent } from './c08assets/c08assets.component';
import { C09getQuoteComponent } from './c09get-quote/c09get-quote.component';
import { C10loadingpageComponent } from './c10loadingpage/c10loadingpage.component';
import { C11builthomeYearComponent } from './c11builthome-year/c11builthome-year.component';
import { C12insuranceClaimCountComponent } from './c12insurance-claim-count/c12insurance-claim-count.component';
import { C13quoteDetailComponent } from './c13quote-detail/c13quote-detail.component';
import { C14pdfComponent } from './c14pdf/c14pdf.component';
// import { H10ProductoncheckpriceComponent } from './home/h10-productoncheckprice/h10-productoncheckprice.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'c01name', component: C01nameComponent },
  { path: 'c02address', component: C02adderssComponent },
  { path: 'c03type-home', component: C03typeHomeComponent },
  { path: 'c04primaryresidence', component: C04primaryresidenceComponent },
  { path: 'c05size-home', component: C05sizeHomeComponent },
  { path: 'c06security', component: C06securityComponent },
  { path: 'c07members', component: C07membersComponent },
  { path: 'c08assets', component: C08assetsComponent },
  { path: 'c09get-quote', component: C09getQuoteComponent },
  { path: 'c10loading', component: C10loadingpageComponent },
  { path: 'c11builthome-year', component: C11builthomeYearComponent },
  { path: 'c12insurance-claim-count', component: C12insuranceClaimCountComponent },
  { path: 'c13quote-detail', component: C13quoteDetailComponent },
  { path: 'c14pdf', component: C14pdfComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
