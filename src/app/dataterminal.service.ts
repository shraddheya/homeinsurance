import { Injectable, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataterminalService {
  pageList = ["home","c01name", "c02address", "c03type-home", "c04primaryresidence", "c05size-home", "c06security", "c07members", "c08assets", "c09get-quote","c10loading", "c11builthome-year", "c12insurance-claim-count", "c13quote-detail", "c14pdf"]
  initVals = JSON.stringify({
    "home": { name: "", price: 0 },
    "c01name": { firstName: "", lastName: "" },
    "c02address": { housenumber: "", pincode: "", address: "" },
    "c03type-home": "",
    "c04primaryresidence": "",
    "c05size-home": 0,
    "c06security": ['',],
    "c07members": "",
    "c08assets": "",
    "c09get-quote": "",
    "c10loading": "fakeval",
    "c11builthome-year": "",
    "c12insurance-claim-count": "",
    "c13quote-detail": {
      q01coverageamount: {
        'PERSONAL LIABILITY': 0,
        'CONTENTS': 0,
        'TEMP ACCOMMODATION': 0
      },
      q02highvalueitems: {
        'Jewlery': 0,
        'Bicycles': 0,
        'Cameras': 0,
        'Electronics': 0,
        'Music Equipment': 0,
        'Other': 0,
      },
      q03superpowers: ["",],
      q05deductibles: ["",],
    }
  });
  allData = JSON.parse(localStorage.getItem('allData') || this.initVals);
  dtblank = JSON.parse(this.initVals);
  currPage = parseInt(localStorage.getItem('currPage')) || 0;
  scroll = "height:" +screen.height;

  constructor(private route: Router) {
    console.log(screen.height)
    this.route.navigate([window.location.pathname]);
    this.dtblank.c06security = [];
    this.dtblank.c10loading = '';
    this.dtblank["c13quote-detail"].q05deductibles = [];
  }
  changepage(goForward = true) {
    if (goForward) this.currPage++;
    else this.currPage--;
    if (this.currPage < 0) this.currPage = 0;
    if (this.currPage > this.pageList.length - 1) this.currPage = this.pageList.length - 1;
    this.gotopage();
  }
  gotopage(idx = this.currPage) {
    localStorage.setItem('currPage', idx.toString());
    localStorage.setItem('allData', JSON.stringify(this.allData));
    this.route.navigate([this.pageList[idx]])
  }
  homepage(mode: any, data: any) {
    switch (mode) {
      case 'help':
        return
    }
  }
  domFunction(mode: any) {
    switch(mode){
      case 'reset':
        this.allData = JSON.parse(this.initVals)
        localStorage.setItem('currPage', '0');
        localStorage.setItem('allData', JSON.stringify(this.allData));
        this.gotopage(0);
      return
    }
  }
}
