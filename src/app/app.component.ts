import { Component } from '@angular/core';
import { DataterminalService } from './dataterminal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oursurplus';
  thisPage = {idx: 0, uri: ''};
  constructor (public ds: DataterminalService) {
    ds.pageAdd.subscribe((val: any)=> {
      this.thisPage = val;
    });
  }
}
