import { Injectable } from '@angular/core';
import { CreateSSTeMMInput } from 'src/API';
import { ScoreCard, TotalScore } from '../interface/stress-signature';
import { AppsyncService } from './appsync.service';
import { createSsTeMm } from 'src/graphql/mutations';
import { NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from './authentication.service';
import { TranslationService } from './translation.service';
@Injectable({
  providedIn: 'root',
})
export class RecordService {
  stressSignature = {} as CreateSSTeMMInput;
  totalScores = [] as TotalScore[];
  totalScore = 0;
  domains = [] as string[];
  savedPressed = false;
  questionOne = [];
  questionTwo = [];
  questionThree = [];
  questionFour = [];
  questionFive = [];
  scoreCard = [] as ScoreCard[];
  totalScoreCard = {} as TotalScore;
  constructor(private auth: AuthenticationService,
              private appsync: AppsyncService,
              private nav: NavController,
              private translate: TranslationService,
              private toaster: ToastController) {}

  async saveRecord() {
    const date = +new Date();
    for (const item of this.totalScores){
      this.totalScore = this.totalScore + item.totalScore;
    }
    await this.auth.checkToken();
    if (this.auth.authenticationState) {
      this.appsync.initializeClient().then(async (client) => {
        const data: CreateSSTeMMInput = {
          cognitoId: this.auth.currentToken.sub,
          domain: this.domains,
          timeStamp: date,
          scoreCard: JSON.stringify(this.totalScores),
          totalScore: this.totalScore,
          reflection: this.stressSignature.reflection,
        };
        const mut = createSsTeMm;
        const mutation = client.mutate({
          mutation: mut,
          variables: {
            input: data,
          },
        });
        this.clearData();
      });
      this.nav.navigateRoot(['/tabs/home']);
    } else {
      this.translate.timeout();
      const toast = this.toaster.create({
        message: this.translate.toastMessage,
        duration: 3000,
        position: 'top'
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
      this.clearData();
      this.nav.navigateRoot(['login']);
    }
  }

  private clearData(){
    this.totalScore = 0;
    this.domains = [];
    this.totalScores = [];
    this.stressSignature.reflection = null;
    this.savedPressed = false;
    this.questionOne = [];
    this.questionTwo = [];
    this.questionThree = [];
    this.questionFour = [];
    this.questionFive = [];
    this.scoreCard = [] as ScoreCard[];
    this.totalScoreCard = {} as TotalScore;
  }
}
