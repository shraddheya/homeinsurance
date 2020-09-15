import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-quotesdetail',
  templateUrl: './quotesdetail.component.html',
  styleUrls: ['./quotesdetail.component.scss']
})
export class QuotesdetailComponent implements OnInit {

  quotesdetailView: any = false;
  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      if (el.viewinfo === "quotesview") {
        this.quotesdetailView = true
      }
    })
  }

  ngOnInit(): void {
  }

}
