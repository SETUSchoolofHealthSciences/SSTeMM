import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  constructor(private language: TranslateService) { }
  de = false;
  en = false;
  es = false;
  si = false;
  ngOnInit() {
      switch (this.language.currentLang) {
        case 'en': {
          this.en = true;
          this.de = false;
          this.es = false;
          this.si = false;
          break;
        }
        case 'es': {
          this.en = false;
          this.de = false;
          this.es = true;
          this.si = false;
          break;
        }
        case 'si': {
          this.en = false;
          this.de = false;
          this.es = false;
          this.si = true;
          break;
        }
        case 'de': {
          this.en = false;
          this.de = true;
          this.es = false;
          this.si = false;
          break;
        }
        default: {
          this.en = true;
          this.de = false;
          this.es = false;
          this.si = false;
        }
      }
  }
}
