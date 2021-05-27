import { Injectable } from '@angular/core';
import { CreateSSTeMMInput } from 'src/API';
import { ScoreCard, TotalScore } from '../interface/stress-signature';
import { StorageService } from './storage.service';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { AppsyncService } from './appsync.service';
import { createSsTeMm } from 'src/graphql/mutations';
import { NavController } from '@ionic/angular';

const TOKEN_KEY_ONE = 'auth-token';
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
  constructor(private storageService: StorageService,
              private appsync: AppsyncService,
              private nav: NavController) {}

  saveRecord() {
    const date = +new Date();
    for (const item of this.totalScores){
      this.totalScore = this.totalScore + item.totalScore;
    }
    console.log('score', this.totalScore);
    this.storageService.getLocalData(TOKEN_KEY_ONE).then((res) => {
      if (res !== null) {
        const decoded = jwt_decode<JwtPayload>(res);
        this.appsync.initializeClient().then(async (client) => {
          const data: CreateSSTeMMInput = {
            cognitoId: decoded.sub,
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
        });
      }
    });
    this.nav.navigateRoot(['/tabs/home']);
  }
}
