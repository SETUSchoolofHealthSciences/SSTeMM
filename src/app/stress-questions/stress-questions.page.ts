import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreCard, TotalScore } from '../interface/stress-signature';
import { AlertController, NavController } from '@ionic/angular';
import { TranslationService } from '../services/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { RecordService } from '../services/record.service';
import { StorageService } from '../services/storage.service';
import { NgForm } from '@angular/forms';

const TOKEN_KEY = 'domain-quest';
@Component({
  selector: 'app-stress-questions',
  templateUrl: './stress-questions.page.html',
  styleUrls: ['./stress-questions.page.scss'],
})
export class StressQuestionsPage implements OnInit {
  title: string;
  questions = [] as any[];
  submitted = false;
  constructor(private nav: NavController,
              private route: ActivatedRoute,
              private record: RecordService,
              private alertController: AlertController,
              private translate: TranslationService,
              private language: TranslateService ) {
    this.readData();
   }

  ngOnInit() {
  }

  readData() {
    const questionId = this.route.snapshot.paramMap.get('id');
    fetch('./assets/locale/question/' + this.language.currentLang  + '.json').then(res => res.json())
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
            this.nav.navigateRoot(['/tabs/stress-signature']);
          }
        }
      ]
    });
    await alert.present();
  }

  async save(form: NgForm){
    this.record.scoreCard.push({questionId: 1, questionValue: this.record.questionOne[this.record.questionOne.length - 1]});
    this.record.scoreCard.push({questionId: 2, questionValue: this.record.questionTwo[this.record.questionTwo.length - 1]});
    this.record.scoreCard.push({questionId: 3, questionValue: this.record.questionThree[this.record.questionThree.length - 1]});
    this.record.scoreCard.push({questionId: 4, questionValue: this.record.questionFour[this.record.questionFour.length - 1]});
    this.record.scoreCard.push({questionId: 5, questionValue: this.record.questionFive[this.record.questionFive.length - 1]});
    const totalScore = this.record.questionOne[this.record.questionOne.length - 1] +
    this.record.questionTwo[this.record.questionTwo.length - 1] + this.record.questionThree[this.record.questionThree.length - 1] +
    this.record.questionFour[this.record.questionFour.length - 1] + this.record.questionFive[this.record.questionFive.length - 1];
    this.record.totalScoreCard = {
      domain: this.title,
      scoreCard: this.record.scoreCard,
      totalScore
    };
    await this.record.totalScores.push({domain: this.title,
      scoreCard: this.record.scoreCard,
      totalScore});
    this.nav.navigateRoot(['/tabs/stress-signature']);
    /* await this.storageService.setLocalData(TOKEN_KEY, this.totalScoreCard).then(() => {
      this.go.navigate(['tabs/stress-signature']);
    }); */
  }

  sliderValueChanged($event): void {
    switch ($event.rowId) {
      case 1: {
        this.record.questionOne.push($event.value);
        break;
      }

      case 2: {
        this.record.questionTwo.push($event.value);
        break;
      }

      case 3: {
        this.record.questionThree.push($event.value);
        break;
      }

      case 4: {
        this.record.questionFour.push($event.value);
        break;
      }

      case 5: {
        this.record.questionFive.push($event.value);
        break;
      }

      default: {
        console.log('outside of scope');
        break;
      }
    }
  }
}
