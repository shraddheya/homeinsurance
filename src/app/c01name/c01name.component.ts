import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-c01name',
  templateUrl: './c01name.component.html',
  styleUrls: ['./c01name.component.scss']
})
export class C01nameComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(this.ds.allData.c01name.firstName, Validators.required),
    lastName: new FormControl(this.ds.allData.c01name.lastName, Validators.required),
  })

  clicked() {
    this.ds.allData.c01name = this.profileForm.value;
    this.ds.changepage();
  }

  constructor( public ds: DataterminalService ) { }

  ngOnInit(): void { }
}
