import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-h01-banner',
  templateUrl: './h01-banner.component.html',
  styleUrls: ['./h01-banner.component.scss']
})
export class H01BannerComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
