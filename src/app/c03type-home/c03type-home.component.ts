import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c03type-home',
  templateUrl: './c03type-home.component.html',
  styleUrls: ['./c03type-home.component.scss']
})
export class C03typeHomeComponent implements OnInit {
  asIs(a,b) {
    return a;
  }
  buttDisabled = true;
  hometype = { };
  constructor( public ds: DataterminalService ) {
    this.hometype = {
      Apartment: {
        imgsvg: 'assets/oursurplusassetsSVG/SVG/12.svg',
        selectedview: this.ds.allData["c03type-home"] === "Apartment"
      },
      'Single family house': {
        imgsvg: 'assets/oursurplusassetsSVG/SVG/24.svg',
        selectedview: this.ds.allData["c03type-home"] === "Single family house"
      },
      Duplex: {
        imgsvg: 'assets/oursurplusassetsSVG/SVG/04.svg',
        selectedview: this.ds.allData["c03type-home"] === "Duplex"
      }
    };
  }

  ngOnInit(): void {
    if (this.ds.allData["c03type-home"].length > 1) this.buttDisabled = false;
  }
  changed(key: string) {
    this.ds.allData["c03type-home"] = key;
    for (let item in this.hometype) this.hometype[item].selectedview = key === item;
    this.buttDisabled = false;
  }
  clicked() {
    this.ds.changepage();
  }
}
