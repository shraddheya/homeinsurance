import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c11builthome-year',
  templateUrl: './c11builthome-year.component.html',
  styleUrls: ['./c11builthome-year.component.scss']
})
export class C11builthomeYearComponent implements OnInit {

  alert = false;
  yearForm = new FormGroup({
    builtyear: new FormControl(this.dataservice.allData["c11builthome-year"] || 10, Validators.compose([Validators.required, Validators.min(1980), Validators.max(2019)])),
  })
  constructor( public dataservice: DataterminalService ) { }

  ngOnInit(): void {
  }

  clicked() {
    this.dataservice.allData["c11builthome-year"] = this.yearForm.value.size;
    this.dataservice.changepage();
  }

}
