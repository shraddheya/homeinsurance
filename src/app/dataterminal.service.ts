import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataterminalService {
  pageList = ["c00plan", "c01name", "c02address", "c03type-home", "c04size-home", "c05security", "c06menbers", "c07insurance-claim-count", "c08assets", "c09get-quote", "c10quote-detail"]
  allData = {
    info_details: {
      // c00plan: null
      c00plan: { name: "something", price: 4 },
      c01name: { firstName: "sd", lastName: "gfds" },
      c02address: { housenumber: "", pincode: "", address: "" },
      "c03type-home": "",
      "c04size-home": 11,
    }
  }
  currPage = 0


  constructor(private route: Router) { }

  checkAndRoute(pageName = 'c00plan') {
    let idxTarget = this.pageList.indexOf(pageName);
    this.pageList.forEach((page, idx) => {
      if (idxTarget < idx) return pageName;
      if (! this.allData.info_details[page]) return page;
    });
    return pageName;
  }
  changepage(goForward = true) {
    this.currPage = this.currPage + (goForward ? 1 : -1);
    this.route.navigate([this.checkAndRoute(this.pageList[this.currPage])]);
  }
  domFunction(data: any) { }
}
