import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-quotesdetail',
  templateUrl: './quotesdetail.component.html',
  styleUrls: ['./quotesdetail.component.scss']
})
export class QuotesdetailComponent implements OnInit {

  quotesdetailView: any = false;
  quotesc:any;
  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      this.quotesdetailView = el.viewinfo === "quotesview";
      this.quotesc = (el.insuracevisiter_info.assetspurchase === 'yes') ? true : false;
      //this.quotesc = true
    })
  }

  ngOnInit(): void {
  }

}
