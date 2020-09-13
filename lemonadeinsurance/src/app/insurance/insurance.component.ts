import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataterminalService } from '../dataterminal.service';
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  
  insuranceview:any = false
  insurance_claim:any;
  disabled_btn:any = true;
  constructor(public dataservice:DataterminalService) { 
    dataservice.datatransferShared.subscribe((el:any)=>{
      this.insuranceview = el.viewinfo === "insurance";
    })
  }

  ngOnInit(): void {
  }
  
  setInsurance(data){
    let check:any = data.target.value === "true";
    this.disabled_btn = check;
    this.insurance_claim = (!check) ? data.target.value : ''
  }
}
