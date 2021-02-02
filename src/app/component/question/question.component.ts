import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: string;
  @Output() value: number;
  constructor() { }

  ngOnInit() {
    this.value = 0;
  }

  sliderValueChange($event): void {
    console.log('event ', $event.target.value);
  }
}
