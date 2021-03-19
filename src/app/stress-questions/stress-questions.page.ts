import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreCard, TotalScore } from '../interface/stress-signature';
import { StorageService } from '../services/storage.service';
import { AlertController } from '@ionic/angular';
import { TranslationService } from '../services/translation.service';

const TOKEN_KEY = 'domain-quest';
@Component({
  selector: 'app-stress-questions',
  templateUrl: './stress-questions.page.html',
  styleUrls: ['./stress-questions.page.scss'],
})
export class StressQuestionsPage implements OnInit {
  title: string;
  questions = [] as any[];

  private questionOne = [];
  private questionTwo = [];
  private questionThree = [];
  private questionFour = [];
  private questionFive = [];
  private scoreCard = [] as ScoreCard[];
  totalScoreCard = {} as TotalScore;
  constructor(private go: Router,
              private route: ActivatedRoute,
              private storageService: StorageService,
              private alertController: AlertController,
              private translate: TranslationService ) {
    this.readData();
   }

  ngOnInit() {
  }

  readData() {
    const questionId = this.route.snapshot.paramMap.get('id');
    this.storageService.getLocalData('lang').then(language => {
      fetch('./assets/locale/question/' + language + '.json').then(res => res.json())
      .then(json => {
        for (const con of json.domains) {
          if (questionId === con.id) {
            this.title = con.domain;
            for (const q of con.questions) {
            this.questions.push(q);
            }
          }
        }
      });
    });
  }

  async goBack(){
    this.translate.StressQuestionsGoBack();
    const alert = await this.alertController.create({
      header: this.translate.alertHeader,
      message: this.translate.alertMessage,
      buttons: [
        {
          text: this.translate.alertButtonTwo,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: this.translate.alertButtonOne,
          handler: () => {
            this.go.navigate(['/stress-signature']);
          }
        }
      ]
    });
    await alert.present();
  }

  async save(){
    this.scoreCard.push({questionId: 1, questionValue: this.questionOne[this.questionOne.length - 1]});
    this.scoreCard.push({questionId: 2, questionValue: this.questionTwo[this.questionTwo.length - 1]});
    this.scoreCard.push({questionId: 3, questionValue: this.questionThree[this.questionThree.length - 1]});
    this.scoreCard.push({questionId: 4, questionValue: this.questionFour[this.questionFour.length - 1]});
    this.scoreCard.push({questionId: 5, questionValue: this.questionFive[this.questionFive.length - 1]});
    const totalScore = this.questionOne[this.questionOne.length - 1] + this.questionTwo[this.questionTwo.length - 1] +
      this.questionThree[this.questionThree.length - 1] + this.questionFour[this.questionFour.length - 1] +
      this.questionFive[this.questionFive.length - 1];
    this.totalScoreCard = {
      domain: this.title,
      scoreCard: this.scoreCard,
      totalScore
    };
    await this.storageService.setLocalData(TOKEN_KEY, this.totalScoreCard).then(() => {
      this.go.navigate(['/stress-signature']);
    });
  }

  sliderValueChanged($event): void {
    switch ($event.rowId) {
      case 1: {
        this.questionOne.push($event.value);
        break;
      }

      case 2: {
        this.questionTwo.push($event.value);
        break;
      }

      case 3: {
        this.questionThree.push($event.value);
        break;
      }

      case 4: {
        this.questionFour.push($event.value);
        break;
      }

      case 5: {
        this.questionFive.push($event.value);
        break;
      }

      default: {
        console.log('outside of scope');
        break;
      }
    }
  }
}
