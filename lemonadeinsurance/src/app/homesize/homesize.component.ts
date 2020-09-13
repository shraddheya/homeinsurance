import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-homesize',
  templateUrl: './homesize.component.html',
  styleUrls: ['./homesize.component.scss']
})
export class HomesizeComponent implements OnInit {

  hsizeview: any = false;
  home_size: any;
  disabled_btn: any = true;
  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      this.hsizeview = el.viewinfo === "homesize";
    })
  }

  ngOnInit(): void {
  }
  activeBtnhomesize(data) {
    let check: any = data === "";
    this.disabled_btn = check
    this.home_size = (!check) ? data : ''
  }
}
