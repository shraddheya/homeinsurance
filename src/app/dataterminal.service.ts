import { Injectable, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataterminalService {
  pageList = ["c00plan", "c01name", "c02address", "c03type-home", "c04size-home", "c05security", "c06members", "c07insurance-claim-count", "c08assets", "c09get-quote", "c10quote-detail", "c11pdf"]
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
      q01coverageamount: {
        'PERSONAL LIABILITY': 0, 
        'CONTENTS': 0, 
        'TEMP ACCOMMODATION': 0
      },
      q02highvalueitems: {
        'Jewlery' : 0,
        'Bicycles' : 0,
        'Cameras' : 0,
        'Electronics' : 0,
        'Music Equipment' : 0,
        'Other' : 0,
      },
      q03superpowers: ["",],
      q05deductibles: ["",],
    }
  }));
  dtblank = JSON.parse(JSON.stringify(this.allData));
  currPage = 0

  constructor(private route: Router) { 
    this.dtblank.c05security = [];
    this.dtblank["c10quote-detail"].q05deductibles = [];
  }
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
