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
    }
  }
}
