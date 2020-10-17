import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-quotes-hlinkpolicy',
  templateUrl: './quotes-hlinkpolicy.component.html',
  styleUrls: ['./quotes-hlinkpolicy.component.scss']
})
export class QuotesHlinkpolicyComponent implements OnInit {

  constructor(public dataservice:DataterminalService) { }

  ngOnInit(): void {
  }

}
