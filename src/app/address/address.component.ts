import { Component, OnInit ,ViewChild,ElementRef, NgZone} from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  disabledaddress_btn: any = true
  testpanel:any;
  citystatelist: any = [
    { data: 'Indore,Madhyapradesh', pincode: '452010', selected: false},
    { data: 'Pune,Maharashtra', pincode: '472010', selected: false },
  ]
  
  pincodeset:any = '';
  addressForm = new FormGroup({
    housenumber: new FormControl(''),
    pincodedata: new FormControl(''),
    address: new FormControl('')
  });
  record: any;
  addressview: any = false;
  name: any;

  inputaddress = 'search_location'

  //#region
    @ViewChild('search' , {static:true}) public searchData: ElementRef;
  //#endregion
  constructor(public dataservice: DataterminalService ,private mapsapiLoader: MapsAPILoader , private ngZone:NgZone) {
    dataservice.datatransferShared.subscribe((el: any) => {
      const checkVissible:any = el.viewinfo === "address"
      this.addressview = checkVissible
      this.name = (checkVissible) ? el.insuracevisiter_info.names.firstName:''
    })
  }

  ngOnInit(): void {

  }
  setPincode(data) {
    // this.autocomplete = new google.maps.places.Autocomplete((data.target),{
    //   types: ['geocode'],
    // });
    // google.maps.event.addListener(this.autocomplete, 'place_changed', function(){
    //   this.near_place = this.autocomplete.getPlace();
    //   console.log(this.near_place)
    // });
    this.citystatelist.forEach(el => {
      if (el.data === data.target.value) {
        this.pincodeset = el.pincode;
        this.addressForm.controls.pincodedata.setValue(el.pincode);
      }
    });
    this.disabledaddress_btn = false;
  }
}
