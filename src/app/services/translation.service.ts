import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  toastMessage: string;
  alertHeader: string;
  alertMessage: string;
  alertButton: string;
  alertErrorHeader: string;

  constructor(private translate: TranslateService) { }

  public resendTranslations() {
    this.translate.get('alerts.emailVerHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.emailCode').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translate.get('alerts.errorHeader').subscribe(
      value => {
        this.alertErrorHeader = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButton = value;
      }
    );
  }

  public confirmSignUpWithCodeTranslation() {
    this.translate.get('toasts.verifySuccess').subscribe(
      value => {
        this.toastMessage = value;
      }
    );
    this.translate.get('alerts.errorHeader').subscribe(
      value => {
        this.alertErrorHeader = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButton = value;
      }
    );
  }

  public signoutTranslation() {
    this.translate.get('toasts.logoutSuccess').subscribe(
      value => {
        this.toastMessage = value;
      }
    );
    this.translate.get('alerts.errorHeader').subscribe(
      value => {
        this.alertErrorHeader = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButton = value;
      }
    );
  }

  public RegisterTranslations(){
    this.translate.get('alerts.emailVerHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.email.VerMessage').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translate.get('alerts.errorHeader').subscribe(
      value => {
        this.alertErrorHeader = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButton = value;
      }
    );
  }

  public signTranslations(){
    this.translate.get('toasts.successLogin').subscribe(
      value => {
        this.toastMessage = value;
      }
    );
    this.translate.get('alerts.errorHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButton = value;
      }
    );
  }
}
