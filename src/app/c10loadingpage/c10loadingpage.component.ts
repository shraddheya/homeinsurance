import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
import { Router } from '@angular/router';
let comp: C10loadingpageComponent

@Component({
  selector: 'app-c10loadingpage',
  templateUrl: './c10loadingpage.component.html',
  styleUrls: ['./c10loadingpage.component.scss']
})
export class C10loadingpageComponent implements OnInit {
   percentage:any;

  processicon: any = true;
  processmsg: any = 'Calculating Data ...'
  constructor(public dataservice: DataterminalService, public route: Router) {
    comp = this
  }

  ngOnInit(): void {
    //#region Used for Progress bar
      var i = 0;
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 150);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            console.log(width === 20)
            if (width === 100) {
              comp.clicked()
            }
          }
        }
      }
    //#endregion
  }

  clicked() {
    this.dataservice.changepage();
  }

}
