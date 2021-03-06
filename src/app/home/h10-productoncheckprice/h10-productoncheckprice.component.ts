import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../../dataterminal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-h10-productoncheckprice',
  templateUrl: './h10-productoncheckprice.component.html',
  styleUrls: ['./h10-productoncheckprice.component.scss']
})
export class H10ProductoncheckpriceComponent implements OnInit {

  asIs(a, b) {
    return a;
  }
  buttDisabled = true;
  producttype = {
    'Renters insurance': {
      img: 'assets/renters.png',
      imgactive: 'assets/renters_selected.png',
      selectedview: this.ds.allData["product"] === "Renters insurance"
    },
    'Homeowners insurance': {
      img: 'assets/houseowner.png',
      imgactive: 'assets/houseowner_selected.png',
      selectedview: this.ds.allData["product"] === "Homeowners insurance"
    },
    'pet insurance': {
      img: 'assets/pet.png',
      imgactive: 'assets/pet_selected.png',
      selectedview: this.ds.allData["product"] === "pet insurance"
    }
  };
  constructor(public ds: DataterminalService, public router: Router) { }

  ngOnInit(): void { }
  changed(key: string) {
    this.ds.allData["product"] = key;
    for (let item in this.producttype) this.producttype[item].selectedview = key === item;
    this.buttDisabled = false;
  }
  clicked() {
    this.router.navigate(['c01name'])
  }

}
