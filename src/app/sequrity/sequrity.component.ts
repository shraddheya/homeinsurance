import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-sequrity',
  templateUrl: './sequrity.component.html',
  styleUrls: ['./sequrity.component.scss']
})
export class SequrityComponent implements OnInit {

  sequreview: any = false; // Component visibility
  securitytype: any = {
    burglaralarm: {
      title: 'burglar alaram',
      img: 'https://www.lemonade.com/assets/web_chat/burglar-e86e0122c41e7d8257a8bc167070cb06d588ec91810469cbb4b27b948ce67fb5.png',
      imgactive: 'https://www.lemonade.com/assets/web_chat/burglar_selected-baab90a2db9a0b02c0cf0b63c5a6f0e7f68e0f03a5cca57ddd7cf25b313af97b.png',
      selectedview: false
    },
    sequritycam: {
      title: 'sequrity camera',
      img: 'https://www.lemonade.com/assets/web_chat/icon_68x68_home_security_camera-37587f8b453c6b5154d0aa2adc627ffd339387e1c2c94657fa06baf8d6c62313.png',
      imgactive: 'https://www.lemonade.com/assets/web_chat/icon_68x68_home_security_camera_active-00bf265cfd7e33025529a60788973be7b03ba1660ce48df1bae83420e53bdec3.png',
      selectedview: false
    }
  };  // Array for Ui
  sequritydata: any = []; //sequritydata  record save here

  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      this.sequreview = el.viewinfo === "sequrity"
    })
  }

  ngOnInit(): void {
  }

  securityCheck(evt: any, itemid: any) {
    this.securitytype[itemid].selectedview = evt.currentTarget.checked;
    // Below code are using for value
    if (evt.currentTarget.checked) {
      this.sequritydata.push(evt.target.name);
    }
    else {
      for (var i = 0; i < this.sequritydata.length; i++) {
        if (this.sequritydata[i] === evt.target.name) {
          this.sequritydata.splice(i, 1)
        }
      }
    }
    // sequrityCheck(data){
    //   this.disabled_btn = (!data.target.checked);
    //   this.sequritytype.forEach(el => {
    //     el.selectedview = (el.type === data.target.id)
    //   });
    //   if(data.target.checked){
    //     this.sequritydata.push(data.target.value);
    //   }
    //   else{
    //     for( var i = 0; i < this.sequritydata.length; i++){
    //       if ( this.sequritydata[i] === data.target.value) {
    //         this.sequritydata.splice(i, 1)
    //       }
    //     }
    //   }
    // }
  }
}