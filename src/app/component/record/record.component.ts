import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  @Input() timestamp: string;
  @Input() overallScore: number;
  @Input() domain: string[];
  constructor() { }

  ngOnInit() {
  }

}
