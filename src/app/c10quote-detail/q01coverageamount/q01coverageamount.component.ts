import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../../dataterminal.service';

@Component({
  selector: 'app-q01coverageamount',
  templateUrl: './q01coverageamount.component.html',
  styleUrls: ['./q01coverageamount.component.scss']
})
export class Q01coverageamountComponent implements OnInit {
  asIs(a: any, b: any) {
    return a;
  }
  coverageAmount: any = {
    'PERSONAL LIABILITY': {
      icon: '../../../assets/icn-sprite-coverages-100.png',
      price: 0,
      style: "col-4 pl-5",
      minvalue: 0,
      maxvalue: 1000000,
      incrtoggle: 10000,
      text: "If you accidentally cause damage to others or their property, this is the maximum we’ll pay.For example, if you break someone’s window while playing golf in your backyard we'll cover it.",
    }, 
    'CONTENTS': {
      icon: '../../../assets/icn-sprite-coverages-100.png',
      price: 10000,
      style: "col-4 p-0",
      minvalue: 10000,
      maxvalue: 200000,
      incrtoggle: 5000,
      text: 'Try to estimate the total value of your stuff as new, such as electronics, clothing, furniture, bikes etc. For any single items worth more than 5.000 € each, add them to your policy here',
    }, 
    'TEMP ACCOMMODATION': {
      icon: '../../../assets/icn-sprite-coverages-100.png',
      price: 0,
      style: "col-4 pr-5",
      minvalue: 0,
      maxvalue: 50000,
      incrtoggle: 5000,
      text: "If your place becomes unlivable, we'll put you up in a nice hotel or Airbnb. We'll also include living expenses to get you back on your feet. This is the max that we'll pay in such an event."
    }
  };
  constructor( public dataservice: DataterminalService ) { }

  ngOnInit(): void {
  }

  cvrgCalculation(key: string, op: string) {
    if ( op === '+' ) this.coverageAmount[key].price = Math.min(this.coverageAmount[key].maxvalue, this.coverageAmount[key].price + this.coverageAmount[key].incrtoggle);
    else this.coverageAmount[key].price = Math.max(this.coverageAmount[key].minvalue, this.coverageAmount[key].price - this.coverageAmount[key].incrtoggle);
    this.dataservice.allData["c10quote-detail"].q01coverageamount[key] = this.coverageAmount[key].price;
  }
}
