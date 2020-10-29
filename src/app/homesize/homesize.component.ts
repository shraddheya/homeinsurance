import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-homesize',
  templateUrl: './homesize.component.html',
  styleUrls: ['./homesize.component.scss']
})
export class HomesizeComponent implements OnInit {
  alert:any;

  hsizeview: any = false;
  home_size: any;
  disabled_btn: any = false;
  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      this.hsizeview = el.viewinfo === "homesize";
    })
  }

  ngOnInit(): void {
  }
  activeBtnhomesize(data) {
    console.log(data.value)
    this.alert = !(data.value >= 10 && data.value <= 999)
    this.disabled_btn = this.alert
    let check: any = data.value === "";
    this.home_size = (!check) ? data.value : ''
  }
}
