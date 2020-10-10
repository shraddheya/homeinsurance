import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import jsPDF from 'jspdf';
import { SubscribepricesComponent } from './subscribeprices/subscribeprices.component';
import { PdfComponent } from './pdf/pdf.component'

const routes: Routes = [
  { path: '' , component: SubscribepricesComponent },
  { path: 'q', component: PdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
