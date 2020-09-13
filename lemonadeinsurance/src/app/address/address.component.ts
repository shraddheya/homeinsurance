import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  disabledaddress_btn: any = true
  citystatelist: any = [
    { data: 'Indore,Madhyapradesh', pincode: '452010' },
    { data: 'Pune,Maharashtra', pincode: '472010' },
  ]
  pincodeset:any = '';
  addressForm = new FormGroup({
    address: new FormControl(''),
    housenumber: new FormControl(''),
    pincodedata: new FormControl('')
  });
  record: any;
  addressview: any = false;
  name: any;
  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el: any) => {
      const checkVissible:any = el.viewinfo === "address" 
      this.addressview = checkVissible
      this.name = (checkVissible) ? el.insuracevisiter_info.names.firstName:''
      
    })
  }

  ngOnInit(): void {
  }
  setPincode(data) {
    this.citystatelist.forEach(el => {
      if (el.data === data.target.value) {
        this.pincodeset = el.pincode;
        this.addressForm.controls.pincodedata.setValue(el.pincode);
      }
    });
    this.disabledaddress_btn = false;
  }

}
