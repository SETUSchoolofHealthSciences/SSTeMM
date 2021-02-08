import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordCodePageRoutingModule } from './forgot-password-code-routing.module';

import { ForgotPasswordCodePage } from './forgot-password-code.page';
import { PasswordMatchDirective } from '../../directives/password-match.directive';
import { PasswordPatternDirective } from '../../directives/password-pattern.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ForgotPasswordCodePageRoutingModule
  ],
  declarations: [ForgotPasswordCodePage, PasswordPatternDirective, PasswordMatchDirective]
})
export class ForgotPasswordCodePageModule {}
