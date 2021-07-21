import { Component, OnInit, } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ApiService } from '../services/api.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AuthenticationService,
              private api: ApiService,
              private loadingController: LoadingController,
              private modalController: ModalController,
              private language: TranslateService) {}

  ngOnInit(): void {
  }

  async presentLoading(): Promise<void> {

    const loading = await this.loadingController.create({
        message: 'Please wait...',
        translucent: true,
        duration: 3000
      });
    return await loading.present();
  }

  ionViewDidEnter(): void {
    this.presentLoading();
    this.api.fetchData(this.loadingController);
  }

  resources(): void {
    let lang = this.language.currentLang;
    if ( lang === 'si' ){
      lang = 'sl';
    }
    window.location.href = 'https://sstemm.eu/resources/?lang=' + lang;
  }

  logout(): void {
    this.auth.signOut();
  }

  openModal(details: any) {
    this.modalController.create({
      component: DetailsPage,
      componentProps: {
        timestamp: details.timeStamp,
        overallScore: details.totalScore,
        domain: JSON.parse(details.scoreCard),
        reflection: details.reflection
      }
    }).then((modalElement) => {
      modalElement.present();
    });
  }
}
