import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataterminalService } from './dataterminal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oursurplus';
  thisPage = {idx: 0, uri: ''};
  constructor (public ds: DataterminalService, private router: Router) {
    // router.events.subscribe(val => {
    //   if (val instanceof NavigationEnd) {
    //     let uri = val.url.substr(1);
    //     let idx = ds.pageList.indexOf(uri);
    //     this.thisPage = { idx, uri };
    //   }
    // });
    // ds.pageAdd.subscribe((val: any)=> {
    //   this.thisPage = val;
    //   // console.log('this.thisPage : ', this.thisPage);
    // });
  }
}
