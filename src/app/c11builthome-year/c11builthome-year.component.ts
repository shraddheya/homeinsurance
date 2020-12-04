import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataterminalService } from '../dataterminal.service';
import * as moment from 'moment';

@Component({
  selector: 'app-c11builthome-year',
  templateUrl: './c11builthome-year.component.html',
  styleUrls: ['./c11builthome-year.component.scss']
})
export class C11builthomeYearComponent implements OnInit {
  thisYear = parseInt(moment().format("YYYY"));
  oldYear = parseInt(moment().subtract(30, "years").format("YYYY"));
  alert = false;
  yearForm = new FormGroup({
    builtyear: new FormControl(this.ds.allData["c11builthome-year"] || '', Validators.compose([Validators.required, Validators.min(this.oldYear), Validators.max(this.thisYear)])),
  })
  constructor( public ds: DataterminalService ) {
  }

  ngOnInit(): void {
  }
 
  clicked() {
    this.ds.allData["c11builthome-year"] = this.yearForm.value.builtyear;
    this.ds.changepage();
  }

}
