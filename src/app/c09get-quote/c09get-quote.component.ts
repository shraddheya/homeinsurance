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
    email: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    receivediscount: new FormControl('', Validators.required),
    privacyterm: new FormControl('', Validators.required),
  });
  constructor(public dataservice: DataterminalService, private datepipe: DatePipe) { }

  ngOnInit(): void { }
  clicked() {
    this.dataservice.changepage();
  }
}
