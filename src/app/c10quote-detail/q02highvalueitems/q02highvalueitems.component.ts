import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q02highvalueitems',
  templateUrl: './q02highvalueitems.component.html',
  styleUrls: ['./q02highvalueitems.component.scss']
})
export class Q02highvalueitemsComponent implements OnInit {
  valueItem: any = [
    {
      img: "../../../assets/valuable_items_jewelry.png",
      title: "JEWELRY",
      text: "What’s the total value of your jewelry items that are worth more than 5.000 € each?",
      maxvalue: 50000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 5000,
      domid: 'jewelry'
    },
    {
      img: "../../../assets/valuable_items_bicycle.png",
      title: "BICYCLES",
      text: "What’s the total value of your bikes that are worth more than 5.000 € each?",
      maxvalue: 10000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 500,
      domid: 'bicycles'
    },
    {
      img: "../../../assets/valuable_items_camera.png",
      title: "CAMERAS",
      text: "What’s the total value of your camera gear worth more than 5.000 € each?",
      maxvalue: 10000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 500,
      domid: 'cameras'
    },
    {
      img: "../../../assets/valuable_items_portable_electronics.png",
      title: "PORTABLE ELECTRONICS",
      text: "What’s the total value of your portable electronics worth more than 5.000 € each?",
      maxvalue: 10000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 500,
      domid: 'electronic'
    },
    {
      img: "../../../assets/valuable_items_musical_instrument.png",
      title: "MUSIC GEAR",
      text: "What’s the total value of your music gear worth more than 5.000 € each?",
      maxvalue: 10000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 500,
      domid: 'music'
    },
    // {
    //   img:"../../../assets/valuable_items_fashion_items.png",
    //   title:"FASHION ITEMS",
    //   text:"What’s the total value of your fashion items worth more than 5.000 € each?",
    //   maxvalue:50000,
    //   minvalue:5000,
    //   price:,
    //   incrtoggle:5000
    // },
    {
      img: "../../../assets/valuable_items_other.png",
      title: "OTHER",
      text: "What’s the total value of any other items worth more than 5.000 € each?",
      maxvalue: 10000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 500,
      domid: 'other'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
