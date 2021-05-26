import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NavigationStart, Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { RecordService } from '../services/record.service';
import { filter } from 'rxjs/operators';
import { TotalScore } from '../interface/stress-signature';
@Component({
  selector: 'app-stress-signature',
  templateUrl: './stress-signature.page.html',
  styleUrls: ['./stress-signature.page.scss'],
})
export class StressSignaturePage implements AfterViewInit {
  private thoughtDomain = false;
  private feelingDomain = false;
  private behaviourDomain = false;
  private isDomainHidden = false;
  private isChoiceHidden = true;
  constructor(private nav: NavController,
              private router: Router,
              private alertController: AlertController,
              private translate: TranslationService,
              private record: RecordService) {
              }

  /* async ngOnInit() {
    // this.onViewEnter();
    this.translate.DomainNames();
    this.handleRecord();
  } */

  onViewEnter() {
    // this.translate.DomainNames();
    /* this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
      console.log(route);
      if (route.url === '/tabs/stress-signature') {
        this.handleRecord();
      }
    }); */
  }
  /* async ionViewWillEnter() {
    console.log('length ', this.record.totalScores.length);
    if (this.record.totalScores.length > 0){
      for (const domain of this.record.totalScores) {
        await this.record.domains.push(domain.domain);
        switch (domain.domain) {
          case this.translate.thoughts: {
            this.thoughtDomain = true;
            break;
          }

          case this.translate.feelings: {
            this.feelingDomain = true;
            break;
          }

          case this.translate.behaviours: {
            this.behaviourDomain = true;
            break;
          }

          default: {
            break;
          }
        }
      }
    }
  } */
  ngAfterViewInit(){
    this.translate.DomainNames();
    this.handleRecord();
  }

  async handleRecord() {
    
  }

  pickDomain(){
    this.isDomainHidden = true;
    this.isChoiceHidden = false;
  }

  thoughts(){
    this.nav.navigateBack(['/stress-questions/think']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  feelings(){
    this.nav.navigateBack(['/stress-questions/feel']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  behaviours(){
    this.nav.navigateBack(['/stress-questions/do']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  async cancel(){
    this.translate.stressSignatureCancel();
    const alert = await this.alertController.create({
      header: this.translate.alertHeader,
      message: this.translate.alertMessage,
      buttons: [
        {
          text: this.translate.alertButtonTwo,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: this.translate.alertButtonOne,
          handler: () => {
            this.behaviourDomain = false;
            this.feelingDomain = false;
            this.thoughtDomain = false;
            this.record.totalScores = [];
            this.record.domains = [];
            this.record.totalScore = 0;
            this.nav.navigateBack(['/tabs/home']);
          }
        }
      ]
    });
    await alert.present();
  }

  async save() {
    this.translate.stressSignatureSave();
    if (this.record.domains.length === 0 && !this.record.stressSignature.reflection){
      const alert = await this.alertController.create({
        header: this.translate.alertHeader,
        message: this.translate.alertMessage,
        buttons: [
          {
            text: this.translate.alertButtonOne,
            handler: () => {
              this.nav.navigateBack(['/tabs/home']);
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.record.saveRecord();
      this.behaviourDomain = false;
      this.feelingDomain = false;
      this.thoughtDomain = false;
    }
  }

  resources(){
    window.location.href = 'https://sstemm.eu';
  }

  async ionViewWillEnter(){
    this.translate.DomainNames();
    console.log('length ', this.record.totalScores.length);
    if (this.record.totalScores.length > 0){
      for (const domain of this.record.totalScores) {
        await this.record.domains.push(domain.domain);
        switch (domain.domain) {
          case this.translate.thoughts: {
            this.thoughtDomain = true;
            break;
          }

          case this.translate.feelings: {
            this.feelingDomain = true;
            break;
          }

          case this.translate.behaviours: {
            this.behaviourDomain = true;
            break;
          }

          default: {
            break;
          }
        }
      }
    }
    console.log('scanlop will enter');
  }

  ionViewDidEnter(){
    console.log('scanlop did enter');
  }

  ionViewWillLeave(){
    console.log('scanlop will leave');
  }

  ionViewDidLeave(){
    /* this.behaviourDomain = false;
    this.feelingDomain = false;
    this.thoughtDomain = false;
    this.record.totalScores = [] as TotalScore[];
    this.record.totalScore = 0;
    this.record.domains = [] as string[]; */
    console.log('scanlop did leave');
  }
}
