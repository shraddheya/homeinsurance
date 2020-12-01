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
      img: 'assets/residents_me-0a89514e0a951b1b638dba1f36da619ddc9b47326c8ad77740e2939ec565bac7.png',
      imgactive: 'assets/residents_me_active-a059f2e18ab12a26b8c2a0d515686f7a01674ec85e4b639943b13a68fc3645e7.png',
      selectedview: this.dataservice.allData.c07members === "a"
    },
    b: {
      title: 'my partner',
      message: 'Great, your partner will be covered by your Lemonade policy 🙂 ',
      img: 'assets/residents_partner-5edc2fcf4f118080722b4b6d1841bf36461b864368ef6ce1c1bdbc1f6ba3206d.png',
      imgactive: 'assets/residents_partner_active-e286232e9bb72152418fe69841db90a5f399dca8b4d8ba9fdaedbb4da1f84b3a.png',
      selectedview: this.dataservice.allData.c07members === "b"
    },
    c: {
      title: 'partner and kids',
      message: 'Great, they’ll be covered by your Lemonade policy 🙂',
      img: 'assets/residents_partner_kids-5276875dbcb812f34c3afb9426edb55b568ab7b84809b4e4994aee2a3801acc3.png',
      imgactive: 'assets/residents_partner_kids_active-1d10f113fb693636dc77dca78e85495e57f9b55f0db09005efbac397f6c552b7.png',
      selectedview: this.dataservice.allData.c07members === "c"
    },
    d: {
      title: 'my kids',
      message: 'Great, they’ll be covered by your Lemonade policy 🙂',
      img: 'assets/residents_kids-376a8d077896e88ac199a6b4f798bdda62278852913598683aa5aa8e75f0052e.png',
      imgactive: 'assets/residents_kids_active-260a2476d974996d3a3a5ae3bcf31d6b59721c67193a1c1fa2f415b03fa9d534.png',
      selectedview: this.dataservice.allData.c07members === "d"
    },
    e: {
      title: 'other',
      message: 'FYI - You are the only person covered under this policy. Tell the others to get their own Lemonade 😉',
      img: 'assets/residents_other-d3a03d7f55762db90f1c1da73c5521b89e65e7226bdabb4d36c152d16d425a0b.png',
      imgactive: 'assets/residents_other_active-0fe5fde96e286dbefa853a325627fe6d42413b3b07435416fe317b9d8b2b13ac.png',
      selectedview: this.dataservice.allData.c07members === "e"
    }
  };
  constructor( private dataservice: DataterminalService ) { }

  ngOnInit(): void {
    for (var e in this.membertypelist) if (this.membertypelist[e].selectedview) this.msgShow = this.membertypelist[e].message;
    if (this.dataservice.allData.c07members.length > 0) this.buttDisabled = false;
  }

  changed(key: string) {
    this.dataservice.allData.c07members = key;
    for (let item in this.membertypelist) this.membertypelist[item].selectedview = key === item;
    this.buttDisabled = false;
    if (this.membertypelist[key]) this.msgShow = this.membertypelist[key].message;
  }
  clicked() {
    this.dataservice.changepage();
  }

}
