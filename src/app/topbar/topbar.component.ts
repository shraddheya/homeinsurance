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
  constructor(public dataservice: DataterminalService, public router: Router) {
    comp = this
    window.addEventListener('scroll', function () { comp.showpricebtn = window.pageYOffset >= 400 });
  }

  ngOnInit(): void {
  }

}
