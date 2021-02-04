import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: string;
  @Input() rowId: number;
  @Input() value: number;
  @Output() sliderValueChanged = new EventEmitter<{ rowId: number, value: number }>();
  constructor() { }

  ngOnInit() {
    this.value = 0;
  }

  sliderValueChange($event): void {
    this.sliderValueChanged.emit({ rowId: this.rowId, value: $event.detail.value });
  }
}
