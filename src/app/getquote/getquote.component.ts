import { Component, OnInit } from '@angular/core';
import { DataterminalService } from "../dataterminal.service";
@Component({
  selector: 'app-getquote',
  templateUrl: './getquote.component.html',
  styleUrls: ['./getquote.component.scss']
})
export class GetquoteComponent implements OnInit {

  quotsview: any = false;
  testjson:any;
  getQuotesnext:any = true;

  currentdate:any = new Date();
  currentyear:any = this.currentdate.getFullYear()

  //object data
  quotesobject:any = {}
  email:any;
  month:any;
  day:any;
  year:any;

  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      this.testjson = el.insuracevisiter_info;
      this.quotsview = el.viewinfo === "getquotsview"
    })
  }

  ngOnInit(): void {
  }

  quotesCheck(evt: any){
    if (evt.target.id === "privacyterm") {
      this.getQuotesnext = (!evt.target.checked)
      if(evt.target.checked) {
        this.quotesobject['email'] = this.email;
        this.quotesobject['dob'] = this.month+'/'+this.day+'/'+this.year
      }
      if(!evt.target.checked) {
        delete this.quotesobject['email']
        delete this.quotesobject['dob']
      }
    }
    if (evt.target.id === "receivediscount") {
      this.quotesobject['notifyuser'] = (evt.target.checked) ? 'yes' : 'no'
    }
  }
}
