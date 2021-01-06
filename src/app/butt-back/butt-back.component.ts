import { Component, OnInit } from '@angular/core';
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

  constructor( private ds: DataterminalService ) {
    ds.pageAdd.subscribe((val: any)=> {
      // console.log(val, this.disp);
      this.disp = val.idx > 1;
      // console.log(val, this.disp);
    });
  }
  ngOnInit(): void { }
}
