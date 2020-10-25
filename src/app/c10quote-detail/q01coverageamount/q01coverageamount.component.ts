import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q01coverageamount',
  templateUrl: './q01coverageamount.component.html',
  styleUrls: ['./q01coverageamount.component.scss']
})
export class Q01coverageamountComponent implements OnInit {

  coverageAmount: any = [
    {
      icon: '../../../assets/icn-sprite-coverages-100.png',
      price: 0,
      style: "col-4 pl-5",
      title: 'PERSONAL LIABILITY',
      minvalue: 0,
      maxvalue: 1000000,
      incrtoggle: 10000,
      domid: 'personalliability',
      text: "If you accidentally cause damage to others or their property, this is the maximum we’ll pay.For example, if you break someone’s window while playing golf in your backyard we'll cover it.",
    }, {
      icon: '../../../assets/icn-sprite-coverages-100.png',
      price: 10000,
      style: "col-4 p-0",
      title: 'CONTENTS',
      minvalue: 10000,
      maxvalue: 200000,
      incrtoggle: 5000,
      domid: 'contents',
      text: 'Try to estimate the total value of your stuff as new, such as electronics, clothing, furniture, bikes etc. For any single items worth more than 5.000 € each, add them to your policy here',
    }, {
      icon: '../../../assets/icn-sprite-coverages-100.png',
      price: 0,
      style: "col-4 pr-5",
      title: 'TEMP ACCOMMODATION',
      minvalue: 0,
      maxvalue: 50000,
      incrtoggle: 5000,
      domid: 'tempaccommodation',
      text: "If your place becomes unlivable, we'll put you up in a nice hotel or Airbnb. We'll also include living expenses to get you back on your feet. This is the max that we'll pay in such an event."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
