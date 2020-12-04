import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-c12insurance-claim-count',
  templateUrl: './c12insurance-claim-count.component.html',
  styleUrls: ['./c12insurance-claim-count.component.scss']
})
export class C12insuranceClaimCountComponent implements OnInit {

  buttDisable = true;
  opts = [
    "No",
    "Only One",
    "Two",
    "More than two"
  ];
  constructor( public ds: DataterminalService ) { }

  ngOnInit(): void {
    if (this.ds.allData["c12insurance-claim-count"].length > 1) this.buttDisable = false;
  }

  changed(val: string) {
    this.ds.allData["c12insurance-claim-count"] = val;
    this.buttDisable = false;
  }
  clicked() {
    this.ds.changepage();
  }

}
