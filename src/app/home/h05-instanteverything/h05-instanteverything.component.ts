import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
@Component({
  selector: 'app-h05-instanteverything',
  templateUrl: './h05-instanteverything.component.html',
  styleUrls: ['./h05-instanteverything.component.scss']
})
export class H05InstanteverythingComponent implements OnInit {
  viewofapp: any = false;
  @ViewChild('lemonadeapp', { static: true }) public lemonadeapp: ModalDirective
  constructor() { }
  ngAfterViewInit() {
    this.lemonadeapp.onHidden.subscribe(() => {
      this.lemonadeapp.hide()
    })
  }
  ngOnInit(): void { }
}
