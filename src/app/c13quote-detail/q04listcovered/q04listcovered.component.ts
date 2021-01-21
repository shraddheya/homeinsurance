import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q04listcovered',
  templateUrl: './q04listcovered.component.html',
  styleUrls: ['./q04listcovered.component.scss']
})
export class Q04listcoveredComponent implements OnInit {
  asIs(a: any, b: any) { return a; }
  whatscovered: any = {
    "LIABILITY": {
      icon: "icn-peril",
      description: "A person slips and falls at your party breaking a leg. Stuff happens and you get sued. Not only do we hire a lawyer to defend you, but we cover the costs to get you out of this jam.",
      y: '-225px',
      x: '-320px'
    },
    "WATER DAMAGE": {
      icon: "icn-peril",
      description: "While out with friends, your washing machine might overflow. If your stuff gets damaged, you’re covered.",
      y: '-75px',
      x: '-400px'
    },
    "BURGLARY AND VANDALISM": {
      icon: "icn-peril",
      description: "If someone breaks into your home we will cover your stolen or damaged items.",
      y: '0px',
      x: '-150px'
    },
    "FIRE AND SMOKE": {
      icon: "icn-peril",
      description: "A faulty Christmas light or your attempt at deep frying can cause some smoke and fire damage. We cover your stuff for both.",
      y: '0px',
      x: '-225px'
    },
    "THEFT OUTSIDE YOUR HOME": {
      icon: "icn-peril",
      description: "Whether you're at home, a cofee shop, or hanginout on Sylt we'll cover you if someone steals your stuff",
      y: '-150px',
      x: '-150px'
    },
    "Extereme weather": {
      icon: "icn-peril",
      description: "Floods, lightning earthquakes and snow pressure are no fun. You're covered for all of them",
      y: '-150px',
      x: '-240px'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
