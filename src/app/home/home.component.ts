import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataterminalService } from '../dataterminal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formsubmit: any = true;
  helpForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    writehelp: new FormControl('', Validators.required)
  })


  constructor(public ds: DataterminalService) { }

  ngOnInit(): void {
  }
  helpClicked() {
    this.formsubmit = false;
    this.ds.homepage('help',this. helpForm.value)
  }

}
