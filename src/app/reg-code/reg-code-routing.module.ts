import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegCodePage } from './reg-code.page';

const routes: Routes = [
  {
    path: '',
    component: RegCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegCodePageRoutingModule {}
