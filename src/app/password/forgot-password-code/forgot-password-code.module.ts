import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordCodePageRoutingModule } from './forgot-password-code-routing.module';

import { ForgotPasswordCodePage } from './forgot-password-code.page';
import { PasswordMatchDirective } from '../../directives/password-match.directive';
import { PasswordPatternDirective } from '../../directives/password-pattern.directive';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ForgotPasswordCodePageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [ForgotPasswordCodePage, PasswordPatternDirective, PasswordMatchDirective]
})
export class ForgotPasswordCodePageModule {}
