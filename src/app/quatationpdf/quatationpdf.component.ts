import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-quatationpdf',
  templateUrl: './quatationpdf.component.html',
  styleUrls: ['./quatationpdf.component.scss']
})
export class QuatationpdfComponent implements OnInit {

  // allRecord: any;
  // textData: any = {
  //   fromprice: { name: "Liability Insurance", "price": 2 },
  //   names: { firstName: "sourabh", lastName: "Dighe" },
  //   address: { housenumber: 656, pincodedata: "452010", address: "Indore,Madhyapradesh" },
  //   hometype: "duplex",
  //   homesize: "63",
  //   sequrity: [],
  //   members: "",
  //   insuranceclaim: "No",
  //   assetspurchase: "Yes",
  //   getQuotes: {}
  // }
  //incr:any = 0

  quotespages: any = {
    watermark:'quote',
    data:{
      1:{
        pagetitle: ["You’re" , "Amazing"],
        text1:"You’re now part of a special group of people, who participate in making history. Together, we’ll be able to make insurance anhonest, simple and fun experience. ",
        text2:"Thanks for joining, we’re sure you’re gonna love it here :)",
        footerlogo:'https://www.lemonade.com/assets/logo.svg',
        footertext:'© Copyright 2017 by LEMONADE INSURANCE COMPANY (a stock company) | 5 Crosby, New York, NY 10013 | help@lemonade.com | LEM-DEC-01'
      },
      2:{
        headerlogo:"https://www.lemonade.com/assets/logo.svg",
        detail:{
          1:{title:'QUOTE NUMBER',dettailvalue:'LQ8A45' + (9900000000000 - new Date().getTime())},
          2:{title:'QUOTE CREATED AT',dettailvalue:''},
          3:{title:'NAME OF INSURED',dettailvalue:''},
          4:{title:'ADDRESS OF INSURED PROPERTY',dettailvalue:''}
        },
        footertext:'Copyright 2017 by LEMONADE INSURANCE COMPANY (a stock company) | 5 Crosby St. 3rd floor, New York, NY 10013 | Form LEM-DEC-01',
        tlogotext:"5 Crosby St. 3rd floor, New York, NY 10013 LEM-DEC-01 CO-OP INSURANCE (HO6)"
      },
      3:{
        headerlogo:"https://www.lemonade.com/assets/logo.svg",
        footertext:'Copyright 2017 by LEMONADE INSURANCE COMPANY (a stock company) | 5 Crosby St. 3rd floor, New York, NY 10013 | Form LEM-DEC-01',
        footertext1:'Rating information - Protection Class: 1, Tier: 5, Territory: 5, Construction: Frame',
        tlogotext:"LEM-DEC-01 CO-OP INSURANCE (HO6)"
      },
      4:{
        headerlogo:"https://www.lemonade.com/assets/logo.svg",
        footertext:'Copyright 2017 by LEMONADE INSURANCE COMPANY (a stock company) | 5 Crosby St. 3rd floor, New York, NY 10013 | Form LEM-DEC-01',
        footertext1:'Rating information - Protection Class: 1, Tier: 5, Territory: 5, Construction: Frame',
        tlogotext:"LEM-DEC-01 CO-OP INSURANCE (HO6)"
      },
      5:{
        headerlogo:"https://www.lemonade.com/assets/logo.svg",
        footertext:'Copyright 2017 by LEMONADE INSURANCE COMPANY (a stock company) | 5 Crosby St. 3rd floor, New York, NY 10013 | Form LEM-DEC-01',
        footertext1:'Rating information - Protection Class: 1, Tier: 5, Territory: 5, Construction: Frame',
        tlogotext:"LEM-DEC-01 CO-OP INSURANCE (HO6)",
      }
  }};
  constructor(public dataservice: DataterminalService) {
    // this.allRecord = this.textData
    dataservice.datatransferShared.subscribe((el: any) => {
      console.log(el.insuracevisiter_info)
      let checkel:any = Object.keys(el.insuracevisiter_info).length === 0;
      if(!checkel){
         console.log(el.insurancevisiter_info);
      }
      // (!checkel) ? '':console.log(el.insurancevisiter_info)
      // console.log(this.quotespages.data[2].detail);
    })
  }

  ngOnInit(): void {
  }

}
