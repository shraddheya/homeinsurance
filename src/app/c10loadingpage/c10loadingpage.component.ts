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
  processicon: any = true;
  processmsg: any = 'Calculating Data ...';
  asIs(a, b) {
    return a
  }
  progress_star: any = {
    'title1': {
      percentage: false,
      text: 'Building Age',
      img: 'assets/oursurplusassetsPNG/5 Star S.png'
    },
    'title2': {
      percentage: false,
      text: 'Building Durability',
      img: 'assets/oursurplusassetsPNG/5 Star S.png'
    },
    'title3': {
      percentage: false,
      text: 'Distance From Coast',
      img: 'assets/oursurplusassetsPNG/5 Star S.png'
    },
    'title4': {
      percentage: false,
      text: 'Fire Station Proximity',
      img: 'assets/oursurplusassetsPNG/5 Star S.png'
    }
  }
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
      var id = setInterval(frame, 50); // 50
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          comp.progress_star.title1.percentage = width >= 20
          comp.progress_star.title2.percentage = width >= 45
          comp.progress_star.title3.percentage = width >= 70
          comp.progress_star.title4.percentage = width >= 95
          if (width >= 95) {
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
