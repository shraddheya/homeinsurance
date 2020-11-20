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
      name:'Rashiq in SF',
      id:'rashiq'
    },{
      img:'../../../assets/tweet_face_awaking-806fe628afc9303604ab259786880d52.png',
      name:'jacky',
      id:'jjackyliang'
    },{
      img:'../../../assets/tweet_face_brent-a8b6bc25005536025bdfcb51b251ceb6.png',
      name:'Andrew Horn',
      id:'itsandrewhorn'
    },{
      img:'../../../assets/tweet_face_jacky-e307857e172e677ad38d153f4d46d426.png',
      name:'Brent',
      id:'goforbrent'
    },{
      img:'../../../assets/tweet_face_rashiq-0c6b3c3d641537fb779fc58d1c0216e3.png',
      name:'Valeria Delgado',
      id:'Valeriad90'
    },{
      img:'../../../assets/tweet_face_stephen-287518fccfd505a0c603ffbad200d6af.png',
      name:'Stephen Huber',
      id:'stephen_huber'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
