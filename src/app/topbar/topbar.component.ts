import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
import { Router } from '@angular/router';
let comp: TopbarComponent

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  showpricebtn: any = false
  navsize: any = true;
  constructor(public ds: DataterminalService, public router: Router) {
    comp = this
    window.addEventListener('scroll', function () {
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

}
