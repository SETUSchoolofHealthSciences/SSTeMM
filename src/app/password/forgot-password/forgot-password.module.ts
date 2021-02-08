import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
import { PasswordPatternDirective } from '../../directives/password-pattern.directive';
import { PasswordMatchDirective } from '../../directives/password-match.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule
  ],
  declarations: [ForgotPasswordPage, PasswordPatternDirective, PasswordMatchDirective]
})
export class ForgotPasswordPageModule {}
