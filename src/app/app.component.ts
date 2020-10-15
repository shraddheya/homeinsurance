import { Component, OnInit } from '@angular/core';
import { DataterminalService } from './dataterminal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lemonadeinsurance';
  constructor(public dataservice: DataterminalService) {
    dataservice.themeNext(2);
  }
  ngOnInit() {

  }
}
