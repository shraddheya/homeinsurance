import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../../dataterminal.service';

@Component({
  selector: 'app-q03superpowers',
  templateUrl: './q03superpowers.component.html',
  styleUrls: ['./q03superpowers.component.scss']
})
export class Q03superpowersComponent implements OnInit {

  superpowerArray: any = {
    "ANTI THEFT PACKAGE": {
      img: "assets/Superpowers_theft_empty-5a41187e894f864acd975e97281f4cbb63153d7ba0e19b341fb804d8d51e0427.png",
      imgcheck: "assets/Superpowers_theft_to_full-af6adb1b582146ea82077c1dfa3168254870a54329d8498673013b101b414a93.gif",
      text: "Whether you’re at home, a coffee shop, or hangin' out on Sylt, we’ll cover you if someone steals your stuff (bicycles included 🚲).",
      price: "2,00 €/MO",
      showchecked: this.ds.allData["c13quote-detail"].q03superpowers.indexOf("ANTI THEFT PACKAGE") > -1,
    },
    "EXTREME WEATHER PACKAGE": {
      img: "assets/Superpowers_extreme_weather_empty-09762d37bf83e7fb881760e9ab55c2bf7cb0d83b6838edfd33528f26a2c20595.png",
      imgcheck: "assets/Superpowers_extreme_weather_to_full-efff346a8977cb9c21680f07cbe80c400e4fef1eed41b8ab28e8fb77704f363b.gif",
      text: "Additional coverage against lightning, floods, earthquake, landslide, snow pressure, avalanches and volcanic eruptions.",
      price: "1,00 €/MO",
      showchecked: this.ds.allData["c13quote-detail"].q03superpowers.indexOf("EXTREME WEATHER PACKAGE") > -1,
    }
  }
  constructor( public ds: DataterminalService ) { }

  ngOnInit(): void { }

  changed(evt: any, itemid: any) {
    console.log(evt.currentTarget.checked)
    this.superpowerArray[itemid].showchecked = evt.currentTarget.checked;
    if (evt.target.checked) this.ds.allData["c13quote-detail"].q03superpowers.push(itemid);
    else {
      let idx  = this.ds.allData["c13quote-detail"].q03superpowers.indexOf(itemid);
      if (idx > -1) this.ds.allData["c13quote-detail"].q03superpowers.splice(idx, 1);
    }
  }
}
