import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';
import { PasswordPatternDirective } from '../directives/password-pattern.directive';
import { PasswordMatchDirective } from '../directives/password-match.directive';
import { RegistrationPage } from './registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrationPageRoutingModule
  ],
  declarations: [RegistrationPage, PasswordPatternDirective, PasswordMatchDirective]
})
export class RegistrationPageModule {}
