import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StressSignaturePageRoutingModule } from './stress-signature-routing.module';

import { StressSignaturePage } from './stress-signature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StressSignaturePageRoutingModule
  ],
  declarations: [StressSignaturePage]
})
export class StressSignaturePageModule {}
