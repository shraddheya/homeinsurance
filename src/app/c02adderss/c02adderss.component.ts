import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c02adderss',
  templateUrl: './c02adderss.component.html',
  styleUrls: ['./c02adderss.component.scss']
})
export class C02adderssComponent implements OnInit {  

  citystatelist = {
    'Indore,Madhyapradesh': '452010',
    'Pune,Maharashtra': '472010',
  }

  addressForm = new FormGroup({
    housenumber: new FormControl(this.dataservice.allData.c02address.housenumber, Validators.required),
    address: new FormControl(this.dataservice.allData.c02address.address, Validators.required),
    pincode: new FormControl(this.citystatelist[this.dataservice.allData.c02address.address], Validators.required),
  });

  constructor( public dataservice: DataterminalService ) { }

  ngOnInit(): void { }
  
  changed(e: any) {
    let addressValues = this.addressForm.getRawValue();
    addressValues.pincode = this.citystatelist[addressValues.address];
    this.addressForm.setValue(addressValues);
  }

  clicked() {
    this.dataservice.allData.c02address = this.addressForm.value;
    this.dataservice.changepage();
  }
}
