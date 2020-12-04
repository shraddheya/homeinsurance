import { Component, OnInit } from '@angular/core';
import { DataterminalService } from "../../dataterminal.service";

@Component({
  selector: 'app-h06-plansubscribe',
  templateUrl: './h06-plansubscribe.component.html',
  styleUrls: ['./h06-plansubscribe.component.scss']
})
export class H06PlansubscribeComponent implements OnInit {

  pricepackage: any = true;
  pricescard: any = [
    {
      title1: 'Contents',
      title2: 'Insurance',
      text: 'Monthly, From',
      price: 2,
      buttontext: 'GET CONTENTS'
    },
    {
      title1: 'Liability',
      title2: 'Insurance',
      text: 'Monthly, From',
      price: 2,
      buttontext: 'GET LIABILITY'
    },
    {
      title1: 'Contents and',
      title2: 'Liability Package',
      text: 'Monthly, From',
      price: 4,
      buttontext: 'GET BOTH'
    },
  ];

  clicked(item: any) {
    console.log(this.ds.allData)
    this.ds.allData.home = { name: `${item.title1} ${item.title1}`, price: item.price}
    this.ds.changepage()
  }

  constructor( public ds: DataterminalService) {

  }

  ngOnInit(): void {
  }

}
