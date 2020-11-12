import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerregion = { code: 'us', language: 'United state' }
  footerregionarray = [
    { code: 'de', language: 'germany (deutsch)' },
    { code: 'de', language: 'germany (english)' },
    { code: 'nl', language: 'NETHERLANDS(NETHERLANDS)' },
    { code: 'nl', language: 'NETHERLANDS(english)' },
    { code: 'fr', language: 'FRANCE(FRANCAIS)' },
    { code: 'fr', language: 'FRANCE(English)' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
