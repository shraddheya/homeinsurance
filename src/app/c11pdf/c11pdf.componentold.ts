import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
import * as hvi from '../../assets/oipmodel';

@Component({
  selector: 'app-c11pdf',
  templateUrl: './c11pdf.component.html',
  styleUrls: ['./c11pdf.component.scss']
})

export class C11pdfComponent implements OnInit {
  asIs(a: any, b: any) { return a; }
  data = {
    'Contents - Low Value Items': this.ds.allData['c10quote-detail'].q01coverageamount['CONTENTS'] || 0,
    'Personal Liability ': this.ds.allData['c10quote-detail'].q01coverageamount['PERSONAL LIABILITY'] || 0,
    'Temporary Accomodation': this.ds.allData['c10quote-detail'].q01coverageamount['TEMP ACCOMODATION'] || 0,
    'Contents - High Value Items (Jewlery)': this.ds.allData['c10quote-detail'].q02highvalueitems['Jewlery'] || 0,
    'Contents - High Value Items (Bicycles)': this.ds.allData['c10quote-detail'].q02highvalueitems['Bicycles'] || 0,
    'Contents - High Value Items (Cameras)': this.ds.allData['c10quote-detail'].q02highvalueitems['Cameras'] || 0,
    'Contents - High Value Items (Electronics)': this.ds.allData['c10quote-detail'].q02highvalueitems['Electronics'] || 0,
    'Contents - High Value Items (Music Equipment)': this.ds.allData['c10quote-detail'].q02highvalueitems['Music Equipment'] || 0,
    'Contents - High Value Items (Other)': this.ds.allData['c10quote-detail'].q02highvalueitems['Other'] || 0,
  };
  constructor(public ds: DataterminalService) {
    console.log(ds.allData)

  }

  ngOnInit(): void { }

}

// 'Jewlery',
// 'Bicycles',
// 'Cameras',
// 'Electronics',
// 'Music Equipment',
// 'Other',
