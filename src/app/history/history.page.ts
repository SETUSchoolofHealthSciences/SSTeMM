import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(public api: ApiService) {
    console.log('scanlop', JSON.stringify(this.api.allSignatures));
   }

  ngOnInit() {
  }

}
