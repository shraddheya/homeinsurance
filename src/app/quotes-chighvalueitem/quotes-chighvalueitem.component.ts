import { Component, OnInit,ViewChild} from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
declare var Swal:any;
@Component({
  selector: 'app-quotes-chighvalueitem',
  templateUrl: './quotes-chighvalueitem.component.html',
  styleUrls: ['./quotes-chighvalueitem.component.scss']
})
export class QuotesChighvalueitemComponent implements OnInit {
  @ViewChild('highvaluemodal',{static:true}) private highvaluemodal: ModalDirective
  valueItem:any= [
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_jewelry.png",
      title:"JEWELRY",
      text:"What’s the total value of your jewelry items that are worth more than 5.000 € each?",
      max:"50000"
    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_bicycle.png",
      title:"BICYCLES",
      text:"What’s the total value of your bikes that are worth more than 5.000 € each?",
      max:"10000"

    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_camera.png",
      title:"CAMERAS",
      text:"What’s the total value of your camera gear worth more than 5.000 € each?",
      max:"10000"

    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_portable_electronics.png",
      title:"PORTABLE ELECTRONICS",
      text:"What’s the total value of your portable electronics worth more than 5.000 € each?",
      max:"10000"

    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_musical_instrument.png",
      title:"MUSIC GEAR",
      text:"What’s the total value of your music gear worth more than 5.000 € each?",
      max:"10000"

    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_fashion_items.png",
      title:"FASHION ITEMS",
      text:"What’s the total value of your fashion items worth more than 5.000 € each?",
      max:"10000"

    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_other.png",
      title:"OTHER",
      text:"What’s the total value of any other items worth more than 5.000 € each?",
      max:"20000"

    }
  ];
  importantArray:any=[
    {
      img:'https://www.lemonade.com/assets/desktop-onboarding/email_icon.png',
      text:"After you get a policy, we'll send you instructions to add your items for our review"
    },
    {
      img:'https://www.lemonade.com/assets/desktop-onboarding/attention-icon.png',
      text:"Extra Coverage doesn't include wear & tear, equipment malfunctions and zombie attacks."
    }
  ]
  footerbtnshow:any = true;
  modalObject:any={};
  noticeModal:any = false;
  constructor() { }

  ngOnInit(): void {
  }

  openModal(data){
    this.footerbtnshow = true;
    this.noticeModal = false
    this.modalObject = data;
    this.highvaluemodal.show();
  }
  worthFunction(sign:any , data:any){
    if(sign.name === "plus"){
      this.footerbtnshow = false;
    }
  }

}
