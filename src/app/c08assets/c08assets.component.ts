import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c08assets',
  templateUrl: './c08assets.component.html',
  styleUrls: ['./c08assets.component.scss']
})
export class C08assetsComponent implements OnInit {
  valueSelected = '';
  buttDisabled = true;
  showMsg= false;
  constructor( public ds: DataterminalService ) { }

  ngOnInit(): void {
    let v = this.ds.allData.c08assets;
    if (v !== true && v !== false) return;
    this.valueSelected = v ? 'Yes' : 'No';
    this.buttDisabled = false
  }

  changed(val: any) {
    this.ds.allData.c08assets = val === 'Yes';
    this.showMsg = val === 'Yes';
    this.buttDisabled = false;
  }

  clicked() {
    this.ds.changepage()
  }
}
