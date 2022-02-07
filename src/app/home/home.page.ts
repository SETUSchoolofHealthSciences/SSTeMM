import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ApiService } from '../services/api.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { TranslateService } from '@ngx-translate/core';
import { Chart} from 'chart.js';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  lineChart: any;
  thoughtsTranslation: string;
  feelingsTranslation: string;
  behavioursTranslation: string;
  totalTranslation: string;

  constructor(private auth: AuthenticationService,
              private api: ApiService,
              private loadingController: LoadingController,
              private modalController: ModalController,
              private language: TranslateService) {}

  ngOnInit(): void {
  }

  lineChartMethod(records: any) {
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
  }

  async presentLoading(): Promise<void> {
    let wait = '';
    this.language.get('home.wait').subscribe((value) => {
      wait = value;
    });
    const loading = await this.loadingController.create({
        message: wait,
        translucent: true,
        duration: 3000
      });
    return await loading.present();
  }

  async ionViewDidEnter(): Promise<void> {
    this.getTranslations();
    this.presentLoading();
    await this.api.fetchData(this.loadingController);
    this.lineChartMethod(this.api.homeSignatures);
  }

  resources(): void {
    let lang = this.language.currentLang;
    if ( lang === 'si' ){
      lang = 'sl';
    }
    window.location.href = 'https://sstemm.eu/resources/?lang=' + lang;
  }

  logout(): void {
    this.auth.signOut();
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
