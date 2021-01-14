import { Component, Input, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() amount: number;
  amount1:any
  companyname = "Oursurplus"

  constructor(public ds: DataterminalService) {
    this.amount1 = ds.totalamount;
    this.loadStripe();
  }

  ngOnInit() {
  }

  pay(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sySuhYAA1h9AFteXhD5Q4qkV',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        alert('Token Created!!');
      }
    });

    handler.open({
      name: this.companyname,
      description: '',
      //amount: amount * 100
      amount: amount
    });
  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }
}
