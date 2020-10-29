import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c05security',
  templateUrl: './c05security.component.html',
  styleUrls: ['./c05security.component.scss']
})
export class C05securityComponent implements OnInit {
  securitytype: any = {
    'burglar alarm': {
      img: 'assets/burglar-e86e0122c41e7d8257a8bc167070cb06d588ec91810469cbb4b27b948ce67fb5.png',
      imgactive: 'assets/burglar_selected-baab90a2db9a0b02c0cf0b63c5a6f0e7f68e0f03a5cca57ddd7cf25b313af97b.png',
      selectedview: this.dataservice.allData.c05security.indexOf('burglar alarm') > -1
    },
    'sequrity camera': {
      img: 'assets/icon_68x68_home_security_camera-37587f8b453c6b5154d0aa2adc627ffd339387e1c2c94657fa06baf8d6c62313.png',
      imgactive: 'assets/icon_68x68_home_security_camera_active-00bf265cfd7e33025529a60788973be7b03ba1660ce48df1bae83420e53bdec3.png',
      selectedview: this.dataservice.allData.c05security.indexOf('sequrity camera') > -1
    }
  };
  constructor( public dataservice: DataterminalService ) { }

  ngOnInit(): void {
  }

  changed(el: any) {
    if (el.checked) this.dataservice.allData.c05security.push(el.name);
    else {
      let idx  = this.dataservice.allData.c05security.indexOf(el.name);
      if (idx > -1) this.dataservice.allData.c05security.splice(idx, 1);
    }
    this.securitytype[el.name].selectedview = el.checked;
  }
  
  clicked() {
    this.dataservice.changepage();
  }
}
