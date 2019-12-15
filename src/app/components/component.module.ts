import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PlaceholderComponent } from './placeholder/placeholder.component';

const components = [
  PlaceholderComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ...components
  ]
})
export class ComponentModule { }
