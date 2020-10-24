import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';


@Component({
  selector: 'app-c00plan',
  templateUrl: './c00plan.component.html',
  styleUrls: ['./c00plan.component.scss']
})
export class C00planComponent implements OnInit {

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
    this.dataservice.allData.info_details.c00plan = { name: `${item.title1} ${item.title1}`, price: item.price}
    this.dataservice.changepage()
  }
  
  constructor( public dataservice: DataterminalService) { 

  }

  ngOnInit(): void {
  }

}
