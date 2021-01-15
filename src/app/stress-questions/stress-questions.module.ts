import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StressQuestionsPageRoutingModule } from './stress-questions-routing.module';
import { StressQuestionsPage } from './stress-questions.page';
import { QuestionComponent } from '../component/question/question.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StressQuestionsPageRoutingModule
  ],
  declarations: [StressQuestionsPage, QuestionComponent]
})
export class StressQuestionsPageModule {}
