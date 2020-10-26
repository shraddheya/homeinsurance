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

  constructor( public dataservice: DataterminalService, private router: Router ) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let idx = dataservice.pageList.indexOf(val.url.substr(1));
        this.disp = idx > 0;
        console.log(idx, val.url.substr(1), dataservice.allData[val.url.substr(1)])
        if (idx < 0) return;
        let gotoPageIdx = idx;
        for (let i = 0; i < idx; i++) {
          let pgnm = dataservice.pageList[i];
          if (JSON.stringify(dataservice.allData[pgnm]) === JSON.stringify(dataservice.dtblank[pgnm])){
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
