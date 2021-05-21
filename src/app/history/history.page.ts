import { Component, OnInit } from '@angular/core';
import { StressSignatue } from '../interface/stress-signature';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(public api: ApiService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('scanlop history did enter');
  }

  ionViewDidEnter(){
    console.log('scanlop history did enter');
  }

  ionViewWillLeave(){
    console.log('scanlop history will leave');
  }

  ionViewDidLeave(){
    console.log('scanlop history did leave');
  }
}
