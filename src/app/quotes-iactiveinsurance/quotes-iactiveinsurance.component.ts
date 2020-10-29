import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-quotes-iactiveinsurance',
  templateUrl: './quotes-iactiveinsurance.component.html',
  styleUrls: ['./quotes-iactiveinsurance.component.scss']
})
export class QuotesIactiveinsuranceComponent implements OnInit {

  constructor(public dataservice:DataterminalService) { }

  ngOnInit(): void {
  }

}
