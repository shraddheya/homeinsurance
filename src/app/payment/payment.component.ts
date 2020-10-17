import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  price:any = 200
  constructor(public dataservice: DataterminalService) { }

  ngOnInit() {
    this.loadStripe();
  }

  pay(amount) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sySuhYAA1h9AFteXhD5Q4qkV',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
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
