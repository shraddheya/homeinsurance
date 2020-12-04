import { Component, OnInit } from '@angular/core';
import { ActivationEnd, NavigationEnd, ResolveEnd, Router } from '@angular/router';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-butt-back',
  templateUrl: './butt-back.component.html',
  styleUrls: ['./butt-back.component.scss']
})
export class ButtBackComponent implements OnInit {

  disp: boolean;

  goBack() {
    this.ds.changepage(false);
  }

  constructor(public ds: DataterminalService, private router: Router) {
    //#region default values
    // ds.allData = {
    //   "home": {
    //     "name": "Contents Contents",
    //     "price": 2
    //   },
    //   "c01name": {
    //     "firstName": "shraddheya",
    //     "lastName": "shrivastava"
    //   },
    //   "c02address": {
    //     "housenumber": "A404 new cosmopolitan plot33 dwarka sector 10 new delhi",
    //     "address": "Indore,Madhyapradesh",
    //     "pincode": "452010"
    //   },
    //   "c03type-home": "Single family house",
    //   "c04primaryresidence": 10,
    //   "c05size-home": 0,
    //   "c06security": [""],
    //   "c07members": "c",
    //   "c08assets": true,
    //   "c09get-quote": {
    //     "email": "shraddheya.shrivastava@gmail.com",
    //     "dob": "2002-10-29",
    //     "receivediscount": true,
    //     "privacyterm": true
    //   },
    //   "c10loading":"",
    //   "c11builthome-year": "",
    //   "c12insurance-claim-count": "No",
    //   "c13quote-detail": {
    //     "q01coverageamount": {
    //       'PERSONAL LIABILITY': 40000,
    //       'CONTENTS': 10000,
    //       'TEMP ACCOMMODATION': 20000,
    //     },
    //     "q02highvalueitems": {
    //       'Jewlery': 5000,
    //       'Bicycles': 5000,
    //       'Cameras': 5000,
    //       'Electronics': 5000,
    //       'Music Equipment': 5000,
    //       'Other': 5000,
    //     },
    //     q03superpowers: ["",],
    //   }
    // };
    //#endregion

    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let idx = ds.pageList.indexOf(val.url.substr(1));
        if (idx === ds.pageList.indexOf('c10loading')) idx = idx - 1;
        this.disp = idx > 0;
        if (idx < 0) return;
        console.log(idx)
        let gotoPageIdx = idx;
        for (let i = 0; i < idx; i++) {
          let pgnm = ds.pageList[i];
          if (JSON.stringify(ds.allData[pgnm]) === JSON.stringify(ds.dtblank[pgnm])) {
            gotoPageIdx = i;
            break;
          }
        }
        if (gotoPageIdx !== idx) {
          ds.currPage = gotoPageIdx;
          ds.gotopage(gotoPageIdx);
        }
      }
    })
  }

  ngOnInit(): void { }

}
