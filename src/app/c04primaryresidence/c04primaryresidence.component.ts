import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c04primaryresidence',
  templateUrl: './c04primaryresidence.component.html',
  styleUrls: ['./c04primaryresidence.component.scss']
})
export class C04primaryresidenceComponent implements OnInit {

  valueSelected = '';
  buttDisabled = true;
  showMsg= false;
  constructor( public ds: DataterminalService ) { }

  ngOnInit(): void {
    let v = this.ds.allData.c04primaryresidence;
    if (v !== true && v !== false) return;
    this.valueSelected = v ? 'Yes' : 'No';
    this.buttDisabled = false
  }

  changed(val: any) {
    this.ds.allData.c04primaryresidence = val === 'Yes';
    this.showMsg = val === 'Yes';
    this.buttDisabled = false;
  }

  clicked() {
    this.ds.changepage()
  }

}
