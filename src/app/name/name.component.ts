import { Component, OnInit } from '@angular/core';
import { DataterminalService } from '../dataterminal.service';
import { FormControl , FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  namesection:any = false;
  disabledbutton = true;
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
  });
  constructor(public dataservice: DataterminalService) {
    dataservice.datatransferShared.subscribe((el:any)=>{
      this.namesection = el.viewinfo === "name";
    })
  }


  ngOnInit(): void {
  }

  activeButton(){
    this.disabledbutton = this.profileForm.value.lastName === "";
  }

}
