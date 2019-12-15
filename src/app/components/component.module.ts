import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PlaceholderComponent } from './placeholder/placeholder.component';
import { PostComponent } from './post/post.component';

const components = [
  PlaceholderComponent,
  PostComponent
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
