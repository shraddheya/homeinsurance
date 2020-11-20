import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-butt-back',
  templateUrl: './butt-back.component.html',
  styleUrls: ['./butt-back.component.scss']
})
export class ButtBackComponent implements OnInit {

  disp: boolean;

  goBack() {
    this.dataservice.changepage(false);
  }

  constructor(public dataservice: DataterminalService, private router: Router) {
    dataservice.allData = {
      "home": {
        "name": "Contents Contents",
        "price": 2
      },
      "c01name": {
        "firstName": "shraddheya",
        "lastName": "shrivastava"
      },
      "c02address": {
        "housenumber": "A404 new cosmopolitan plot33 dwarka sector 10 new delhi",
        "address": "Indore,Madhyapradesh",
        "pincode": "452010"
      },
      "c03type-home": "Single family house",
      "c04primaryresidence": 10,
      "c05size-home": 0,
      "c06security": [""],
      "c07members": "c",
      "c08assets": true,
      "c09get-quote": {
        "email": "shraddheya.shrivastava@gmail.com",
        "dob": "2002-10-29",
        "receivediscount": true,
        "privacyterm": true
      },
      "c10loading":"",
      "c11builthome-year": "",
      "c12insurance-claim-count": "No",
      "c13quote-detail": {
        "q01coverageamount": {
          'PERSONAL LIABILITY': 40000,
          'CONTENTS': 10000,
          'TEMP ACCOMMODATION': 20000,
        },
        "q02highvalueitems": {
          'Jewlery': 5000,
          'Bicycles': 5000,
          'Cameras': 5000,
          'Electronics': 5000,
          'Music Equipment': 5000,
          'Other': 5000,
        },
        q03superpowers: ["",],
      }
    };



    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let idx = dataservice.pageList.indexOf(val.url.substr(1));
        this.disp = idx > 0;
        console.log(dataservice.allData)
        if (idx < 0) return;
        let gotoPageIdx = idx;
        for (let i = 0; i < idx; i++) {
          let pgnm = dataservice.pageList[i];
          if (JSON.stringify(dataservice.allData[pgnm]) === JSON.stringify(dataservice.dtblank[pgnm])) {
            gotoPageIdx = i;
            break;
          }
        }
        if (gotoPageIdx !== idx) {
          dataservice.currPage = gotoPageIdx;
          dataservice.gotopage(gotoPageIdx);
        }
      }
    })
  }

  ngOnInit(): void { }

}
