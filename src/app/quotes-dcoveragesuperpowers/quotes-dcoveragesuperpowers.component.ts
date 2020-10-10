import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-dcoveragesuperpowers',
  templateUrl: './quotes-dcoveragesuperpowers.component.html',
  styleUrls: ['./quotes-dcoveragesuperpowers.component.scss']
})
export class QuotesDcoveragesuperpowersComponent implements OnInit {

  imgview:any = false;
  superpowerArray:any = {
    antitheft:{
      img:"https://www.lemonade.com/assets/quotes/Superpowers_theft_empty-5a41187e894f864acd975e97281f4cbb63153d7ba0e19b341fb804d8d51e0427.png",
      imgcheck:"https://www.lemonade.com/assets/quotes/Superpowers_theft_to_full-af6adb1b582146ea82077c1dfa3168254870a54329d8498673013b101b414a93.gif",
      title:"ANTI THEFT PACKAGE",
      text:"Whether you’re at home, a coffee shop, or hangin' out on Sylt, we’ll cover you if someone steals your stuff (bicycles included 🚲).",
      price:"2,00 €/MO",
      showchecked:false,
      id:"checkboxantitheft"
    },
    extremeweather:{
      img:"https://www.lemonade.com/assets/quotes/Superpowers_extreme_weather_empty-09762d37bf83e7fb881760e9ab55c2bf7cb0d83b6838edfd33528f26a2c20595.png",
      imgcheck:"https://www.lemonade.com/assets/quotes/Superpowers_extreme_weather_to_full-efff346a8977cb9c21680f07cbe80c400e4fef1eed41b8ab28e8fb77704f363b.gif",
      title:"EXTREME WEATHER PACKAGE",
      text:"Additional coverage against lightning, floods, earthquake, landslide, snow pressure, avalanches and volcanic eruptions.",
      price:"1,00 €/MO",
      showchecked:false,
      id:"checkboxweather",
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  buttonCheck(evt: any, itemid: any){
    this.superpowerArray[itemid].showchecked = evt.currentTarget.checked
  }

}
