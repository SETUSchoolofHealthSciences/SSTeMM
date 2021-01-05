import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StressSignaturePage } from './stress-signature.page';

const routes: Routes = [
  {
    path: '',
    component: StressSignaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StressSignaturePageRoutingModule {}
