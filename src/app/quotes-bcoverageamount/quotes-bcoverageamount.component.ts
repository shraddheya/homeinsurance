import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-quotes-bcoverageamount',
  templateUrl: './quotes-bcoverageamount.component.html',
  styleUrls: ['./quotes-bcoverageamount.component.scss']
})
export class QuotesBcoverageamountComponent implements OnInit {

  coverageAmount: any = [
    {
      icon: 'https://www.lemonade.com/assets/desktop-onboarding/icn-sprite-coverages-100.png',
      price: 0,
      style: "col-4 pl-5",
      title: 'PERSONAL LIABILITY',
      minvalue: 0,
      maxvalue: 1000000,
      incrtoggle: 10000,
      domid: 'personalliability',
      text: "If you accidentally cause damage to others or their property, this is the maximum we’ll pay.For example, if you break someone’s window while playing golf in your backyard we'll cover it.",
    },
    {
      icon: 'https://www.lemonade.com/assets/desktop-onboarding/icn-sprite-coverages-100.png',
      price: 10000,
      style: "col-4 p-0",
      title: 'CONTENTS',
      minvalue: 10000,
      maxvalue: 200000,
      incrtoggle: 5000,
      domid: 'contents',
      text: 'Try to estimate the total value of your stuff as new, such as electronics, clothing, furniture, bikes etc. For any single items worth more than 5.000 € each, add them to your policy here',
    },
    {
      icon: 'https://www.lemonade.com/assets/desktop-onboarding/icn-sprite-coverages-100.png',
      price: 0,
      style: "col-4 pr-5",
      title: 'TEMP ACCOMMODATION',
      minvalue: 0,
      maxvalue: 50000,
      incrtoggle: 5000,
      domid: 'tempaccommodation',
      text: "If your place becomes unlivable, we'll put you up in a nice hotel or Airbnb. We'll also include living expenses to get you back on your feet. This is the max that we'll pay in such an event."
    }]
  @ViewChild('covrgamtinput') covrgamtinput: ElementRef;

  constructor(public dataservice:DataterminalService) { }

  ngOnInit(): void {
  }

  cvrgCalculation(data: any, caid: any) {
    var oldValue = data.price;
    if (caid.name === "+") {
      if (parseFloat(oldValue) !== data.maxvalue) {
        this.coverageAmount.forEach(el => {
          if(el.domid === caid.id){
            el.price = parseFloat(oldValue) + data.incrtoggle
          }
        });
      }
    }
    if (caid.name === "-") {
      if (parseFloat(oldValue) !== data.minvalue) {
        this.coverageAmount.forEach(el => {
          if(el.domid === caid.id){
            el.price = parseFloat(oldValue) - data.incrtoggle
          }
        });
      }
    }
  }
}
