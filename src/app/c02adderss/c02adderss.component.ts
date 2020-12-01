import { Component, OnInit ,ViewChild, ElementRef, NgZone} from '@angular/core';
import { MapsAPILoader } from '@agm/core';
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

  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  addressForm = new FormGroup({
    housenumber: new FormControl(this.dataservice.allData.c02address.housenumber, Validators.required),
    address: new FormControl(this.dataservice.allData.c02address.address, Validators.required),
    pincode: new FormControl(this.citystatelist[this.dataservice.allData.c02address.address], Validators.required),
  });

  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    public dataservice: DataterminalService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
     ) { }

  ngOnInit(): void {
    // console.log(this.addressForm.value, this.addressForm.value.address === "");
      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        this.setCurrentLocation();
        this.geoCoder = new google.maps.Geocoder;

        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });
  }

  changed(e: any) {
    let addressValues = this.addressForm.getRawValue();
    addressValues.pincode = this.citystatelist[addressValues.address];
    this.addressForm.setValue(addressValues);
  }

  clicked() {
    this.dataservice.allData.c02address = this.addressForm.value;
    this.dataservice.changepage();
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    // console.log($event.coords);
    // this.latitude = $event.coords.lat;
    // this.longitude = $event.coords.lng;
    // this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
}
