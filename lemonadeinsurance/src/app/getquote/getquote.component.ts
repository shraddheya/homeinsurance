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
  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      this.testjson = el.insuracevisiter_info;
      this.quotsview = el.viewinfo === "getquotsview"
    })
  }

  ngOnInit(): void {
  }

}
