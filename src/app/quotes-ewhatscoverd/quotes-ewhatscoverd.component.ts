import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-ewhatscoverd',
  templateUrl: './quotes-ewhatscoverd.component.html',
  styleUrls: ['./quotes-ewhatscoverd.component.scss']
})
export class QuotesEwhatscoverdComponent implements OnInit {

  whatscovered:any = [
    {
      icon:"icn-peril icn-liability sml",
      text:"LIABILITY",
      description:"A person slips and falls at your party breaking a leg. Stuff happens and you get sued. Not only do we hire a lawyer to defend you, but we cover the costs to get you out of this jam."
    },
    {
      icon:"icn-peril icn-water sml",
      text:"WATER DAMAGE",
      description:"While out with friends, your washing machine might overflow. If your stuff gets damaged, you’re covered."
    },
    {
      icon:"",
      text:"BURGLARY AND VANDALISM",
      description:"If someone breaks into your home we will cover your stolen or damaged items."
    },
    {
      icon:"",
      text:"FIRE AND SMOKE",
      description:"A faulty Christmas light or your attempt at deep frying can cause some smoke and fire damage. We cover your stuff for both."
    },
    {
      icon:"",
      text:"THEFT OUTSIDE YOUR HOME",
      description:"Whether you're at home, a cofee shop, or hanginout on Sylt we'll cover you if someone steals your stuff"
    },
    {
      icon:"",
      text:"Extereme weather",
      description:"Floods, lightning earthquakes and snow pressure are no fun. You're covered for all of them"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
