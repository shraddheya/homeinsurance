import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataterminalService {
  pageList = ["c00plan", "c01name", "c02address", "c03type-home", "c04size-home", "c05security", "c06members", "c07insurance-claim-count", "c08assets", "c09get-quote", "c10quote-detail"]
  allData = JSON.parse(JSON.stringify({
    "c00plan": { name: "", price: 0 },
    "c01name": { firstName: "", lastName: "" },
    "c02address": { housenumber: "", pincode: "", address: "" },
    "c03type-home": "",
    "c04size-home": 0,
    "c05security": ['',], 
    "c06members": "", 
    "c07insurance-claim-count": "", 
    "c08assets": "", 
    "c09get-quote": "", 
    "c10quote-detail": {
      q01coverageamount: {},
      q02highvalueitems: {},
      q03superpowers: [],
    }
  }));
  dtblank = JSON.parse(JSON.stringify(this.allData));
  currPage = 0

  constructor(private route: Router) { }
  changepage(goForward = true) {
    if (goForward) this.currPage++;
    else this.currPage--;
    if (this.currPage < 0) this.currPage = 0;
    if (this.currPage > this.pageList.length - 1) this.currPage = this.pageList.length - 1;
    this.gotopage();
  }
  gotopage(idx = this.currPage) {
    this.route.navigate([this.pageList[idx]]);
  }
  domFunction(data: any) { }
}
