import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c07members',
  templateUrl: './c07members.component.html',
  styleUrls: ['./c07members.component.scss']
})
export class C07membersComponent implements OnInit {

  asIs(a,b) {
    return a
  }
  buttDisabled = true;
  msgShow = null;
  imgcheck:any
  membertypelist: any = {
    a: {
      title: "It's just me",
      img: 'assets/oursurplusassetsPNG/Residents Me.png',
      imgactive: 'assets/oursurplusassetsPNG/Residents Me Active.png',
      selectedview: this.ds.allData.c07members === "a"
    },
    b: {
      title: 'my partner',
      message: 'Great, your partner will be covered by your Lemonade policy 🙂 ',
      img: 'assets/oursurplusassetsPNG/Residents Partner.png',
      imgactive: 'assets/oursurplusassetsPNG/Residents Partner Active.png',
      selectedview: this.ds.allData.c07members === "b"
    },
    c: {
      title: 'partner and kids',
      message: 'Great, they’ll be covered by your Lemonade policy 🙂',
      img: 'assets/oursurplusassetsPNG/Residents Partner Kids.png',
      imgactive: 'assets/oursurplusassetsPNG/Residents Partner Kids Active.png',
      selectedview: this.ds.allData.c07members === "c"
    },
    d: {
      title: 'my kids',
      message: 'Great, they’ll be covered by your Lemonade policy 🙂',
      img: 'assets/oursurplusassetsPNG/Simple Brush.png',
      imgactive:'assets/oursurplusassetsPNG/Coloured Brush.png',
      selectedview: this.ds.allData.c07members === "d"
    },
    e: {
      title: 'other',
      message: 'FYI - You are the only person covered under this policy. Tell the others to get their own Lemonade 😉',
      img: 'assets/oursurplusassetsPNG/Residents Other.png',
      imgactive: 'assets/oursurplusassetsPNG/Residents Other Active.png',
      selectedview: this.ds.allData.c07members === "e"
    }
  };
  constructor( private ds: DataterminalService ) { }

  ngOnInit(): void {
    for (var e in this.membertypelist) if (this.membertypelist[e].selectedview) this.msgShow = this.membertypelist[e].message;
    if (this.ds.allData.c07members.length > 0) this.buttDisabled = false;
  }

  changed(key: string) {
    this.ds.allData.c07members = key;
    for (let item in this.membertypelist) this.membertypelist[item].selectedview = key === item;
    this.buttDisabled = false;
    if (this.membertypelist[key]) this.msgShow = this.membertypelist[key].message;
  }
  clicked() {
    this.ds.changepage();
  }

}
