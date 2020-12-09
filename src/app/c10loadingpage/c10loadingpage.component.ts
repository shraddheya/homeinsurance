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
   percentage1:any = false;
   percentage2:any = false;
   percentage3:any = false;
   percentage4:any = false;

  processicon: any = true;
  processmsg: any = 'Calculating Data ...'
  constructor(public ds: DataterminalService, public route: Router) {
    comp = this
  }

  ngOnInit(): void {
    //#region Used for Progress bar
      var i = 0;
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 100); // for production frame should be 50
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            comp.percentage1 = width >= 20
            comp.percentage2 = width >= 45
            comp.percentage3 = width >= 70
            comp.percentage4 = width >= 95
            if(width >= 95){
              comp.processicon = false
              comp.processmsg = "Analysis complete"
            }
            if (width === 100) {
              comp.clicked()
            }
          }
        }
      }
    //#endregion
  }

  clicked() {
    this.ds.changepage();
  }

}
