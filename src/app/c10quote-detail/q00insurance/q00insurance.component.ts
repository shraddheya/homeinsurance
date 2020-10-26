import { Component, OnInit } from '@angular/core';
import { DataterminalService } from 'src/app/dataterminal.service';

@Component({
  selector: 'app-q00insurance',
  templateUrl: './q00insurance.component.html',
  styleUrls: ['./q00insurance.component.scss']
})
export class Q00insuranceComponent implements OnInit {

  constructor( public dataservice: DataterminalService ) { }

  ngOnInit(): void {
  }

}
