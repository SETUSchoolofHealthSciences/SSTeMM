import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-stress-questions',
  templateUrl: './stress-questions.page.html',
  styleUrls: ['./stress-questions.page.scss'],
})
export class StressQuestionsPage implements OnInit {

  constructor(private go:Router) { }

  ngOnInit() {
  }
  
  goBack(){
    this.go.navigate(['/stress-signature']);
  }

  save(){
    this.go.navigate(['/stress-signature']);
  }
}
