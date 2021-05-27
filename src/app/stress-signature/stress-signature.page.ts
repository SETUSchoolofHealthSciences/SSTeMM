import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { TranslationService } from '../services/translation.service';
import { RecordService } from '../services/record.service';
import { ScoreCard, TotalScore } from '../interface/stress-signature';
@Component({
  selector: 'app-stress-signature',
  templateUrl: './stress-signature.page.html',
  styleUrls: ['./stress-signature.page.scss'],
})
export class StressSignaturePage {
  private thoughtDomain = false;
  private feelingDomain = false;
  private behaviourDomain = false;
  private isDomainHidden = false;
  private isChoiceHidden = true;
  constructor(private nav: NavController,
              private alertController: AlertController,
              private translate: TranslationService,
              private record: RecordService) {
              }

  pickDomain(){
    this.isDomainHidden = true;
    this.isChoiceHidden = false;
  }

  thoughts(){
    this.nav.navigateBack(['/stress-questions/think']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  feelings(){
    this.nav.navigateBack(['/stress-questions/feel']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  behaviours(){
    this.nav.navigateBack(['/stress-questions/do']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  async cancel(){
    this.translate.stressSignatureCancel();
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
            this.behaviourDomain = false;
            this.feelingDomain = false;
            this.thoughtDomain = false;
            this.record.totalScores = [];
            this.record.domains = [];
            this.record.totalScore = 0;
            this.record.stressSignature.reflection = null;
            this.nav.navigateBack(['/tabs/home']);
          }
        }
      ]
    });
    await alert.present();
  }

  async save() {
    this.translate.stressSignatureSave();
    if (this.record.domains.length === 0 && !this.record.stressSignature.reflection){
      const alert = await this.alertController.create({
        header: this.translate.alertHeader,
        message: this.translate.alertMessage,
        buttons: [
          {
            text: this.translate.alertButtonOne,
            handler: () => {
              this.nav.navigateBack(['/tabs/home']);
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.record.savedPressed = true;
      this.record.saveRecord();
      this.behaviourDomain = false;
      this.feelingDomain = false;
      this.thoughtDomain = false;
    }
  }

  resources(){
    window.location.href = 'https://sstemm.eu';
  }

  async ionViewWillEnter(){
    this.record.savedPressed = false;
    this.translate.DomainNames();
    this.record.domains = [];
    console.log('length ', this.record.totalScores.length);
    if (this.record.totalScores.length > 0){
      for (const domain of this.record.totalScores) {
        await this.record.domains.push(domain.domain);
        switch (domain.domain) {
          case this.translate.thoughts: {
            this.thoughtDomain = true;
            break;
          }

          case this.translate.feelings: {
            this.feelingDomain = true;
            break;
          }

          case this.translate.behaviours: {
            this.behaviourDomain = true;
            break;
          }

          default: {
            break;
          }
        }
      }
    }
  }

  ionViewDidLeave(){
    if (!this.record.savedPressed) {
      this.behaviourDomain = false;
      this.feelingDomain = false;
      this.thoughtDomain = false;
      this.record.totalScores = [] as TotalScore[];
      this.record.totalScore = 0;
      this.record.domains = [] as string[];
      this.record.stressSignature.reflection = null;
      this.record.questionOne = [];
      this.record.questionTwo = [];
      this.record.questionThree = [];
      this.record.questionFour = [];
      this.record.questionFive = [];
      this.record.scoreCard = [] as ScoreCard[];
      this.record.totalScoreCard = {} as TotalScore;
    }
  }
}
