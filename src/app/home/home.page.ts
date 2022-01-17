import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ApiService } from '../services/api.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { TranslateService } from '@ngx-translate/core';
import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js';
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
    for(const item of records) {
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
        for(const i of data) {
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
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'yellow',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'yellow',
            pointHoverBorderColor: 'yellow',
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
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'blue',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'blue',
            pointHoverBorderColor: 'blue',
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
            backgroundColor: 'green',
            borderColor: 'green',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'green',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'green',
            pointHoverBorderColor: 'green',
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
            backgroundColor: 'red',
            borderColor: 'red',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'red',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'red',
            pointHoverBorderColor: 'red',
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
