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
  hometype = {
    Apartment: {
      img:'../../assets/apartment-4a8897f29eed3d4213146db08afe4e9929ad64f22e8dd081b56007e18ff0d346.png',
      imgactive:'../../assets/apartment_active-7af90d4284ac71df4c7893b737aeab9783c7a6206f9023f663bb808835567df5.png',
      selectedview: this.dataservice.allData["c03type-home"] === "Apartment"
    },
    'Single family house': {
      img:'../../assets/single_family-32dc83504c5ef74c8db5e936f0af997bf48c9113d2ccb8be8c28fb2719b53762.png',
      imgactive:'../../assets/single_family_active-504dfc0a6e2d7f6691dcc9210f6e074ee5698058363544d32345adbc6a5a9859.png',
      selectedview: this.dataservice.allData["c03type-home"] === "Single family house"
    },
    Duplex: {
      img:'../../assets/duplex-d0b79bf73cdf0dd2377d2fca7f8f3b2eaf3799d1de9629bc17f883b55baa4ba8.png',
      imgactive:'../../assets/duplex_active-cd72de325e858dea4f88eb4b38fc6ff43eb82146aefab80dd1a54143c578ac10.png',
      selectedview: this.dataservice.allData["c03type-home"] === "Duplex"
    }
  };
  constructor( public dataservice: DataterminalService ) { }

  ngOnInit(): void {
    if (this.dataservice.allData["c03type-home"].length > 1) this.buttDisabled = false;
  }
  changed(key: string) {
    this.dataservice.allData["c03type-home"] = key;
    for (let item in this.hometype) this.hometype[item].selectedview = key === item;
    this.buttDisabled = false;
  }
  clicked() {
    this.dataservice.changepage();
  }
}
