import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C00planComponent } from './c00plan/c00plan.component';
import { C01nameComponent } from './c01name/c01name.component';
import { C02adderssComponent } from './c02adderss/c02adderss.component';
import { C03typeHomeComponent } from './c03type-home/c03type-home.component';
import { C04sizeHomeComponent } from './c04size-home/c04size-home.component';
import { C05securityComponent } from './c05security/c05security.component';
import { C06membersComponent } from './c06members/c06members.component';
import { C07insuranceClaimCountComponent } from './c07insurance-claim-count/c07insurance-claim-count.component';
import { C08assetsComponent } from './c08assets/c08assets.component';
import { C09getQuoteComponent } from './c09get-quote/c09get-quote.component';
import { C10quoteDetailComponent } from './c10quote-detail/c10quote-detail.component';
const routes: Routes = [
  {path: '', redirectTo: 'c00plan', pathMatch: 'full'},
  {path: 'c00plan', component: C00planComponent },
  {path: 'c01name', component: C01nameComponent },
  {path: 'c02address', component: C02adderssComponent },
  { path: 'c03type-home', component: C03typeHomeComponent},
  { path: 'c04size-home', component: C04sizeHomeComponent},
  { path: 'c05security', component: C05securityComponent},
  { path: 'c06menbers', component: C06membersComponent},
  { path: 'c07insurance-claim-count', component: C07insuranceClaimCountComponent},
  { path: 'c08assets', component: C08assetsComponent},
  { path: 'c09get-quote', component: C09getQuoteComponent},
  { path: 'c10quote-detail', component: C10quoteDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
