import { Component, OnInit } from '@angular/core';
import { DataterminalService } from "../dataterminal.service";
@Component({
  selector: 'app-assetspurchase',
  templateUrl: './assetspurchase.component.html',
  styleUrls: ['./assetspurchase.component.scss']
})
export class AssetspurchaseComponent implements OnInit {
  
  assetspurchaseview:any = false;
  disabled_btn:any = true;
  assetsRange:any;
  showmessage:any = false;
  constructor(public dataservice:DataterminalService) { 
    dataservice.datatransferShared.subscribe((el:any)=>{
      this.assetspurchaseview = el.viewinfo === "assetspurchase";
    })
  }

  ngOnInit(): void {
  }

  enableBtn(data) {
    this.disabled_btn = false;
    this.showmessage = data.target.value === "Yes"
    this.assetsRange = data.target.value;
  }

}
