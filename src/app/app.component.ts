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
  thisPage = { idx: -1, uri: '' };
  constructor(public ds: DataterminalService, private router: Router) { }
}
