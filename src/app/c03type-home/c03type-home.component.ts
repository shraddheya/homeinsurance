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
    //img: 'assets/SVG210106/apartment_unchecked.svg',
    this.hometype = {
      Apartment: {
        img: 'assets/oursurplusassetsPNG/Appartment.png',
        imgactive: 'assets/oursurplusassetsPNG/Appartment S.png',
        selectedview: this.ds.allData["c03type-home"] === "Apartment"
      },
      'Single family house': {
        img: 'assets/oursurplusassetsPNG/Single Home.png',
        imgactive: 'assets/oursurplusassetsPNG/Single Home S.png',
        selectedview: this.ds.allData["c03type-home"] === "Single family house"
      },
      Duplex: {
        img: 'assets/oursurplusassetsPNG/Duplex.png',
        imgactive: 'assets/oursurplusassetsPNG/Duplex S.png',
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
