import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataterminalService } from '../dataterminal.service';
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";

@Component({
  selector: 'app-c02adderss',
  templateUrl: './c02adderss.component.html',
  styleUrls: ['./c02adderss.component.scss'],
})
export class C02adderssComponent implements OnInit {
  options: {
    types: [],
    componentRestrictions: { country: 'UA' }
  }
  lat: number;
  lng: number;

  addressForm = new FormGroup({
    housenumber: new FormControl(
      this.ds.allData.c02address.housenumber,
      Validators.required
    ),
    address: new FormControl(
      this.ds.allData.c02address.address,
      Validators.required
    ),
  });

  @ViewChild("placesRef") public placesRef: GooglePlaceDirective;
  mapCalc = false;
  constructor(
    public ds: DataterminalService,
  ) { }

  ngOnInit(): void { }

  public handleAddressChange(address) {
    this.lat = this.placesRef.place.geometry.location.lat()
    this.lng = this.placesRef.place.geometry.location.lng()
    this.mapCalc = true
  }

  clicked() {
    this.ds.allData.c02address = this.addressForm.value;
    this.ds.changepage();
  }
}
