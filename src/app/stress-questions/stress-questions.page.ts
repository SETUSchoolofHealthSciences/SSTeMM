import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-stress-questions',
  templateUrl: './stress-questions.page.html',
  styleUrls: ['./stress-questions.page.scss'],
})
export class StressQuestionsPage implements OnInit {
  // @Output() totalScore: number;
  title: string;
  questions = [] as any[];

  private questionOne = [];
  private questionTwo = [];
  private questionThree = [];
  private questionFour = [];
  private questionFive = [];
  private scoreCard = [] as ScoreCard[];
  totalScoreCard = {} as TotalScore;
  constructor(private go: Router, private route: ActivatedRoute, ) {
    this.readData();
   }

  ngOnInit() {
  }

  readData() {
    const questionId = this.route.snapshot.paramMap.get('id');
    fetch('./assets/data/questions.json').then(res => res.json())
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

  goBack(){
    // this.go.navigate(['/stress-signature']);
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
  }

  save(){
    this.go.navigate(['/stress-signature']);
  }

  sliderValueChanged($event): void {
    if ($event.rowId === 1){
      this.questionOne.push($event.value);
    } else if ($event.rowId === 2){
      this.questionTwo.push($event.value);
    } else if ($event.rowId === 3){
      this.questionThree.push($event.value);
    } else if ($event.rowId === 4){
      this.questionFour.push($event.value);
    } else if ($event.rowId === 5){
      this.questionFive.push($event.value);
    } else {
      console.log('outside the scope');
    }
  }
}

interface ScoreCard {
  questionId: number;
  questionValue: number;
}

interface TotalScore {
  domain: string;
  scoreCard: ScoreCard[];
  totalScore: number;
}
