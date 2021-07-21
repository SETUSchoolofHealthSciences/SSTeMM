import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StressQuestionsPage } from './stress-questions.page';

const routes: Routes = [
  {
    path: '',
    component: StressQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StressQuestionsPageRoutingModule {}
