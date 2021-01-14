import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c06security',
  templateUrl: './c06security.component.html',
  styleUrls: ['./c06security.component.scss']
})
export class C06securityComponent implements OnInit {

 // imgactive: 'assets/SVG210106/burglar_checked.svg'
  checktest: any = this.ds.allData.c06security.length-1 < 1; //newadded
  securitytype: any = {
    'burglar alarm': {
      img: 'assets/oursurplusassetsPNG/Burglar.png',
      imgactive:'assets/oursurplusassetsPNG/Burglar S.png',
      selectedview: this.ds.allData.c06security.indexOf('burglar alarm') > -1
    },
    'sequrity camera': {
      img: 'assets/oursurplusassetsPNG/Home Security Camera.png',
      imgactive: 'assets/oursurplusassetsPNG/Home Security Camera S.png',
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
