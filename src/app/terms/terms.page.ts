import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  constructor(private storage: StorageService) { }
  de = false;
  en = false;
  es = false;
  si = false;
  ngOnInit() {
    this.storage.getLocalData('lang').then(data => {
      switch (data) {
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
    });
  }
}
