import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { CreateSSTeMMInput } from '../../API';
import { AppsyncService } from '../services/appsync.service';
import { StorageService } from '../services/storage.service';
import { createSsTeMm } from '../../graphql/mutations';
import { TotalScore } from '../interface/stress-signature';
import { TranslationService } from '../services/translation.service';

const TOKEN_KEY_ONE = 'auth-token';
const TOKEN_KEY_TWO = 'domain-quest';
@Component({
  selector: 'app-stress-signature',
  templateUrl: './stress-signature.page.html',
  styleUrls: ['./stress-signature.page.scss'],
})
export class StressSignaturePage implements OnInit {
  stressSignature = {} as CreateSSTeMMInput;
  totalScores = [] as TotalScore[];

  thoughtDomain = false;
  feelingDomain = false;
  behaviourDomain = false;
  totalScore = 0;
  domains = [] as string[];
  public isDomainHidden = false;
  public isChoiceHidden = true;

  constructor(private go: Router,
              private appsync: AppsyncService,
              private storageService: StorageService,
              private alertController: AlertController,
              private translate: TranslationService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.storageService.getLocalData(TOKEN_KEY_TWO).then((res) => {
      if (res === null) {
        return;
      }
      this.totalScores.push(res);
      this.totalScore = this.totalScore + res.totalScore;
      this.domains.push(res.domain);
      for (const domain of this.totalScores) {
        switch (domain.domain ) {
          case 'Thoughts': {
            this.thoughtDomain = true;
            break;
          }

          case 'Feelings': {
            this.feelingDomain = true;
            break;
          }

          case 'Behaviours': {
            this.behaviourDomain = true;
            break;
          }

          default: {
            break;
          }
        }
      }
    });
  }

  pickDomain(){
    this.isDomainHidden = true;
    this.isChoiceHidden = false;
  }

  thoughts(){
    this.go.navigate(['/stress-questions/think']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  feelings(){
    this.go.navigate(['/stress-questions/feel']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  behaviours(){
    this.go.navigate(['/stress-questions/do']);
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
            this.storageService.removeLocalData(TOKEN_KEY_TWO);
            this.totalScore = 0;
            this.domains = [];
            this.go.navigate(['/home']);
          }
        }
      ]
    });
    await alert.present();
  }

  async save(){
    this.translate.stressSignatureSave();
    if (this.domains.length === 0 && !this.stressSignature.reflection){
      const alert = await this.alertController.create({
        header: this.translate.alertHeader,
        message: this.translate.alertMessage,
        buttons: [
          {
            text: this.translate.alertButtonOne,
            handler: () => {
              this.storageService.removeLocalData(TOKEN_KEY_TWO);
              this.totalScore = 0;
              this.domains = [];
              this.go.navigate(['/home']);
            }
          }
        ]
      });
      await alert.present();
    } else {
      const date = (+new Date());
      this.storageService.getLocalData(TOKEN_KEY_ONE).then((res) => {
        if (res !== null) {
          const decoded = jwt_decode<JwtPayload>(res);
          this.appsync.initializeClient().then(async client => {
            const data: CreateSSTeMMInput = {
              cognitoId: decoded.sub,
              domain: this.domains,
              timeStamp: date,
              scoreCard: JSON.stringify(this.totalScores),
              totalScore: this.totalScore,
              reflection: this.stressSignature.reflection
            };
            const mut = createSsTeMm;
            const mutation = client.mutate({
              mutation: mut,
              variables: {
                input: data
              }
            });
            this.storageService.removeLocalData(TOKEN_KEY_TWO);
            this.totalScore = 0;
            this.domains = [];
          });
      }});
      this.go.navigate(['/home']);
    }
  }
}
