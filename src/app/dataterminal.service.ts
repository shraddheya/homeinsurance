import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import opimjson from '../oipmodel';

@Injectable({
  providedIn: 'root'
})
export class DataterminalService {

  allData = { "insuracevisiter_info": 
              { "fromprice": 
                { "name": "", "price": 0 }, 
                "names": { "firstName": "", "lastName": "" }, 
                "address": { "housenumber": "", "pincodedata": "", "address": "" }, 
                "hometype": "", 
                "homesize": "", 
                "sequrity": [], 
                "members": "", 
                "insuranceclaim": "", 
                "assetspurchase": "", 
                "getQuotes": {} 
              }, 
              "viewinfo": "pricepanel" };




  // allData: any = {
  //   insuracevisiter_info: {

  //   }, viewinfo: ""
  // };
  private datatransfer = new BehaviorSubject({});
  private domEffect = new BehaviorSubject({});

  datatransferShared = this.datatransfer.asObservable();
  domEffectShared = this.domEffect.asObservable();
  constructor() {
    console.log(opimjson);
    (window as any).aldata = () => {
      console.log(this.allData);
      return (this.allData);
    };
    // this.testFunction()
  }

  stepsFunction(record) {
    return {
      fromPrice: () => {
        this.allData.insuracevisiter_info["fromprice"] = { name: record.title1 + ' ' + record.title2, price: record.price }
        this.allData.viewinfo = "name";
        this.datatransfer.next(this.allData)
      },
      nameForm: () => {
        this.allData.insuracevisiter_info["names"] = record;
        this.allData.viewinfo = "address"
        this.datatransfer.next(this.allData)
      },
      address: () => {
        this.allData.insuracevisiter_info['address'] = record;
        this.allData.viewinfo = "describehome"
        this.datatransfer.next(this.allData)
        console.log(this.allData)
      },
      homesType: () => {
        this.allData.insuracevisiter_info['hometype'] = record;
        this.allData.viewinfo = "homesize"
        this.datatransfer.next(this.allData)
      },
      homeSize: () => {
        this.allData.insuracevisiter_info['homesize'] = record;
        this.allData.viewinfo = 'sequrity'
        this.datatransfer.next(this.allData)
      },
      sequrity: () => {
        this.allData.insuracevisiter_info['sequrity'] = record;
        this.allData.viewinfo = 'memberinhome'
        this.datatransfer.next(this.allData)
      },
      memberinhome: () => {
        this.allData.insuracevisiter_info['members'] = record;
        this.allData.viewinfo = 'insurance'
        this.datatransfer.next(this.allData)
      },
      insuranceclaim: () => {
        this.allData.insuracevisiter_info['insuranceclaim'] = record;
        this.allData.viewinfo = 'assetspurchase'
        this.datatransfer.next(this.allData)
      },
      assetspurchase: () => {
        this.allData.insuracevisiter_info['assetspurchase'] = record;
        this.allData.viewinfo = 'getquotsview'
        this.datatransfer.next(this.allData)
      },
      getQuote: () => {
        this.allData.insuracevisiter_info['getQuotes'] = record;
        this.allData.viewinfo = 'quotesview'
        this.datatransfer.next(this.allData)
      }
    }
  }

  backComponent(component: any) {
    this.allData.viewinfo = component;
    this.datatransfer.next(this.allData)
  }

  resetFunction() {
    this.allData.viewinfo = "pricepanel";
    // this.allData.insuracevisiter_info = {}
    // console.log(this.allData)
    this.datatransfer.next(this.allData)
  }

  testFunction() {
    this.allData.viewinfo = "quotesview";
    this.datatransfer.next(this.allData)
  }

  domFunction(data) {
    this.domEffect.next({ mode: data });
  }
}
