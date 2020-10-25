import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c04size-home',
  templateUrl: './c04size-home.component.html',
  styleUrls: ['./c04size-home.component.scss']
})
export class C04sizeHomeComponent implements OnInit {
  alert = false;
  sizeForm = new FormGroup({
    size: new FormControl(this.dataservice.allData["c04size-home"], Validators.required),
  })
  constructor( public dataservice: DataterminalService ) { }

  ngOnInit(): void {
  }

  clicked() {
    this.dataservice.allData["c04size-home"] = this.sizeForm.value.size;
    this.dataservice.changepage();
  }
}
