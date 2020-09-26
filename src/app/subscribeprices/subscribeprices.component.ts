import { Component, OnInit, ViewChild } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-subscribeprices',
  templateUrl: './subscribeprices.component.html',
  styleUrls: ['./subscribeprices.component.scss']
})
export class SubscribepricesComponent implements OnInit {
  pricepackage: any = true;
  pricescard: any = [
    {
      title1: 'Contents',
      title2: 'Insurance',
      text: 'Monthly, From',
      price: 2,
      buttontext: 'GET CONTENTS'
    },
    {
      title1: 'Liability',
      title2: 'Insurance',
      text: 'Monthly, From',
      price: 2,
      buttontext: 'GET LIABILITY'
    },
    {
      title1: 'Contents and',
      title2: 'Liability Package',
      text: 'Monthly, From',
      price: 4,
      buttontext: 'GET BOTH'
    },

  ];
  projEnvironment:any = environment
  @ViewChild('resetmodal', { static: true }) private resetmodal: ModalDirective

  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      if (Object.keys(el).length !== 0) {
        this.pricepackage = el.viewinfo === "pricepanel";
      }
    });
    dataservice.domEffectShared.subscribe((el: any) => {
      if (el.mode === "reset") {
        this.resetmodal.show()
      }
    })
  }

  ngOnInit(): void {
  }

}
