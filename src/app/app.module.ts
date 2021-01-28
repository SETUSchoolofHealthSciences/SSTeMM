import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import Amplify, { Auth } from 'aws-amplify';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordMatchDirective } from './directives/password-match.directive';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);
/* Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: 'eu-west-1',
    userPoolId: 'eu-west-1_dSJfazWPw',
    userPoolWebClientId: '2hss4se424llruhcc82hg1rpd3',
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
}); */
@NgModule({
  declarations: [AppComponent, PasswordMatchDirective, PasswordPatternDirective],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AmplifyAngularModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
