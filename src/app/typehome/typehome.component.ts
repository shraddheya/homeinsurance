import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-typehome',
  templateUrl: './typehome.component.html',
  styleUrls: ['./typehome.component.scss']
})
export class TypehomeComponent implements OnInit {

  thomeview:any = false;
  hometype:any = {
    apartment: {
      img:'https://www.lemonade.com/assets/web_chat/apartment-4a8897f29eed3d4213146db08afe4e9929ad64f22e8dd081b56007e18ff0d346.png',
      imgactive:'https://www.lemonade.com/assets/web_chat/apartment_active-7af90d4284ac71df4c7893b737aeab9783c7a6206f9023f663bb808835567df5.png',
      title:'Apartment',
      selectedview:false
    },
    singlefamilyhouse: {
      img:'https://www.lemonade.com/assets/web_chat/single_family-32dc83504c5ef74c8db5e936f0af997bf48c9113d2ccb8be8c28fb2719b53762.png',
      imgactive:'https://www.lemonade.com/assets/web_chat/single_family_active-504dfc0a6e2d7f6691dcc9210f6e074ee5698058363544d32345adbc6a5a9859.png',
      title:'Single family house',
      selectedview:false
    },
    duplex: {
      img:'https://www.lemonade.com/assets/web_chat/duplex-d0b79bf73cdf0dd2377d2fca7f8f3b2eaf3799d1de9629bc17f883b55baa4ba8.png',
      imgactive:'https://www.lemonade.com/assets/web_chat/duplex_active-cd72de325e858dea4f88eb4b38fc6ff43eb82146aefab80dd1a54143c578ac10.png',
      title:'Duplex',
      selectedview:false
    }
  };
  home_type: any;
  disabledbtn:any= true;
  constructor(public dataservice:DataterminalService) { 
    dataservice.datatransferShared.subscribe((el:any)=>{
      this.thomeview = el.viewinfo === "describehome";
    })
  }
  ngOnInit(): void {
  }
  homeType(data: any) {
    // this.hometype.forEach((el:any) => {
    for (var key in this.hometype) {
      let el = this.hometype[key];
      el.selectedview = (key === data.id);
      this.disabledbtn = false;
      this.home_type = data.value;
    }
    // });
  }
}
