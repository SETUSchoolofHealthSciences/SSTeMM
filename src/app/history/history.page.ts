import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { StressSignatue } from '../interface/stress-signature';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  filter: string;
  filters = [] as StressSignatue[];
  constructor(public api: ApiService,
              private modalController: ModalController) {
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.filter = 'wk';
  }

  changeFilter() {
    switch (this.filter) {
      case 'wk': {
        this.filters = [] as StressSignatue[];
        const date = new Date();
        date.setDate(date.getDate() - 7);
        for (const item of this.api.allSignatures) {
          if (item.timeStamp >= date.getTime()) {
            this.filters.push(item);
          }
        }
        break;
      }
      case 'mm': {
        this.filters = [] as StressSignatue[];
        const date = new Date();
        date.setDate(date.getDate() - 28);
        for (const item of this.api.allSignatures) {
          if (item.timeStamp >= date.getTime()) {
            this.filters.push(item);
          }
        }
        break;
      }
      case 'year': {
        this.filters = [] as StressSignatue[];
        const date = new Date();
        date.setDate(date.getDate() - 365);
        for (const item of this.api.allSignatures) {
          if (item.timeStamp >= date.getTime()) {
            this.filters.push(item);
          }
        }
        break;
      }
      case 'all': {
        this.filters = this.api.allSignatures;
        break;
      }
      default: {
        this.filters = this.api.allSignatures;
      }
    }
  }

  openModal(details: any) {
    this.modalController.create({
      component: DetailsPage,
      componentProps: {
        timestamp: details.timeStamp,
        overallScore: details.totalScore,
        domain: JSON.parse(details.scoreCard),
        reflection: details.reflection
      }
    }).then((modalElement) => {
      modalElement.present();
    });
  }
}
