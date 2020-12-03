import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h03-rattinggreel',
  templateUrl: './h03-rattinggreel.component.html',
  styleUrls: ['./h03-rattinggreel.component.scss']
})
export class H03RattinggreelComponent implements OnInit {

  reelrating = [
    {
      img:'../../../assets/tweet_face_andrew-577f86e67145d9e995dd5423f752b731.png',
      usermsg:'@Lemonade_Inc I just bought home insurance from you and I’m pretty sure it was easier than ordering pizza. Awesome job on the experience.',
      name:'Rashiq in SF',
      id:'rashiq'
    },{
      img:'../../../assets/tweet_face_awaking-806fe628afc9303604ab259786880d52.png',
      usermsg:'@Lemonade_Inc Truly lovely onboarding + customer support for a normally super frustrating service.',
      name:'jacky',
      id:'jjackyliang'
    },{
      img:'../../../assets/tweet_face_brent-a8b6bc25005536025bdfcb51b251ceb6.png',
      usermsg:'WOW - what an amazing company. Check out @Lemonade_Inc if you need homeowner or rental insurance. Have been loving the process so far.',
      name:'Andrew Horn',
      id:'itsandrewhorn'
    },{
      img:'../../../assets/tweet_face_jacky-e307857e172e677ad38d153f4d46d426.png',
      usermsg:'Wow. Just filed a claim with @Lemonade_Inc and got paid in literally 7 seconds. If you rent or own a home, you NEED to get this insurance. #insurance #lemonade #NotAnAd',
      name:'Brent',
      id:'goforbrent'
    },{
      img:'../../../assets/tweet_face_rashiq-0c6b3c3d641537fb779fc58d1c0216e3.png',
      usermsg:'@Lemonade_Inc was the simplest and easiest insurance I’ve ever purchased, “old” insurance companies need to step into the current century!!! 👏 👏 👏',
      name:'Valeria Delgado',
      id:'Valeriad90'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
