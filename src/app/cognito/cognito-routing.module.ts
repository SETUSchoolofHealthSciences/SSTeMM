import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CognitoPage } from './cognito.page';

const routes: Routes = [
  {
    path: '',
    component: CognitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CognitoPageRoutingModule {}
