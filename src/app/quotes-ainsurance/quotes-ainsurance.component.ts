import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-quotes-ainsurance',
  templateUrl: './quotes-ainsurance.component.html',
  styleUrls: ['./quotes-ainsurance.component.scss']
})
export class QuotesAinsuranceComponent implements OnInit {

  message: any;
  total: any = 9;
  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      this.message = el.insuracevisiter_info;
    })
  }
  ngOnInit(): void {
  }
}
