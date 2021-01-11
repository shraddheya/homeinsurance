import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c06security',
  templateUrl: './c06security.component.html',
  styleUrls: ['./c06security.component.scss']
})
export class C06securityComponent implements OnInit {

  checktest: any = this.ds.allData.c06security.length-1 < 1; //newadded
  securitytype: any = {
    'burglar alarm': {
      img: 'assets/burglar-e86e0122c41e7d8257a8bc167070cb06d588ec91810469cbb4b27b948ce67fb5.png',
      imgactive: 'assets/oursurplusassetsSVG/SVG210106/burglar_checked.svg',
      selectedview: this.ds.allData.c06security.indexOf('burglar alarm') > -1
    },
    'sequrity camera': {
      img: 'assets/oursurplusassetsSVG/SVG210106/camera_unchecked.svg',
      imgactive: 'assets/oursurplusassetsSVG/SVG210106/camera_checked.svg',
      selectedview: this.ds.allData.c06security.indexOf('sequrity camera') > -1
    }
  };
  constructor(public ds: DataterminalService) { }

  ngOnInit(): void { }

  changed(el: any) {
    if (el.checked) {
      this.ds.allData.c06security.push(el.name);
    }
    else {
      let idx = this.ds.allData.c06security.indexOf(el.name);
      if (idx > -1) this.ds.allData.c06security.splice(idx, 1);
    }
    this.checktest = this.ds.allData.c06security.length-1 < 1;
    this.securitytype[el.name].selectedview = el.checked;
  }
  clicked() {
    this.ds.changepage();
  }

}
