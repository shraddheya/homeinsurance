import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-bcoverageamount',
  templateUrl: './quotes-bcoverageamount.component.html',
  styleUrls: ['./quotes-bcoverageamount.component.scss']
})
export class QuotesBcoverageamountComponent implements OnInit {

  coverageAmount: any = [
    {
      icon: 'https://www.lemonade.com/assets/desktop-onboarding/icn-sprite-coverages-100.png',
      price: '5.000.000 €',
      style: "col-4 pl-5",
      title: 'PERSONAL LIABILITY',
      minvalue: 0,
      maxvalue: 1000000,
      incrtoggle: 10000,
      text: "If you accidentally cause damage to others or their property, this is the maximum we’ll pay.For example, if you break someone’s window while playing golf in your backyard we'll cover it.",
    },
    {
      icon: 'https://www.lemonade.com/assets/desktop-onboarding/icn-sprite-coverages-100.png',
      price: '100.000 €',
      style: "col-4 p-0",
      title: 'CONTENTS',
      minvalue: 10000,
      maxvalue: 200000,
      incrtoggle: 5000,
      text: 'Try to estimate the total value of your stuff as new, such as electronics, clothing, furniture, bikes etc. For any single items worth more than 5.000 € each, add them to your policy here',
    },
    {
      icon: 'https://www.lemonade.com/assets/desktop-onboarding/icn-sprite-coverages-100.png',
      price: '20.000 €',
      style: "col-4 pr-5",
      title: 'TEMP ACCOMMODATION',
      minvalue: 0,
      maxvalue: 50000,
      incrtoggle: 5000,
      text: "If your place becomes unlivable, we'll put you up in a nice hotel or Airbnb. We'll also include living expenses to get you back on your feet. This is the max that we'll pay in such an event."
    }]
  constructor() { }

  ngOnInit(): void {
  }

  cvrgCalculation(data: any, caid: any) {
    var x = data.minvalue;
    var result;
    if (caid.name === 'increament') {
      console.log('Before Increament' , result)
      for (x = data.minvalue; x < data.maxvalue; x+=data.incrtoggle) {
        result = x
      }
      console.log('After Increament', result)
    }
  }

}
