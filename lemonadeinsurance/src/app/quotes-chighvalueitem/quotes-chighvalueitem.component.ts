import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-chighvalueitem',
  templateUrl: './quotes-chighvalueitem.component.html',
  styleUrls: ['./quotes-chighvalueitem.component.scss']
})
export class QuotesChighvalueitemComponent implements OnInit {
  valueItem:any= [
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_jewelry.png",
      title:"JEWELRY"
    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_bicycle.png",
      title:"BICYCLES"
    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_camera.png",
      title:"CAMERAS"
    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_portable_electronics.png",
      title:"PORTABLE ELECTRONICS"
    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_musical_instrument.png",
      title:"MUSIC GEAR"
    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_fashion_items.png",
      title:"FASHION ITEMS"
    },
    {
      img:"https://www.lemonade.com/assets/desktop-onboarding/valuable_items_other.png",
      title:"OTHER"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
