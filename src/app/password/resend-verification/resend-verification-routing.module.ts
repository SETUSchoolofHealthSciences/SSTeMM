import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResendVerificationPage } from './resend-verification.page';

const routes: Routes = [
  {
    path: '',
    component: ResendVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResendVerificationPageRoutingModule {}
