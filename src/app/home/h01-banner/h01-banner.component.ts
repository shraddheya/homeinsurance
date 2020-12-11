import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../../dataterminal.service';

@Component({
  selector: 'app-h01-banner',
  templateUrl: './h01-banner.component.html',
  styleUrls: ['./h01-banner.component.scss']
})
export class H01BannerComponent implements OnInit {

  constructor(public ds: DataterminalService) { }

  ngOnInit(): void {
  }

}
