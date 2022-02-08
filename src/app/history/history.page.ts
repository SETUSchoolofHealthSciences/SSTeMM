import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { StressSignatue } from '../interface/stress-signature';
import { ApiService } from '../services/api.service';
import { Chart} from 'chart.js';
import { formatDate } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  @ViewChild('lineCanvas', {static: false}) lineCanvas;
  lineChart: any;
  thoughtsTranslation: string;
  feelingsTranslation: string;
  behavioursTranslation: string;
  totalTranslation: string;
  filter: string;
  filters = [];
  dayMarker: number;
  startDate: number;
  endDate: number;
  date: Date;
  constructor(public api: ApiService,
              private modalController: ModalController,
              private language: TranslateService) {
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getTranslations();
    this.dayMarker = 7;
    this.filter = 'wk';
    this.date = new Date();
    const d = new Date(this.date);
    this.startDate = d.setDate(d.getDate());
    this.endDate = d.setDate(d.getDate() - this.dayMarker);
    this.getChartArrayDetails(this.startDate, this.endDate);
  }

  up(){
    this.filters = [];
    this.endDate = this.startDate;
    const d = new Date(this.startDate);
    this.startDate = d.setDate(d.getDate() + this.dayMarker);
    console.log(this.date);
    this.getChartArrayDetails(this.startDate, this.endDate);
  }

  down() {
    this.filters = [];
    this.startDate = this.endDate;
    const d = new Date(this.endDate);
    this.endDate = d.setDate(d.getDate() - this.dayMarker);
    console.log(this.date);
    this.getChartArrayDetails(this.startDate, this.endDate);
  }

  getChartArrayDetails(start: number, end: number) {
    for (const item of this.api.allSignatures) {
      if (item.timeStamp <= start && item.timeStamp >= end) {
        this.filters.push(item);
      }
    }
    this.lineChartMethod(this.filters);
  }

  changeFilter() {
    switch (this.filter) {
      case 'wk': {
        this.filters = [] as StressSignatue[];
        const d = new Date(this.date);
        this.startDate = d.setDate(d.getDate());
        this.endDate = d.setDate(d.getDate() - this.dayMarker);
        this.getChartArrayDetails(this.startDate, this.endDate);
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

  lineChartMethod(records: any) {
    console.log(records);
    records.reverse();
    const labels = [];
    const total = [];
    const behaviours = [];
    const thoughts = [];
    const feelings = [];
    for (const item of records) {
      if (item.totalScore !== 0) {
        if (!item.domain.includes(this.behavioursTranslation)) {
          behaviours.push(0);
        }
        if (!item.domain.includes(this.thoughtsTranslation)) {
          thoughts.push(0);
        }
        if (!item.domain.includes(this.feelingsTranslation)) {
          feelings.push(0);
        }
        const label = formatDate(new Date(item.timeStamp), 'dd/MM', 'en-US');
        labels.push(label);
        total.push(item.totalScore);
        const data = JSON.parse(item.scoreCard);
        for (const i of data) {
          if (i.domain === this.behavioursTranslation) {
            behaviours.push(i.totalScore);
          } else if (i.domain === this.thoughtsTranslation) {
            thoughts.push(i.totalScore);
          } else if (i.domain === this.feelingsTranslation) {
            feelings.push(i.totalScore);
          }
        }
      }
    }
    try {
      setTimeout(() => {
        console.log('waiting');
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
          type: 'bar',
          data: {
            labels,
            datasets: [
              {
                label: this.totalTranslation,
                type: 'line',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#009989',
                borderColor: '#009989',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#009989',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#009989',
                pointHoverBorderColor: '#009989',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: total,
                spanGaps: false,
              },
              {
                label: this.behavioursTranslation,
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#F85931',
                borderColor: '#F85931',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#F85931',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#F85931',
                pointHoverBorderColor: '#F85931',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: behaviours,
                spanGaps: false,
              },
              {
                label: this.thoughtsTranslation,
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#EDB92E',
                borderColor: '#EDB92E',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#EDB92E',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#EDB92E',
                pointHoverBorderColor: '#EDB92E',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: thoughts,
                spanGaps: false,
              },
              {
                label: this.feelingsTranslation,
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#A3A948',
                borderColor: '#A3A948',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#A3A948',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#A3A948',
                pointHoverBorderColor: '#A3A948',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: feelings,
                spanGaps: false,
              }
            ]
          },
          options: {
            scales: {
                xAxes: [{
                    offset: true
                }]
            }
        }
        });
      }, 100);
    }
    catch (e){
      console.log('scanlop ', e.message);
    }
  }

  getTranslations(){
    this.language.get('button.thoughts').subscribe((value) => {
      this.thoughtsTranslation = value;
    });

    this.language.get('button.feelings').subscribe((value) => {
      this.feelingsTranslation = value;
    });

    this.language.get('button.behaviours').subscribe((value) => {
      this.behavioursTranslation = value;
    });

    this.language.get('home.total').subscribe((value) => {
      this.totalTranslation = value;
    });
  }
}
