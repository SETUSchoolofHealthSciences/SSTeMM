import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  constructor(private loc: Location) { }

  ngOnInit() {
  }

  goBack(){
    this.loc.back();
  }
}
