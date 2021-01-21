import { Component, OnInit } from '@angular/core';
import { DataterminalService } from 'src/app/dataterminal.service';

@Component({
  selector: 'app-q08activeinsurance',
  templateUrl: './q08activeinsurance.component.html',
  styleUrls: ['./q08activeinsurance.component.scss']
})
export class Q08activeinsuranceComponent implements OnInit {

  constructor(public ds: DataterminalService) { }

  ngOnInit(): void {
  }
  clicked() {
    this.ds.changepage();
  }
}
