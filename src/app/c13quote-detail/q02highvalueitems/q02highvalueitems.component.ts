import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { DataterminalService } from '../../dataterminal.service'

@Component({
  selector: 'app-q02highvalueitems',
  templateUrl: './q02highvalueitems.component.html',
  styleUrls: ['./q02highvalueitems.component.scss']
})
export class Q02highvalueitemsComponent implements OnInit {
  asIs(a: any, b: any) { return a; }
  @ViewChild('highvaluemodal', { static: true }) private highvaluemodal: ModalDirective

  noticeModal = false;
  valueItem = {
    "JEWLERY": {
      img: "assets/valuable_items_jewelry.png",
      text: "What’s the total value of your jewelry items that are worth more than 5.000 € each?",
      maxvalue: 50000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 5000,
    },
    "BICYCLES": {
      img: "assets/valuable_items_bicycle.png",
      text: "What’s the total value of your bikes that are worth more than 5.000 € each?",
      maxvalue: 10000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 500,
    },
    "CAMERAS": {
      img: "assets/valuable_items_camera.png",
      text: "What’s the total value of your camera gear worth more than 5.000 € each?",
      maxvalue: 10000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 500,
    },
    "ELECTRONICS": {
      img: "assets/valuable_items_portable_electronics.png",
      text: "What’s the total value of your portable electronics worth more than 5.000 € each?",
      maxvalue: 10000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 500,
    },
    "MUSIC EQUIPMENT": {
      img: "assets/valuable_items_musical_instrument.png",
      text: "What’s the total value of your music gear worth more than 5.000 € each?",
      maxvalue: 10000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 500,
    },
    "OTHER": {
      img: "assets/valuable_items_other.png",
      text: "What’s the total value of any other items worth more than 5.000 € each?",
      maxvalue: 10000,
      minvalue: 5000,
      price: 5000,
      incrtoggle: 500,
    }
  };

  importantArray: any = [
    {
      img: 'assets/email_icon.png',
      text: "After you get a policy, we'll send you instructions to add your items for our review"
    },
    {
      img: 'assets/attention-icon.png',
      text: "Extra Coverage doesn't include wear & tear, equipment malfunctions and zombie attacks."
    }
  ]
  addBtn: any = false
  modalObject = {
    key: '', value: {
      img: '',
      text: '',
      maxvalue: 0,
      minvalue: 0,
      price: 0,
      incrtoggle: 0,
    }
  }

  constructor(public ds: DataterminalService) { }

  ngOnInit(): void {
  }

  additem(item: any) {
    this.ds.allData["c13quote-detail"].q02highvalueitems[item.key] = item.value.price;
    console.log(this.ds.allData["c13quote-detail"])
    this.highvaluemodal.hide();
  }

  hvalueFunction(val: any, inc: string) {
    if (val.key === this.modalObject.key) {
      if (inc === "+") this.modalObject.value.price += this.modalObject.value.incrtoggle;
      else this.modalObject.value.price -= this.modalObject.value.incrtoggle;
      this.addBtn = ((val.value.price >= this.modalObject.value.minvalue) && (val.value.price <= this.modalObject.value.maxvalue))
    }
  }

  openModal(data: any) {
    this.noticeModal = false
    this.modalObject = data;
    this.highvaluemodal.show();
  }


}
