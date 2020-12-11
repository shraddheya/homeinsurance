import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
@Component({
  selector: 'app-h05-instanteverything',
  templateUrl: './h05-instanteverything.component.html',
  styleUrls: ['./h05-instanteverything.component.scss']
})
export class H05InstanteverythingComponent implements OnInit {

  @ViewChild('lemonadeapp', { static: true }) private lemonadeapp: ModalDirective
  @ViewChild('lemonadeapp') lemonadeel: ElementRef<any>
  viewofapp: any = false;
  constructor() {

  }

  ngOnInit(): void {

    console.log(this.lemonadeapp)

  }



}
