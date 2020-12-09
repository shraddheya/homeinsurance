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
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let idx = ds.pageList.indexOf(val.url.substr(1));
        if (idx === ds.pageList.indexOf('c10loading')) idx = idx - 1;
        this.disp = idx > 1;
        if (idx < 0) return;
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
