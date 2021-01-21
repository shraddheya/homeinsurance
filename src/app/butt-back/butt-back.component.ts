import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-butt-back',
  templateUrl: './butt-back.component.html',
  styleUrls: ['./butt-back.component.scss']
})
export class ButtBackComponent {
  constructor(public ds: DataterminalService) { }
}
