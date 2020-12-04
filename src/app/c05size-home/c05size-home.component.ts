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
    size: new FormControl(this.ds.allData["c05size-home"] || '', Validators.compose([Validators.required, Validators.min(10), Validators.max(999999)])),
  })
  constructor( public ds: DataterminalService ) { }

  ngOnInit(): void {
  }

  clicked() {
    this.ds.allData["c05size-home"] = this.sizeForm.value.size;
    this.ds.changepage();
  }

}
