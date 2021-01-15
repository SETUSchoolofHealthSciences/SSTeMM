import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-stress-questions',
  templateUrl: './stress-questions.page.html',
  styleUrls: ['./stress-questions.page.scss'],
})
export class StressQuestionsPage implements OnInit {
  questions = [] as any[];
  title: string;
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
    this.go.navigate(['/stress-signature']);
  }

  save(){
    this.go.navigate(['/stress-signature']);
  }
}
