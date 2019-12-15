import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarmaPageRoutingModule } from './karma-routing.module';

import { KarmaPage } from './karma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarmaPageRoutingModule
  ],
  declarations: [KarmaPage]
})
export class KarmaPageModule {}
