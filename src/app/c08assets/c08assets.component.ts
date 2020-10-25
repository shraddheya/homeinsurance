import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c08assets',
  templateUrl: './c08assets.component.html',
  styleUrls: ['./c08assets.component.scss']
})
export class C08assetsComponent implements OnInit {
  buttDisabled = true;
  showMsg= false;
  constructor( public dataservice:DataterminalService ) { }

  ngOnInit(): void {
  }

  changed(val: any) {
    this.dataservice.allData.c08assets = val;
    this.buttDisabled = true;
    this.showMsg = val;
    this.buttDisabled = false;
  }

  clicked() {
    this.dataservice.changepage()
  }
}
