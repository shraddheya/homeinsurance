import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c09get-quote',
  templateUrl: './c09get-quote.component.html',
  styleUrls: ['./c09get-quote.component.scss']
})
export class C09getQuoteComponent implements OnInit {
  maxDate= this.datepipe.transform(new Date(new Date().getTime() - 6570 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd');
  moreDetails = new FormGroup({
    email: new FormControl(this.ds.allData['c09get-quote'].email, Validators.required),
    dob: new FormControl(this.ds.allData['c09get-quote'].dob, Validators.required),
    receivediscount: new FormControl(this.ds.allData['c09get-quote'].receivediscount, Validators.required),
    privacyterm: new FormControl(this.ds.allData['c09get-quote'].privacyterm, Validators.required),
  });
  constructor(public ds: DataterminalService, private datepipe: DatePipe) { }

  ngOnInit(): void { }
  clicked() {
    this.ds.allData['c09get-quote'] = this.moreDetails.value;
    this.ds.changepage();
  }
}
