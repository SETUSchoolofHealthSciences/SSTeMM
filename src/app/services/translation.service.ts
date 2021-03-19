import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  toastMessage: string;
  alertHeader: string;
  alertMessage: string;
  alertButtonOne: string;
  alertButtonTwo: string;
  alertErrorHeader: string;
  thoughts: string;
  feelings: string;
  behaviours: string;

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
        this.alertButtonOne = value;
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
        this.alertButtonOne = value;
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
        this.alertButtonOne = value;
      }
    );
  }

  public RegisterTranslations() {
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
        this.alertButtonOne = value;
      }
    );
  }

  public signTranslations() {
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
        this.alertButtonOne = value;
      }
    );
  }

  public regLeavePageTranslations() {
    this.translate.get('alerts.leavePageHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.regLeavePageMessage').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translate.get('alerts.buttonYes').subscribe(
      value => {
        this.alertButtonOne = value;
      }
    );
    this.translate.get('alerts.buttonNo').subscribe(
      value => {
        this.alertButtonTwo = value;
      }
    );
  }

  public forgotPasswordTranslation() {
    this.translate.get('alerts.forgotPasswordHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.forgotPasswordMessage').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButtonOne = value;
      }
    );
    this.translate.get('alerts.buttonTry').subscribe(
      value => {
        this.alertButtonTwo = value;
      }
    );
    this.translate.get('alerts.forgotPassworderrorHeader').subscribe(
      value => {
        this.alertErrorHeader = value;
      }
    );
  }

  public forgotPasswordCodeTranslation() {
    this.translate.get('toasts.passwordChangeSuccess').subscribe(
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
        this.alertButtonOne = value;
      }
    );
  }

  public stressSignatureCancel() {
    this.translate.get('alerts.leavePageHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.stressLeaveMessage').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translate.get('alerts.buttonYes').subscribe(
      value => {
        this.alertButtonOne = value;
      }
    );
    this.translate.get('alerts.buttonNo').subscribe(
      value => {
        this.alertButtonTwo = value;
      }
    );
  }

  public stressSignatureSave() {
    this.translate.get('alerts.stressSaveHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.stressSaveMessage').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButtonOne = value;
      }
    );
  }

  public StressQuestionsGoBack(){
    this.translate.get('alerts.leavePageHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.stressQuestionsMessage').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translate.get('alerts.buttonYes').subscribe(
      value => {
        this.alertButtonOne = value;
      }
    );
    this.translate.get('alerts.buttonNo').subscribe(
      value => {
        this.alertButtonTwo = value;
      }
    );
  }

  public DomainNames(){
    this.translate.get('button.thoughts').subscribe(
      value => {
        this.thoughts = value;
      }
    );
    this.translate.get('button.feelings').subscribe(
      value => {
        this.feelings = value;
      }
    );
    this.translate.get('button.behaviours').subscribe(
      value => {
        this.behaviours = value;
      }
    );
  }
}
