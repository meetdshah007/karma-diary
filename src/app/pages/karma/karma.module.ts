import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarmaPageRoutingModule } from './karma-routing.module';

import { KarmaPage } from './karma.page';
import { ComponentModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    KarmaPageRoutingModule
  ],
  declarations: [KarmaPage]
})
export class KarmaPageModule { }
