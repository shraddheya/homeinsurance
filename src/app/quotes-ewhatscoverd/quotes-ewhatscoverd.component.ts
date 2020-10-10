import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-ewhatscoverd',
  templateUrl: './quotes-ewhatscoverd.component.html',
  styleUrls: ['./quotes-ewhatscoverd.component.scss']
})
export class QuotesEwhatscoverdComponent implements OnInit {

  whatscovered:any = [
    {
      icon:"icn-peril",
      text:"LIABILITY",
      description:"A person slips and falls at your party breaking a leg. Stuff happens and you get sued. Not only do we hire a lawyer to defend you, but we cover the costs to get you out of this jam.",
      y: '-225px',
      x: '-320px'
    },
    {
      icon:"icn-peril",
      text:"WATER DAMAGE",
      description:"While out with friends, your washing machine might overflow. If your stuff gets damaged, you’re covered.",
      y: '-75px',
      x: '-400px'
    },
    {
      icon:"icn-peril",
      text:"BURGLARY AND VANDALISM",
      description:"If someone breaks into your home we will cover your stolen or damaged items.",
      y: '0px',
      x: '-150px'
    },
    {
      icon:"icn-peril",
      text:"FIRE AND SMOKE",
      description:"A faulty Christmas light or your attempt at deep frying can cause some smoke and fire damage. We cover your stuff for both.",
      y: '0px',
      x: '-225px'
    },
    {
      icon:"icn-peril",
      text:"THEFT OUTSIDE YOUR HOME",
      description:"Whether you're at home, a cofee shop, or hanginout on Sylt we'll cover you if someone steals your stuff",
      y: '-150px',
      x: '-150px'
    },
    {
      icon:"icn-peril",
      text:"Extereme weather",
      description:"Floods, lightning earthquakes and snow pressure are no fun. You're covered for all of them",
      y: '-150px',
      x: '-240px'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
