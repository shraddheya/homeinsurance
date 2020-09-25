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
      price:'5.000.000 €',
      style:"col-4 pl-5",
      title: 'PERSONAL LIABILITY',
      text: "If you accidentally cause damage to others or their property, this is the maximum we’ll pay.For example, if you break someone’s window while playing golf in your backyard we'll cover it.",
    },
    {
      icon:'https://www.lemonade.com/assets/desktop-onboarding/icn-sprite-coverages-100.png',
      price:'100.000 €',
      style:"col-4 p-0",
      title: 'CONTENTS',
      text: 'Try to estimate the total value of your stuff as new, such as electronics, clothing, furniture, bikes etc. For any single items worth more than 5.000 € each, add them to your policy here',
    },
    {
      icon: 'https://www.lemonade.com/assets/desktop-onboarding/icn-sprite-coverages-100.png',
      price:'20.000 €',
      style:"col-4 pr-5",
      title: 'TEMP ACCOMMODATION',
      text:"If your place becomes unlivable, we'll put you up in a nice hotel or Airbnb. We'll also include living expenses to get you back on your feet. This is the max that we'll pay in such an event."
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
