import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StressQuestionsPageRoutingModule } from './stress-questions-routing.module';

import { StressQuestionsPage } from './stress-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StressQuestionsPageRoutingModule
  ],
  declarations: [StressQuestionsPage]
})
export class StressQuestionsPageModule {}
