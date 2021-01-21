import { Injectable, ɵConsole } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class DataterminalService {
  pageList = ["", "c01name", "c02address", "c03type-home", "c04primaryresidence", "c05size-home", "c06security", "c07members", "c08assets", "c09get-quote", "c10loading", "c11builthome-year", "c12insurance-claim-count", "c13quote-detail", "c14pdf"]
  navlinks = ['Home', 'FAQ', 'Claims', 'Giveback', 'Policy 2.0'];
  initVals = JSON.stringify({
    "": { name: "", price: 0 },
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
        'JEWLERY': 0,
        'BICYCLES': 0,
        'CAMERAS': 0,
        'ELECTRONICS': 0,
        'MUSIC EQUIPMENT': 0,
        'OTHER': 0,
      },
      q03superpowers: ["",],
      q05deductibles: ["",],
    }
  });

  allData = JSON.parse(localStorage.getItem('allData') || this.initVals);
  dtblank = JSON.parse(this.initVals);
  currPage = parseInt(localStorage.getItem('currPage')) || 0;
  scroll = "height:" + screen.height;
  momentZone = moment()
  totalamount: any = 0
  pageAdd = { idx: 0, uri: '' };

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.dtblank.c06security = [];
    this.dtblank.c10loading = '';
    this.dtblank["c13quote-detail"].q05deductibles = [];
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let uri = val.url.substr(1);
        let idx = this.pageList.indexOf(uri);
        this.pageAdd = { idx, uri };
        this.currPage = idx;
        let gotoPageIdx = idx;
        for (let i = 0; i < idx; i++) {
          let pgnm = this.pageList[i];
          if (JSON.stringify(this.allData[pgnm]) === JSON.stringify(this.dtblank[pgnm])) {
            gotoPageIdx = i;
            break;
          }
        }
        localStorage.setItem('currPage', gotoPageIdx.toString());
        console.log('gotoPageIdx', gotoPageIdx, 'idx', idx, 'gotoPageIdx !== idx', gotoPageIdx !== idx);
        if (gotoPageIdx !== idx) {
          this.gotopage(gotoPageIdx);
        }
      }
    })
  }

  testFunction(object: any) {
    var result: any;
    switch (object.mode) {
      case 'checkurl':
        result = object.data.value;
        break
    }
    return result
  }

  changepage(goForward = true) {
    // console.log("Changepage ==> " + goForward)
    // console.log("val ==> ", this.allData, this.dtblank);
    if (goForward) this.currPage = parseInt(localStorage.getItem('currPage')) + 1;
    else {
      this.currPage = parseInt(localStorage.getItem('currPage')) - 1;
      if (this.currPage === this.pageList.indexOf('c10loading')) this.currPage = this.currPage - 1
    }
    if (this.currPage < 0) this.currPage = 1;
    if (this.currPage > this.pageList.length - 1) this.currPage = this.pageList.length - 1;
    // console.log(this.currPage);
    this.gotopage(this.currPage);
  }
  gotopage(idx = this.currPage, calledfrom = false) {
    // console.log("Index of Page ==> " + idx, this.allData);
    calledfrom && console.log("called From : ", calledfrom);
    localStorage.setItem('allData', JSON.stringify(this.allData));
    this.router.navigate([`/${this.pageList[idx]}/`]);
  }

  homepage(mode: any, data: any) {
    switch (mode) {
      case 'help':
        return
    }
  }

  domFunction(mode: any) {
    switch (mode) {
      case 'reset':
        this.allData = JSON.parse(this.initVals)
        localStorage.setItem('currPage', '1');
        localStorage.setItem('allData', JSON.stringify(this.allData));
        //this.gotopage(1);
        this.router.navigate([`/${this.pageList[1]}`])
        return
    }
  }
}
