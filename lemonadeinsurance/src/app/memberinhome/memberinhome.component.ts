import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-memberinhome',
  templateUrl: './memberinhome.component.html',
  styleUrls: ['./memberinhome.component.scss']
})
export class MemberinhomeComponent implements OnInit {

  memberview: any = false;
  membertypelist: any = [
    {
      title: "It's just me",
      type: 'a',
      img: 'https://www.lemonade.com/assets/web_chat/residents_me-0a89514e0a951b1b638dba1f36da619ddc9b47326c8ad77740e2939ec565bac7.png',
      imgactive: 'https://www.lemonade.com/assets/web_chat/residents_me_active-a059f2e18ab12a26b8c2a0d515686f7a01674ec85e4b639943b13a68fc3645e7.png',
      selectedview: false
    },
    {
      title: 'my partner',
      type: 'b',
      message: 'Great, your partner will be covered by your Lemonade policy 🙂 ',
      img: 'https://www.lemonade.com/assets/web_chat/residents_partner-5edc2fcf4f118080722b4b6d1841bf36461b864368ef6ce1c1bdbc1f6ba3206d.png',
      imgactive: 'https://www.lemonade.com/assets/web_chat/residents_partner_active-e286232e9bb72152418fe69841db90a5f399dca8b4d8ba9fdaedbb4da1f84b3a.png',
      selectedview: false
    },
    {
      title: 'partner and kids',
      type: 'c',
      message: 'Great, they’ll be covered by your Lemonade policy 🙂',
      img: 'https://www.lemonade.com/assets/web_chat/residents_partner_kids-5276875dbcb812f34c3afb9426edb55b568ab7b84809b4e4994aee2a3801acc3.png',
      imgactive: 'https://www.lemonade.com/assets/web_chat/residents_partner_kids_active-1d10f113fb693636dc77dca78e85495e57f9b55f0db09005efbac397f6c552b7.png',
      selectedview: false
    },
    {
      title: 'my kids',
      type: 'd',
      message: 'Great, they’ll be covered by your Lemonade policy 🙂',
      img: 'https://www.lemonade.com/assets/web_chat/residents_kids-376a8d077896e88ac199a6b4f798bdda62278852913598683aa5aa8e75f0052e.png',
      imgactive: 'https://www.lemonade.com/assets/web_chat/residents_kids_active-260a2476d974996d3a3a5ae3bcf31d6b59721c67193a1c1fa2f415b03fa9d534.png',
      selectedview: false
    },
    {
      title: 'other',
      type: 'e',
      message: 'FYI - You are the only person covered under this policy. Tell the others to get their own Lemonade 😉',
      img: 'https://www.lemonade.com/assets/web_chat/residents_other-d3a03d7f55762db90f1c1da73c5521b89e65e7226bdabb4d36c152d16d425a0b.png',
      imgactive: 'https://www.lemonade.com/assets/web_chat/residents_other_active-0fe5fde96e286dbefa853a325627fe6d42413b3b07435416fe317b9d8b2b13ac.png',
      selectedview: false
    }
  ];
  about_members: any;
  disabled_btn: any = true;
  messagecheck: any;
  messageshow:any;
  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      this.memberview = el.viewinfo === "memberinhome";
    })
  }

  ngOnInit(): void {
  }

  memberLogic(data) {
    this.messagecheck = data.id
    this.messageshow = (data.id !== 'a')
    this.membertypelist.forEach((el: any) => {
      el.selectedview = el.type === data.id;
      this.about_members = (el.type === data.id) ? el.title :'';
    });
    this.disabled_btn = false;
  }

}
