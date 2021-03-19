import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StressQuestionsPageRoutingModule } from './stress-questions-routing.module';
import { StressQuestionsPage } from './stress-questions.page';
import { QuestionComponent } from '../component/question/question.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { httpLoaderFactory } from '../app.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StressQuestionsPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [StressQuestionsPage, QuestionComponent]
})
export class StressQuestionsPageModule {}
