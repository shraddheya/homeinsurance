import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-butt-back',
  templateUrl: './butt-back.component.html',
  styleUrls: ['./butt-back.component.scss']
})
export class ButtBackComponent implements OnInit {

  disp: boolean;

  goBack() {
    this.dataservice.changepage(false);
  }

  constructor( public dataservice: DataterminalService, private router: Router ) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let pgIdx = parseInt(val.url.substr(2,2));
        dataservice.currPage = pgIdx;
        this.disp = pgIdx > 0;
      }
    })  
  }

  ngOnInit(): void { }

}
