import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordCodePage } from './forgot-password-code.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordCodePageRoutingModule {}
