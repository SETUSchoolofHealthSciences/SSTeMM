import { Component, OnInit, } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ApiService } from '../services/api.service';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private go: NavController,
              private auth: AuthenticationService,
              private api: ApiService,
              private loadingController: LoadingController) {}

  ngOnInit(): void {
  }

  async presentLoading(): Promise<void> {

    const loading = await this.loadingController.create({
        message: 'Please wait...',
        translucent: true,
      });
    return await loading.present();
  }

  ionViewDidEnter(): void {
    this.presentLoading();
    this.api.fetchData(this.loadingController);
  }

  add(): void {
    this.go.navigateBack(['tabs/stress-signature']);
  }

  logout(): void {
    this.auth.signOut();
  }
}
