import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataterminalService } from 'src/app/dataterminal.service';
let comp: H00TopbarComponent;

@Component({
  selector: 'app-h00-topbar',
  templateUrl: './h00-topbar.component.html',
  styleUrls: ['./h00-topbar.component.scss']
})
export class H00TopbarComponent implements OnInit {
  showpricebtn: any = false
  showbackquote: any = false
  navsize: any = true;
  centerimg_scroll: any = true
  constructor(public ds: DataterminalService, public router: Router) {
    comp = this
    window.addEventListener('scroll', function () {
      comp.centerimg_scroll = window.pageYOffset <= 10
      comp.navsize = window.pageYOffset <= 112
      comp.showpricebtn = window.pageYOffset >= 400
    });
  }

  ngOnInit(): void {
    (window as any).getdata = () => {
      console.log("allData : ", this.ds.allData);
      console.log("dtblank : ", this.ds.dtblank);
      console.log("initVals : ", this.ds.initVals);
    };
  }

  clicked() {
    this.ds.allData[''] = { name: `Content`, price: 2 }
    this.ds.changepage();
  }
}
