import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-butt-back',
  templateUrl: './butt-back.component.html',
  styleUrls: ['./butt-back.component.scss']
})
export class ButtBackComponent {

  // goBack() {
  //   this.ds.changepage(false);
  // }

  constructor( public ds: DataterminalService ) { }
}
