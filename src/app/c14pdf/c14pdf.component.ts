import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
import * as hvi from 'src/assets/oipmodel';

@Component({
  selector: 'app-c14pdf',
  templateUrl: './c14pdf.component.html',
  styleUrls: ['./c14pdf.component.scss']
})
export class C14pdfComponent implements OnInit {

  asIs (a: any, b:any) { return a; }
  payable: number;

  quotespages: any = {
    watermark:'quote',
    logo: "assets/logo.svg",
    footertext:'Copyright 2017 by LEMONADE INSURANCE COMPANY (a stock company) | 5 Crosby, New York, NY 10013 | help@lemonade.com | LEM-DEC-01',
    tlogotext:"5 Crosby St. 3rd floor, New York, NY 10013 LEM-DEC-01 CO-OP INSURANCE (HO6)",
    footertext1:'Rating information - Protection Class: 1, Tier: 5, Territory: 5, Construction: Frame',
    footertext2:'Copyright 2017 by LEMONADE INSURANCE COMPANY (a stock company) | 5 Crosby St. 3rd floor, New York, NY 10013 | Form LEM-DEC-01',

    data:{
      page2:{
        detail:{
          "QUOTE NUMBER":'LQ8A45' + (9900000000000 - new Date().getTime()),
          "QUOTE CREATED AT":'',
          "NAME OF INSURED":'',
          "ADDRESS OF INSURED PROPERTY":''
        },
        table:{ // need to add
          title:'coverage summary',
          head:["coverage","amount covered","cost"],
          data:{
            'Contents - Low Value Items': this.dataservice.allData['c13quote-detail'].q01coverageamount['CONTENTS'] || 0,
            'Personal Liability ': this.dataservice.allData['c13quote-detail'].q01coverageamount['PERSONAL LIABILITY'] || 0,
            'Temporary Accomodation': this.dataservice.allData['c13quote-detail'].q01coverageamount['TEMP ACCOMMODATION'] || 0,
            'Contents - High Value Items (Jewlery)': this.dataservice.allData['c13quote-detail'].q02highvalueitems['Jewlery'] || 0,
            'Contents - High Value Items (Bicycles)': this.dataservice.allData['c13quote-detail'].q02highvalueitems['Bicycles'] || 0,
            'Contents - High Value Items (Cameras)': this.dataservice.allData['c13quote-detail'].q02highvalueitems['Cameras'] || 0,
            'Contents - High Value Items (Electronics)': this.dataservice.allData['c13quote-detail'].q02highvalueitems['Electronics'] || 0,
            'Contents - High Value Items (Music Equipment)': this.dataservice.allData['c13quote-detail'].q02highvalueitems['Music Equipment'] || 0,
            'Contents - High Value Items (Other)': this.dataservice.allData['c13quote-detail'].q02highvalueitems['Other'] || 0,
          },
          total:{title:'Total Premium',value:'44.42/mo'}
        },
      },
      page3:{
        table:{ // need to add
          title:'discounts',
          head:["For","Amount"],
          data:{
            'Dwelling Age':'90,000',
            'Fire Protection':'40,000'
          },
          total:{title:'Total Discount',value:'92.00 (Annual)'}
        },
      },
      page4:{
        listdata:{ // need to add
          title:'endorsements and notices',
          data:[
            "Personal Property Replacement Cost Endorsement",
            "Special Provisions",
            "Workers Compensation Endorsement",
            "Canine Liability Exclusion Endorsement",
            "Flood Notice",
            "OFAC (Office Of Foreign Assets Control) Notice",
            "Home Sharing Notice",
            "Credit Score Notice",
          ]
        },
      },
      page5:{
        paragraph:{ // need to add
          title:'FREQUENT LENDER QUESTIONS',
          data:{
            0:{
              title:"Is this Replacement Cost Loss Settlement?",
              value:"Yes. Coverage A (and Coverage B if applicable) is replacement cost up to the policy limits for Dwelling and OtherStructure"
            },
            1:{
              title:"Are wind & hail covered by this policy?",
              value:"Absolutely. Wind & hail coverage is included in Lemonade Homeowners and Condo/Co-op policies unless otherwise specified."
            }
          },
          regards:["If you have any questions, reach out to help@lemonade.com.","Thank you"]
        },
      }
    }
  };
  constructor(public dataservice: DataterminalService) {
    console.log(dataservice.allData)

  }

  ngOnInit(): void {
    console.log(this.dataservice.allData["c13quote-detail"].q01coverageamount);

    this.payable = this.dataservice.allData.home.price +
    hvi.content_lowvalue.filter((it: any) => {
      return it.insurance_value === this.dataservice.allData['c13quote-detail'].q01coverageamount['CONTENTS']
    })[0].price_month +
    hvi.personalliability.filter((it: any) => {
      return it.insurance_value ===     this.dataservice.allData['c13quote-detail'].q01coverageamount['PERSONAL LIABILITY']
    })[0].price_month +
    hvi.temporary_accomodation.filter((it: any) => {
      return it.insurance_value === this.dataservice.allData['c13quote-detail'].q01coverageamount['TEMP ACCOMMODATION']
    })[0].price_month +
    hvi.content_lowvalue.filter((it: any) => {
      return it.insurance_value === this.dataservice.allData['c13quote-detail'].q01coverageamount['TEMP ACCOMMODATION']
    })[0].price_month +
    hvi.jewellery.filter((it: any) => {
      return it.insurance_value === this.dataservice.allData['c13quote-detail'].q02highvalueitems['Jewlery']
    })[0].price_month +
    hvi.bicycles.filter((it: any) => {
      return it.insurance_value === this.dataservice.allData['c13quote-detail'].q02highvalueitems['Bicycles']
    })[0].price_month +
    hvi.cameras.filter((it: any) => {
      return it.insurance_value === this.dataservice.allData['c13quote-detail'].q02highvalueitems['Cameras']
    })[0].price_month +
    hvi.electronics.filter((it: any) => {
      return it.insurance_value === this.dataservice.allData['c13quote-detail'].q02highvalueitems['Electronics']
    })[0].price_month +
    hvi.music.filter((it: any) => {
      return it.insurance_value === this.dataservice.allData['c13quote-detail'].q02highvalueitems['Music Equipment']
    })[0].price_month +
    hvi.other.filter((it: any) => {
      return it.insurance_value === this.dataservice.allData['c13quote-detail'].q02highvalueitems['Other']
    })[0].price_month +
    0
  }

}
