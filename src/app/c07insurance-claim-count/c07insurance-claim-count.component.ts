import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c07insurance-claim-count',
  templateUrl: './c07insurance-claim-count.component.html',
  styleUrls: ['./c07insurance-claim-count.component.scss']
})
export class C07insuranceClaimCountComponent implements OnInit {
  buttDisable = true;
  opts = [
    "No",
    "Only One",
    "Two",
    "More than two"
  ];
  constructor( public dataservice: DataterminalService ) { }

  ngOnInit(): void {
  }

  changed(val: string) {
    this.dataservice.allData["c07insurance-claim-count"] = val;
    this.buttDisable = false;
  }
  clicked() {
    this.dataservice.changepage();
  }
}
