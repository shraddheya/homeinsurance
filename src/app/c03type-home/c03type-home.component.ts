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
  imgc03:any
  teststring:any;
  constructor( public ds: DataterminalService ) {
    this.hometype = {
      Apartment: {
        //imgsvg: 'assets/oursurplusassetsSVG/SVG/12.svg',
        imgsvg: 'assets/oursurplusassetsSVG/SVG210106/apartment_unchecked.svg',
        imgsvg_c: 'assets/oursurplusassetsSVG/SVG210106/apartment_checked.svg',
        selectedview: this.ds.allData["c03type-home"] === "Apartment"
      },
      'Single family house': {
        //imgsvg: 'assets/oursurplusassetsSVG/SVG/24.svg',
        imgsvg: 'assets/oursurplusassetsSVG/SVG210106/singlefamilyhome_unchecked.svg',
        imgsvg_c: 'assets/oursurplusassetsSVG/SVG210106/singlefamilyhome_checked.svg',
        selectedview: this.ds.allData["c03type-home"] === "Single family house"
      },
      Duplex: {
        //imgsvg: 'assets/oursurplusassetsSVG/SVG/04.svg',
        imgsvg: 'assets/oursurplusassetsSVG/SVG210106/duplex_unchecked.svg',
        imgsvg_c: 'assets/oursurplusassetsSVG/SVG210106/duplex_checked.svg',
        selectedview: this.ds.allData["c03type-home"] === "Duplex"
      }
    };
  }

  ngOnInit(): void {
    if (this.ds.allData["c03type-home"].length > 1) this.buttDisabled = false;
  }
  changed(key: string) {
    this.teststring = "working"
    this.ds.allData["c03type-home"] = key;
    for (let item in this.hometype) this.hometype[item].selectedview = key === item;
    this.buttDisabled = false;
  }
  clicked() {
    this.ds.changepage();
  }
}
