import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c05size-home',
  templateUrl: './c05size-home.component.html',
  styleUrls: ['./c05size-home.component.scss']
})
export class C05sizeHomeComponent implements OnInit {

  sizetype:any;
  alert = false;
  sizeForm = new FormGroup({
    size: new FormControl(this.dataservice.allData["c05size-home"] || 10, Validators.compose([Validators.required, Validators.min(10), Validators.max(999)])),
  })
  constructor( public dataservice: DataterminalService ) { }

  ngOnInit(): void {
  }

  clicked() {
    this.dataservice.allData["c05size-home"] = this.sizeForm.value.size;
    this.dataservice.changepage();
  }

}
