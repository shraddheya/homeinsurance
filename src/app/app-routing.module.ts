import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribepricesComponent } from './subscribeprices/subscribeprices.component';

const routes: Routes = [
  {
    path:'' , component:SubscribepricesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
