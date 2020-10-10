import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import opimjson from '../oipmodel';
import { Router } from '@angular/router';
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

  constructor(private route: Router) {
    this.allData.viewinfo = window.location.pathname.replace('/', '')
    this.datatransfer.next(this.allData)
  }

  stepsFunction(record) {
    return {
      fromPrice: () => {
        this.allData.insuracevisiter_info["fromprice"] = { name: record.title1 + ' ' + record.title2, price: record.price }
        this.allData.viewinfo = "name";
        this.route.navigate(['name'])
        this.datatransfer.next(this.allData)
      },
      nameForm: () => {
        this.allData.insuracevisiter_info["names"] = record;
        this.allData.viewinfo = "address"
        this.route.navigate(['address'])
        this.datatransfer.next(this.allData)
      },
      address: () => {
        this.allData.insuracevisiter_info['address'] = record;
        this.allData.viewinfo = "describehome"
        this.route.navigate(['describehome'])
        this.datatransfer.next(this.allData)
      },
      homesType: () => {
        this.allData.insuracevisiter_info['hometype'] = record;
        this.allData.viewinfo = "homesize"
        this.route.navigate(['homesize'])
        this.datatransfer.next(this.allData)
      },
      homeSize: () => {
        this.allData.insuracevisiter_info['homesize'] = record;
        this.allData.viewinfo = 'sequrity'
        this.route.navigate(['sequrity'])
        this.datatransfer.next(this.allData)
      },
      sequrity: () => {
        this.allData.insuracevisiter_info['sequrity'] = record;
        this.allData.viewinfo = 'memberinhome'
        this.route.navigate(['memberinhome'])
        this.datatransfer.next(this.allData)
      },
      memberinhome: () => {
        this.allData.insuracevisiter_info['members'] = record;
        this.allData.viewinfo = 'insurance'
        this.route.navigate(['insurance'])
        this.datatransfer.next(this.allData)
      },
      insuranceclaim: () => {
        this.allData.insuracevisiter_info['insuranceclaim'] = record;
        this.allData.viewinfo = 'assetspurchase'
        this.route.navigate(['assetspurchase'])
        this.datatransfer.next(this.allData)
      },
      assetspurchase: () => {
        this.allData.insuracevisiter_info['assetspurchase'] = record;
        this.allData.viewinfo = 'getquotsview'
        this.route.navigate(['getquotsview'])
        this.datatransfer.next(this.allData)
      },
      getQuote: () => {
        this.allData.insuracevisiter_info['getQuotes'] = record;
        this.allData.viewinfo = 'quotesview'
        this.route.navigate(['quotesview'])
        this.datatransfer.next(this.allData)
      }
    }
  }

  backComponent(component: any) {
    this.allData.viewinfo = component;
    this.route.navigate([component])
    this.datatransfer.next(this.allData)
  }

  resetFunction() {
    this.allData.viewinfo = "";
    this.route.navigate(['']);
    this.allData = {
      "insuracevisiter_info": {
        "fromprice": { "name": "", "price": 0 }, 
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
      "viewinfo": "pricepanel"
    };
    this.datatransfer.next(this.allData);
  }

  domFunction(data) {
    this.domEffect.next({ mode: data });
  }
}
