import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  @Input() title: string;
  @Input() overallScore: number;
  @Input() description: string;
  constructor() { }

  ngOnInit() {}

}
