import { Component, OnInit ,ViewChild} from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
import { ModalDirective } from 'angular-bootstrap-md';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('resetmodal', { static: true }) private resetmodal: ModalDirective

  constructor(public dataservice: DataterminalService) {
    dataservice.domEffectShared.subscribe((el: any) => {
      if (el.mode === "reset") {
        this.resetmodal.show()
      }
    })
  }

  ngOnInit(): void {
  }

}
