import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @Input() timestamp: string;
  @Input() overallScore: number;
  @Input() domain?: [];
  @Input() reflection?: string;
  constructor(private modalController: ModalController,
              private translate: TranslateService) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  resources(): void {
    window.location.href = 'https://sstemm.eu';
  }
}
